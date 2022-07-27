import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

const ImagesModalContext = React.createContext();

export function ImagesModalProvider({ children }) {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current);
    }, [])

    return (
        <>
            <ImagesModalContext.Provider value={value}>
                {children}
            </ImagesModalContext.Provider>
            <div ref={modalRef} />
        </>
    );
}

export function ImagesModal({ onClose, children }) {
    const modalNode = useContext(ImagesModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={onClose} />
            <div id="modal-content">
                {children}
            </div>
        </div>,
        modalNode
    );
}