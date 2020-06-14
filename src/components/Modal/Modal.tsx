import React, { Component, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom';

import Button from '../Button';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

type ModalPropsWithChildren = PropsWithChildren<ModalProps>

const appRoot = document.getElementById('root'); 

class Modal extends Component<ModalPropsWithChildren> {
  element = document.createElement('div');

  componentDidMount() {
    if(appRoot && this.element) {
      document.addEventListener('keydown', this.handleKeyDown, false);
      appRoot?.appendChild(this.element);
    }
  }

  componentWillUnmount() {
    if(appRoot && this.element) {
      document.removeEventListener('keydown', this.handleKeyDown, false);
      appRoot?.removeChild(this.element);
    }
  }

  handleKeyDown = (event: KeyboardEvent) => {
    if(event.keyCode === 27) {
      this.props.onClose()
    }
  }

  render() {
    const { children, open, onClose } = this.props;
    if (open) {
      return ReactDOM.createPortal(
        (
          <div className="modal">
            <Button className="modal-CloseButton" onClick={onClose}>X</Button>
            {children}
          </div>
        ),
        this.element)
    }
    return null
  }
}

export default Modal;
