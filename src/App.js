import React, { Component } from 'react';
import styled from 'react-emotion';
import './App.css';
import CartButton from './components/CartButton';
import Cart from './components/Cart'
import Modal from './components/Modal';
import { CSSTransition } from 'react-transition-group';

const CtaWrapper = styled('div')`
    margin: 6px 0 0;
    display flex;
    justify-content: space-between;
`

class App extends Component {
  state = { showModal: true }
  openModal = () => {
    this.setState({ showModal: true });
  }
  closeModal = () => {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div className="App">
        <CartButton className="btn" onClick={this.openModal}>Shopping Cart</CartButton>
          <CSSTransition
            in={this.state.showModal}
            timeout={300}
            classNames="modal"
            unmountOnExit
          > 
            <Modal onClose={this.closeModal} >
              <Cart />
              <CtaWrapper>
                <CartButton className="secondary btn" onClick={this.closeModal} >Keep Shopping</CartButton>
                <CartButton className="primary btn">To Checkout</CartButton>
              </CtaWrapper>
            </Modal>
          </CSSTransition>
        
      </div>
    );
  }
}

export default App;
