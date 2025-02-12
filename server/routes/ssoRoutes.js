/* eslint-disable no-console */
const passport = require("../config/passport-auth");
import bodyParser from 'body-parser';
const {jwtSign, jwtVerify} = require('../utils/jwt')
const {authenticationSocialHelper} = require('../utils/auth')
const pool = require('../config/database')

/**
 * This Route Authenticates req with IDP
 * If Session is active it returns saml response
 * If Session is not active it redirects to IDP's login form
 */
const sso = (req, res, next) => {
  authenticationSocialHelper(
    req,
    res,
    next,
    {
      successRedirect: '/',
      failureRedirect: '/login',
    },
    "saml"
  );
}

const ssoCallback = (req, res) => {    
  const {nameID, email, nameIDFormat, firstname, lastname} = req.user;
  const token = jwtSign({firstname, lastname, email, nameID, nameIDFormat});
  //@TODO create user in database
  pool.runQuery(
    req, 
    res, 
    {email, firstname, lastname, token}, 
    createUserCallback
  )  
}

const ssoLogout = (req, res) => {
  const {nameID, nameIDFormat} = req.params
  req.user = { nameID, nameIDFormat }
  passport.logoutSaml(req, res)
}

const ssoLogoutCallback = (req, res) => {
  req.logout();
  res.redirect('/?logout=success');
}

const authJwt = (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.replace('Bearer ', '')
  if(authHeader === undefined) {
    res.status(401).json({ error: 'No credentials sent!' });
  }  
  try {
    const isVerfied = jwtVerify(token)
    res.status(200).json(isVerfied)
  } catch(err) {
    res.status(401).json({error: err})
  }
};

const createUserCallback = async (req, res, data, connection) => {
  const {email, firstname, lastname, token} = data;
  const row = await connection.query("SELECT id FROM users where email = ?", [email]);
  const user = row[0]  
  if (user) {
    // UPDATE
    const date =  new Date();
    const q = "UPDATE users SET last_login_at = ? WHERE id = ?";
    await connection.query(q, [date.toISOString().slice(0, 19).replace('T', ' '), user.id])
  } else {
    // INSERT
    const q = "INSERT INTO users (email, firstname, lastname) VALUES (?, ?, ?)";
    await connection.query(q, [email, firstname, lastname])
  }
  res.redirect('/?token=' + token);
}

module.exports = function(server) {
  server.get('/login/sso', sso);
  server.post('/login/saml', bodyParser.urlencoded({ extended: false }), passport.authenticate("saml", { failureRedirect: "/", failureFlash: true }), ssoCallback);
  server.get('/logout', ssoLogout);
  server.get('/logout/saml', ssoLogoutCallback);
  server.get('/auth/jwt', authJwt);
}