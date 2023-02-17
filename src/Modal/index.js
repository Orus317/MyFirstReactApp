// import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }){
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

function Modal2({children}){
    return (
        <div className='ModalBackground'>
            {children}
        </div>
    );
}

export { Modal, Modal2 };