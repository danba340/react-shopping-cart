import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'react-emotion';
import ModalCloseButton from './ModalCloseButton';

const ModalWrapper = styled('div')`
  position: fixed;
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
  min-width: 300px;
  max-width: 480px;
  min-height: 300px;
  max-height: calc(100vh - 20px);
  padding: 10px;
  text-align: center;
`

const ModalInnerWrapper = styled('div')`
    position: relative;
    height: 100%;
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
                    <ModalInnerWrapper>
                        <ModalCloseButton onClick={this.props.onClose} />
                        {this.props.children}
                    </ModalInnerWrapper>
                </ModalContent>
            </ModalWrapper>
        )
    }
}