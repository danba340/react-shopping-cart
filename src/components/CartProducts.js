import React from 'react';
import CartProduct from './CartProduct';

const CartProducts = (props) => {
    return (
        <div>
            { props.data.items.map(product => <CartProduct key={product.id} data={product} />) }
        </div>
    )
};

export default CartProducts;