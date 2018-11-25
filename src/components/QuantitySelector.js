import React from 'react';
import styled from 'react-emotion';

const Wrapper = styled('div')`
    display: flex;
    align-items: center;
    margin-top: 10px;
`

const QuantityValue = styled('div')`
    margin: 0 6px 2px;
    vertical-align: baseline;
`

const QuantitySelector = props => {
    return (
        <Wrapper>
            <div>
                <svg version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 612 612">    <g> <g id="_x38__3_"> <g> <path d="M306,0C136.992,0,0,136.992,0,306s136.992,306,306,    306s306-137.012,306-306S475.008,0,306,0z M306,573.75 C158.125,573.75,38.25,453.875,38.25,306C38.25,158.125,158.125,38.25,306,38.25c147.875,0,267.75,119.875,267.75,267.75 C573.75,453.875,453.875,573.75,306,573.75z M420.75,286.875h-95.625V191.25c0-10.557-8.568-19.125-19.125-19.125 c-10.557,0-19.125,8.568-19.125,19.125v95.625H191.25c-10.557,0-19.125,8.568-19.125,19.125c0,         10.557,8.568,19.125,19.125,19.125 h95.625v95.625c0,10.557,8.568,19.125,19.125,19.125c10.557,0,       19.125-8.568,19.125-19.125v-95.625h95.625 c10.557,0,19.125-8.568,19.125-19.125C439.875,295.443,    431.307,286.875,420.75,286.875z"/> </g> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>      <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g></svg>
            </div>
            <QuantityValue>{ props.quantity }</QuantityValue>
            <div>
                <svg width="15px" version="1.1" height="15px" viewBox="0 0 64 64"><g><g fill="#1D1D1B"><path d="m46.551,30.119h-28.285c-1.105,0-2,0.896-2,2s0.895,2 2,2h28.285c1.105,0 2-0.896 2-2s-0.895-2-2-2z"/><path d="M32,0C14.355,0,0,14.355,0,32s14.355,32,32,32s32-14.355,32-32S49.645,0,32,0z M32,60    C16.561,60,4,47.439,4,32S16.561,4,32,4s28,12.561,28,28S47.439,60,32,60z"/></g></g></svg>
            </div>
        </Wrapper>
    )
}

export default QuantitySelector;