import React from 'react';

const CartButton = (props) => {
    return (
        <div 
            className="btn"
            onClick={props.onClick}>
            {props.children}
        </div>
    )
};

export default CartButton;