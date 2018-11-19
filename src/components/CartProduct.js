import React from 'react';
import styled from 'react-emotion';
import QuantitySelector from './QuantitySelector';

const Product = styled('div')`
    display: flex;
    padding: 0 0 12px;
    margin: 0 0 12px;
    border-bottom: 1px solid #00000011;
`

const Image = styled('img')`
    height: 120px;
    min-width: 80px;
    margin: 0 12px 0 6px;
`

const ProductInfo = styled('div')`
    letter-spacing: 0.02em;
    font-size: 1.6vmin;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 6px 0;
`

const Name = styled('h3')`
    letter-spacing: 0.05em;
    font-size: 1.8vmin;
    margin: 8px 0 6px;
`

const Brand = styled('span')`
    font-size: 1.2vmin;
    text-transform: uppercase;
    color: #00000088;
`

const Remove = styled('div')`
    flex: 1;
    display: flex;
    align-items: flex-end;
    font-size: 1.4vmin;
`

const CartProduct = (props) => {
    return (
        <Product>
            <Image src={props.data.imageUrl} alt="product details" />
            <ProductInfo>
                <Brand>{ props.data.brand }</Brand>
                <Name>{ props.data.name }</Name>
                <div>{ props.data.price } SEK</div>
                <QuantitySelector quantity={props.data.quantity} />
                <Remove>Remove</Remove>
            </ProductInfo>
        </Product>
    )
};

export default CartProduct;