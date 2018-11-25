import React from 'react';

const CartButton = (props) => {
    return (
        <div
            className={props.className}
            onClick={props.onClick}>
            {props.children}
        </div>
    )
};

export default CartButton;