import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import ModalEditProducts from '../ModalEditProducts';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
const CardTitle = styled.div`
  margin: 5px;
  font-family: Roboto;
  display: flex;
  min-height: 100px;
  height: 100%;
  text-align: center;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 20px;
  border: 2px;
  width: 200px;
  height: fit-content;
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
export default function Cards({
  product, categories, att, setAtt,
}) {
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;
  return (
    <Card>
      <ModalEditProducts
        product={product}
        categories={categories}
        setAtt={setAtt}
        att={att}
      />
      <Container>
        <Image
          loader={myLoader}
          src={product.img}
          alt={product.product_name}
          width="100px"
          height="100px"
        />
      </Container>
      <CardTitle>{product.product_name}</CardTitle>
      <Price>
        R$
        {' '}
        {product.price}
      </Price>
    </Card>
  );
}
