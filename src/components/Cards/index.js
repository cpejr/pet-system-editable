import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
margin-top:20px;
`;
const Title = styled.div`
margin-top: 20px;
font-family: Roboto;
`;
const Card = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:white;
border-radius:20px;
border: 2px;
width:150px;
// height:200px;
margin-top: 20px;
`;
const Price = styled.div`
background-color:${({ theme }) => theme.colors.mediumRed};
display: flex;
align-items:center;
justify-content: center;
width:100%;
height:40px;
color: white;
font-family: Roboto;
border-radius: 0 0 20px 20px;
margin-top: 20px;
`;
export default function Cards(props) {
  const { product } = props;
  return (
    <Card>
      <Container>
        <Image src="/images/RaçãoCachorro.jpg" alt="racao" width="100px" height="100px" />
      </Container>
      <Title>
        {product.product_name}
      </Title>
      <Price>
        R$
        {' '}
        {product.price}
      </Price>
    </Card>

  );
}
