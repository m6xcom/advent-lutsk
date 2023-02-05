import React, { useState } from 'react';

function Modal(WrappedComponent){
    return (props) =>{
        const [isOpen, setIsOpen] = useState(false);

        const toggleModal = () =>{
            setIsOpen(!isOpen);
        };

        return(
            <WrappedComponent {...props} isOpen={isOpen} toggleModal={toggleModal}/>
        )
    }
}

export default Modal;