import React, { useState } from 'react';

function Modal(Component){
    return (props) =>{
        const [isOpen, setIsOpen] = useState(false);

        const toggleModal = () =>{
            setIsOpen(!isOpen);
        };

        return(
            <Component {...props} isOpen={isOpen} toggleModal={toggleModal}/>
        )
    }
}

export default Modal;