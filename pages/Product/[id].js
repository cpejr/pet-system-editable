import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import api from '../../src/utils/api';
import { Header, FooterMobile } from '../../src/components/index';
import {
  Container, ProductContainer, ProductTitle, Price, Delivery,
  ButtonsContainer, Button, AddCarButton, Store, Description,
  BackPage, BackButton,
} from './styles';

export default function Product(props) {
  const [store, setStore] = useState([]);
  useEffect(() => {
    api.get(`store/${product.firebase_id_store}`).then((res) => {
      setStore(res.data);
    });
  }, []);
  const { product } = props;

  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

  return (
    <div>
      <Header />
      <BackPage>
        <BackButton>
          <FaArrowLeft size={24} />
          Voltar
        </BackButton>
      </BackPage>
      { product && (
      <Container>
        <ProductContainer>
          <ProductContainer.Col1>
            <Image loader={myLoader} src={product.img} alt="" width="751" height="689" />
            <Description>
              <Description.Title>
                Descrição do produto:
              </Description.Title>
              <Description.Text>
                {product.description}
              </Description.Text>
            </Description>
          </ProductContainer.Col1>

          <ProductContainer.Col2>
            <ProductTitle>
              {product.product_name}
            </ProductTitle>
            <Store>
              <Store.Title>
                Vendido e entregue por:
              </Store.Title>
              <Store.Text>
                {store.company_name}
              </Store.Text>
            </Store>
            <Price>
              R$
              {' '}
              {product.price}
            </Price>
            <Delivery>
              Frete:
              {' '}
              R$
              {' '}
              {store.shipping_tax}
            </Delivery>
            <ButtonsContainer>
              <ButtonsContainer.Col>
                <Button>
                  Comprar
                </Button>
              </ButtonsContainer.Col>
              <ButtonsContainer.Col>
                <AddCarButton>
                  Adicionar ao carrinho
                </AddCarButton>
              </ButtonsContainer.Col>
            </ButtonsContainer>
          </ProductContainer.Col2>
        </ProductContainer>
      </Container>
      )}
      <FooterMobile />
    </div>
  );
}
export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await api.get(`product/${id}`);
  const product = response.data;
  return { props: { product } };
}
