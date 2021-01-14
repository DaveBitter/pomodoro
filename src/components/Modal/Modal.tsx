// Libs
import React from 'react';

// Utils

// Resources

// Components

// Interface
interface IPropsModalTrigger {
    children: JSX.Element[] | JSX.Element | string | number,
    handleOpen: () => void
}

interface IPropsModal {
    children: JSX.Element[] | JSX.Element | string | number,
    trigger: JSX.Element[] | JSX.Element | string | number,
    heading?: string,
    isOpen: boolean
    handleClose: () => void
}

// Component
const ModalTrigger = ({ children, handleOpen, ...attributes }: IPropsModalTrigger) => {
    return <button className='modal__trigger' onClick={handleOpen} {...attributes}>
        {children}
    </button>;
};

const Modal = ({ children, trigger, heading, handleClose, isOpen, ...attributes }: IPropsModal) => {
    return <div className='modal' data-is-open={isOpen} {...attributes}>
        <div className='modal__container'>
            <div className='modal__header'>
                {heading && <h2 className='modal__heading h3'>{heading}</h2>}
                <button className='modal__close' onClick={handleClose}>close</button>
            </div>
            <div className='modal__content'>
                {children}
            </div>
        </div>
        <div className='modal__trigger'>{trigger}</div>
    </div>;
};

// Props
Modal.defaultProps = {};
Modal.Trigger = ModalTrigger

export default Modal;