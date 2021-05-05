import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const customStyles = {
  content: {
    width: "50%",
    height: "65%",
    padding: "20px",
    margin: "auto",
    textAlign: "left",
  }
};

const ShowKeyBoardShortcuts = ({ isOpen, close }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Keyboard Shortcuts"
    >
      <div style={{ display: "flex" }}>
        <button style={{ marginLeft: "auto" }} onClick={close}>CLOSE</button>
      </div>

      <h4><b>Keyboard Shortcuts</b></h4>
      <table>
        <tr>
          <th>L</th>
          <th style={{ fontWeight: "normal" }}>Toggle Larivar</th>
        </tr>
        <tr>
          <th><b>Shift + L</b></th>
          <th style={{ fontWeight: "normal" }}>Toggle Larivar Assist</th>
        </tr>
        <tr>
          <th><b>V</b></th>
          <th style={{ fontWeight: "normal" }}>Toggle Vishraams</th>
        </tr>
        <tr>
          <th><b>A</b></th>
          <th style={{ fontWeight: "normal" }}>Toggle Autoscroll Mode</th>
        </tr>
        <tr>
          <th><b>Ctrl + Shift + C</b></th>
          <th style={{ fontWeight: "normal" }}>Center Align</th>
        </tr>
        <tr>
          <th><b>E</b></th>
          <th style={{ fontWeight: "normal" }}>Toggle English Translation</th>
        </tr>
        <tr>
          <th><b>T</b></th>
          <th style={{ fontWeight: "normal" }}>Toggle Punjabi Translation</th>
        </tr>
        <tr>
          <th><b>S</b></th>
          <th style={{ fontWeight: "normal" }}>Toggle Spanish Translation</th>
        </tr>
        <tr>
          <th><b>Shift + E</b></th>
          <th style={{ fontWeight: "normal" }}>Toggle English Transliteration</th>
        </tr>
        <tr>
          <th><b>Shift + S</b></th>
          <th style={{ fontWeight: "normal" }}>Toggle Shahmukhi Transliteration</th>
        </tr>
        <tr>
          <th><b>Shift + H</b></th>
          <th style={{ fontWeight: "normal" }}>Toggle Hindi Transliteration</th>
        </tr>
      </table>
    </Modal>
  )
}

ShowKeyBoardShortcuts.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}

export default ShowKeyBoardShortcuts;
