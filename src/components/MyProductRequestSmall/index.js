import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import api from '../../utils/api';
import { toast } from 'react-toastify';

const ProductContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:40vw;
margin-top:2%;
margin-bottom:2%;
margin-right: 5%;
border-style:solid;
border-width:1px;  
border-color:${({ theme }) => theme.colors.borderBoxColor};
@media(max-width:560px){
  width:100%;
  margin-top:0%;
margin-bottom:0%;
border-left:none;
border-right:none;
}
`;

ProductContainer.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:15%;

`;
ProductContainer.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:70%;
@media(max-width:960px){
  font-size:14px;
}
@media(max-width:560px){
  font-size:14px;
}
`;
ProductContainer.Col3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
vertical-align:bottom;
width:15%;
`;

toast.configure();

export default function MyProductRequest({ products }) {
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

  return (
    <div>
      {products.map((product) => (
        console.log(product),
        <>
          <ProductContainer>
            <ProductContainer.Col1>
              <Image loader={myLoader} src={product.img} width="250" height="200" />
            </ProductContainer.Col1>
            <ProductContainer.Col2>
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </ProductContainer.Col2>
            <ProductContainer.Col3>
              <h2>[{product.amount}</h2>
            </ProductContainer.Col3>
          </ProductContainer>
        </>
      ))}
    </div>
  );
}
