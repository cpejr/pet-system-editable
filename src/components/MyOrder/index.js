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
@media(max-width:800px){
  margin-right:0;
  height:14vh;
  width:60vw; 
}
@media(max-width: 500px){
  width:100%;
}
@media(max-width: 300px){
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

const Content = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`;

export default function MyOrder() {
  return (
    <Content>
      <ProductContainer>
        <ProductContainer.Col1>
          <Image src="/images/shampoo.jpg" width="250" height="200" />
        </ProductContainer.Col1>
        <ProductContainer.Col2>
          <h4>Shampoo para Cachorro Filhote Sanol 500ml</h4>
          <p>R$ 17,00</p>
        </ProductContainer.Col2>
        <ProductContainer.Col3>
          <h2>1</h2>
        </ProductContainer.Col3>
      </ProductContainer>
      <ProductContainer>
        <ProductContainer.Col1>
          <Image src="/images/racao.jpg" width="250" height="200" />
        </ProductContainer.Col1>
        <ProductContainer.Col2>
          <h4>
            Golden Power Training Filhote para Cães Sabor Frango e Arroz - 15kg
          </h4>
          <p>R$ 170,00</p>
        </ProductContainer.Col2>
        <ProductContainer.Col3>
          <h2>1</h2>
        </ProductContainer.Col3>
      </ProductContainer>
    </Content>
  );
}
