import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected option"
        closeTimeoutMS={200}
        className="modal"
        onRequestClose={props.closeModal}>
            <h3 className="modal__title">Selected Option</h3>
            <p className="modal__body">{props.selectedOption}</p>
            <button className="button" onClick={props.closeModal}>OK</button>
    </Modal>
);

export default OptionModal;