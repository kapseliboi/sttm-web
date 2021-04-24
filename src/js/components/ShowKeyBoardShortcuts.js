import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const ShowKeyBoardShortcuts = ({ isOpen, close }) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Example Modal"
    >
      <button onClick={close}>close</button>
    </Modal>
  )
}

ShowKeyBoardShortcuts.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}

export default ShowKeyBoardShortcuts;
