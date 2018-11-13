import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'react-emotion';

const ModalWrapper = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000077
`

const ModalContent = styled('div')`
  border-radius: 10px;
  background: white;
  box-shadow: 0 2px 10px #00000077;
  width: calc(100% - 40px);
  max-width: 640px;
  max-height: 480px;
  height: calc(100vh - 20px);
  padding: 10px;
  text-align: center;
`

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.element = document.getElementById("modal-root");
    }
    componentDidMount() {
        document.addEventListener('keyup', this.keyup, false);
    }
    componentWillUnmount() {
        document.removeEventListener('keyup', this.keyup, false); 
    }
    keyup = e => {
        if (e.key === 'Escape') {
            this.props.onClose();
        }
    }
    render() {
        return ReactDOM.createPortal(this._renderModal(), this.element);
    }
    _renderModal() {
        return (
            <ModalWrapper className="modal-wrapper" onClick={this.props.onClose} >
                <ModalContent className="modal-content" onClick={e => e.stopPropagation()} >
                    {this.props.children}
                </ModalContent>
            </ModalWrapper>
        )
    }
}