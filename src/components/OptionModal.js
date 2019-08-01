import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected option"
        onRequestClose={props.closeModal}>
            <h3>Selected Option</h3>
            <p>{props.selectedOption}</p>
            <button onClick={props.closeModal}>OK</button>
    </Modal>
);

export default OptionModal;