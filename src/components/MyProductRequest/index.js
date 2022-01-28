import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ProductContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:60vw;
margin-top:2%;
margin-bottom:2%;
border-style:solid;
border-width:1px;  
border-color:${({ theme }) => theme.colors.borderBoxColor};
@media(max-width:560px){
  width:100%;
  margin-top:0%;
margin-bottom:0%;
border-top:none;
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
export default function MyProductRequest({ order_products }) {
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;
  return (
    <div>
      { order_products.map((product) => (
        <ProductContainer>
          <ProductContainer.Col1>
            <Image loader={myLoader} src={product.img} alt="" width="250" height="200" />
          </ProductContainer.Col1>
          <ProductContainer.Col2>
            <h4>{product.product_name}</h4>
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
