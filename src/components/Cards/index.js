import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import ModalEditProducts from '../ModalEditProducts';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  margin-top: 5px;
  font-family: Roboto;
  display: flex;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  border: 2px;
  width: 150px;
  height: 220px;
  margin-top: 20px;
`;
const Price = styled.div`
  background-color: ${({ theme }) => theme.colors.mediumRed};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  color: white;
  font-family: Roboto;
  border-radius: 0 0 20px 20px;
  margin-top: 10px;
`;
export default function Cards(props) {
  const { product } = props;
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;
  return (
    <Card>
      <ModalEditProducts product={product} />
      <Container>
        <Image
          loader={myLoader}
          src={product.img}
          alt={product.product_name}
          width="100px"
          height="100px"
        />
      </Container>
      <Title>{product.product_name}</Title>
      <Price>
        R$
        {' '}
        {product.price}
      </Price>
    </Card>
  );
}
