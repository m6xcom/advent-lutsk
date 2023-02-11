import React, { useState , useRef } from 'react';

function Modal(Component){
    return (props) =>{
        const [isOpen, setIsOpen] = useState(false);
        const modalRef = useRef();

        const toggleModal = () =>{
            setIsOpen(!modalRef.current.classList.contains('active'));
            const html = document.querySelector('html');
            isOpen ? html.classList.remove("fixing") : html.classList.add("fixing");
        };

        return(
            <Component {...props} modalRef={modalRef} isOpen={isOpen} toggleModal={toggleModal}/>
        )
    }
}

export default Modal;