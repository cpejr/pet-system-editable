import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import { HiOutlineFire } from 'react-icons/hi';
import { FaTemperatureHigh } from 'react-icons/fa';
import { Slider } from '@material-ui/core';
import {
  Price,
} from '../../index';

const ContainerFilter = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
margin-bottom:10%;
font-family:Roboto;
margin-top: 50px;
@media(min-width:699px){
      display:none;
      margin: 100%;
    }
`;
// Container.Title = styled.p`
// display:flex;
// align-items:center;
// justify-content:center;
// margin:0;
// width:100%;
// font-size:28px;
// `;
// Ordenar
const OrderContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;

`;
const OrderContainerRow1 = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
border:none;
background-color:${({ theme }) => theme.colors.background};
font-size:16px;
`;

OrderContainerRow1.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
OrderContainerRow1.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
const OrderContainerRow2 = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
border:none;
background-color:${({ theme }) => theme.colors.background};
font-size:16px;
`;
OrderContainerRow2.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
OrderContainerRow2.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

const OrderContainerRow3 = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
margin-bottom:5%;
cursor: pointer;
border:none;
background-color:${({ theme }) => theme.colors.background};
font-size:16px;
`;
OrderContainerRow3.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
OrderContainerRow3.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

// Marcas

const CategoryContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;
`;
CategoryContainer.Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row1.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row1.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;
CategoryContainer.Row2.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row2.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

CategoryContainer.Row3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;
CategoryContainer.Row3.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row3.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

CategoryContainer.Row4 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row4.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row4.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row5 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row5.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row5.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row6 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row6.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row6.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row7 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
margin-bottom:5%;
cursor: pointer;
`;

CategoryContainer.Row7.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row7.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

// Preços

const ContainerButtons = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
`;

ContainerButtons.Col = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:25%;
`;

const Button = styled.button`
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
width:40px;
height:40px;
background-color:${({ theme }) => theme.colors.mediumGray};
cursor:pointer;
`;

const PriceDelivery = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
margin-bottom:5%;
`;

PriceDelivery.Title = styled.h5`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;
PriceDelivery.Prices = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
`;
const PriceDeliveryButton = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:25%;
font-size:11px;
background-color:${({ theme }) => theme.colors.background};
border:none;
cursor:pointer;
`;
const Submit = styled.button`
height: 40px;
width: 50%;
font-family: Roboto;
font-size: 100%;
font-weight: 500;
background-color: ${({ theme }) => theme.colors.mediumGreen};
color: white;
border: 0;
border-radius: 5px;
cursor:pointer;
outline:none;
@media(max-width:320px){
  width: 70%;
    }

`;

export default function Order({ setPrice }) {

  return (
    <div>
      <ContainerFilter>
        <Price setPrice={setPrice} />
      </ContainerFilter>
    </div>
  );
}
