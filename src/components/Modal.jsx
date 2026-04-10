import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({isOpen, onClose, children}) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

  return createPortal(
    <div className="modal">
        <div className='modal-overlay'>
            <div className='modal-content'>
                <button onClick={onClose} className='modal-close'>X</button>
                {children}
            </div>
        </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal