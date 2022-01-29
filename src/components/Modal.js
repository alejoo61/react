import React from 'react';
import  './Modal.css';
;


const Modal = (isOpen, closeModal ) => {
  return (
    <div className={`modal1 ${isOpen && 'modal1-open'}`}>
        <h1>Modal</h1>
        <button className="btn btn-close" onClick={closeModal}></button>
    </div>  
  ) 
};

export default Modal;



