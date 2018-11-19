import React, { Component } from 'react';

export default class CartButton extends Component {

    render() {
        return (
            <div
                className="btn"
                onClick={this.props.onClick}>
                {this.props.children}
            </div>
        )
    }
};
