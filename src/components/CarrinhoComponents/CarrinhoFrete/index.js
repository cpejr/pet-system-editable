import React from 'react';
import styled from "styled-components";
import { Form, Input } from 'react-bootstrap';

const CarrinhoFreteWrapper = styled.div`
display: flex;
flex-direction: row;
width: 25vw;
justify-content: space-between;
align-items: center;
padding-top: 1em;
margin-bottom: 7.5em;
`;

const CarrinhoFreteInputFalso = styled.div`
display: flex;
background-color: #C4C4C4;
width: 6em;
height: 2em;
justify-content: center;
align-items: center;
font-family: Roboto;
font-size: 1.5em;
color: #8E8585;
border-radius: 6px;
`;

const CarrinhoFreteButton = styled.button`
display: flex;
background-color: #609694;
color: #ffffff;
cursor: pointer;
height: 80%;
width: 10vw;
align-items: center;
justify-content: center;
`;

export default function CarrinhoFrete() {
    return (
        <CarrinhoFreteWrapper>
            <Input type="text" class="form-control" />
            <CarrinhoFreteButton>Calcular</CarrinhoFreteButton>
        </CarrinhoFreteWrapper>
    )
}