import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled('div')`
    text-align: right;
    font-size: 1.8vmin;
    margin: 24px 12px 0;
    padding-bottom: 12px;
    border-bottom: 1px solid #00000011;
`

const Row = styled('div')`
    margin: 12px 0;
`

const Value = styled('div')`
    min-width: 84px;
    display: inline-block;
`

const Totals = (props) => {
    let totals = props.data.totals;
    let currency = props.data.currency;
    return (
        <Wrapper>
            <Row>
                <span>Products total</span><Value> { totals.cartTotal } { currency }</Value>
            </Row>
            <Row>
                <span>{ totals.discountPercentage }% discount on your order</span><Value>-{ totals.calculatedDiscount } { props.data.currency }</Value>
            </Row>
            <Row>
                <span>Free shipping on all physics products</span><Value>0 { props.data.currency }</Value>
            </Row>
            <Row>
                <span>Order total</span><Value> { totals.orderTotal } { props.data.currency }</Value>
            </Row>
        </Wrapper>
    )
};

export default Totals;