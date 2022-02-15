import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ProductContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:90%;
height: 16vh;
margin-top:2%;
margin-bottom:2%;
border-style:solid;
border-width:1px;  
border-radius:5px;
border-color:${({ theme }) => theme.colors.borderBoxColor};
@media (max-width: 1480px) {
  margin-right:0;
}
@media(max-width:875px){
  margin-right:0;
  height:14vh;
  width:60vw; 
}
@media(max-width: 500px){
  width:100%;
}
@media(max-width: 315px){
    height:22vh;
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
width:75%;
@media(max-width:560px){
  font-size:14px;
}

`;
ProductContainer.Col3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
vertical-align:bottom;
width:10%;
`;

const Name = styled.div`
display:flex;
justify-content:center;
align-items:center;
font-weight:300;
font-family:Roboto;
font-size:1.2em;
margin-bottom:2%;
`;

export default function MyOrder({ products }) {
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;
  return (
    <div>
      { products?.map((product) => (
        <ProductContainer>
          <ProductContainer.Col1>
            <Image loader={myLoader} src={product.img} alt="" width="250" height="200" />
          </ProductContainer.Col1>
          <ProductContainer.Col2>
            <Name>{product.product_name}</Name>
            <p>{`R$${product.price}`}</p>
          </ProductContainer.Col2>
          <ProductContainer.Col3>
            <h2>{product.amount}</h2>
          </ProductContainer.Col3>
        </ProductContainer>
      ))}
    </div>
  );
}
