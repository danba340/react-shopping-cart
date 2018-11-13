import React, { Component } from 'react';
import './App.css';
import CartButton from './components/CartButton';
import Cart from './components/Cart'
import Modal from './components/Modal';
import { CSSTransition } from 'react-transition-group';


class App extends Component {
  state = { showModal: false }
  openModal = () => {
    this.setState({ showModal: true });
  }
  closeModal = () => {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div className="App">
        <CartButton onClick={this.openModal}>Shopping Cart</CartButton>
          <CSSTransition
            in={this.state.showModal}
            timeout={300}
            classNames="modal"
            unmountOnExit
          > 
            <Modal onClose={this.closeModal} ><Cart/></Modal>
          </CSSTransition>
        
      </div>
    );
  }
}

export default App;
