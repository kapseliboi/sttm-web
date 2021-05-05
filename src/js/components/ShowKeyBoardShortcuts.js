import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const customStyles = {
  content: {
    height: '65%',
    margin: 'auto',
    padding: '20px',
    textAlign: 'left',
    width: '50%',
  },
};

const ShowKeyBoardShortcuts = ({ isOpen, close }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Keyboard Shortcuts"
    >
      <div style={{ display: 'flex' }}>
        <button style={{ marginLeft: 'auto' }} onClick={close}>
          CLOSE
        </button>
      </div>

      <h4>
        <b>Keyboard Shortcuts</b>
      </h4>
      <table>
        <tr>
          <th>L</th>
          <th style={{ fontWeight: 'normal' }}>Toggle Larivar</th>
        </tr>
        <tr>
          <th>Shift + L</th>
          <th style={{ fontWeight: 'normal' }}>Toggle Larivar Assist</th>
        </tr>
        <tr>
          <th>V</th>
          <th style={{ fontWeight: 'normal' }}>Toggle Vishraams</th>
        </tr>
        <tr>
          <th>A</th>
          <th style={{ fontWeight: 'normal' }}>Toggle Autoscroll Mode</th>
        </tr>
        <tr>
          <th>Ctrl + Shift + C</th>
          <th style={{ fontWeight: 'normal' }}>Center Align</th>
        </tr>
        <tr>
          <th>E</th>
          <th style={{ fontWeight: 'normal' }}>Toggle English Translation</th>
        </tr>
        <tr>
          <th>T</th>
          <th style={{ fontWeight: 'normal' }}>Toggle Punjabi Translation</th>
        </tr>
        <tr>
          <th>S</th>
          <th style={{ fontWeight: 'normal' }}>Toggle Spanish Translation</th>
        </tr>
        <tr>
          <th>Shift + E</th>
          <th style={{ fontWeight: 'normal' }}>
            Toggle English Transliteration
          </th>
        </tr>
        <tr>
          <th>Shift + S</th>
          <th style={{ fontWeight: 'normal' }}>
            Toggle Shahmukhi Transliteration
          </th>
        </tr>
        <tr>
          <th>Shift + H</th>
          <th style={{ fontWeight: 'normal' }}>Toggle Hindi Transliteration</th>
        </tr>
      </table>
    </Modal>
  );
};

ShowKeyBoardShortcuts.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default ShowKeyBoardShortcuts;
