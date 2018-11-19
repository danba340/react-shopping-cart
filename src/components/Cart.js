import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import Spinner from './Spinner';
import CartProducts from './CartProducts';
import Totals from './Totals';


export default class Cart extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            cartData: null,
        }
    }
    componentWillMount() {
        axios.get('./cartData.json')
            .then( response => {

            setTimeout(() => {
                this.setState({
                    loading: false,
                    cartData: response.data
                })
            }, 500);
            
        })
        .catch( error => {
            console.log(error);
            this.setState({
                loading: false
            });
        });
    }
    renderCart() {
        if (!this.state.loading && !this.state.cartData) {
            return <div>Your cart is empty.</div>;
        }
        return (
            <div>
                { this.state.loading &&
                    <Spinner />
                }
                <CSSTransition
                    in={!this.state.loading}
                    timeout={300}
                    classNames="cart"
                    unmountOnExit
                    >
                    <Fragment>
                        <CartProducts data={this.state.cartData} />
                        <Totals data={this.state.cartData} />
                    </Fragment>
                </CSSTransition>
            </div>
        )
    }
    render() {
        return (
            <div className={ this.state.loading ? 'loading' : '' }  >
                <h2>Shopping cart</h2>
                { this.renderCart() }
            </div>
        )
    }
};