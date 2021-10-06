import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
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
      console.log(res.data);
    });
  }, []);
  console.log(store);
  const { product } = props;
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
              <img src={`https://s3-sa-east-1.amazonaws.com/petsystembucket/${product.img}`} width="300" height="350" alt="" />
            </ProductContainer.Col1>

            <ProductContainer.Col2>
              <ProductTitle>
                {product.product_name}
              </ProductTitle>
              <Price>
                R$
                {' '}
                {product.price}
              </Price>
              <Delivery>
                Frete: R$ 4,99
              </Delivery>
              <Delivery>
                Tempo de entrega: 15 - 20 min
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
              <Store>
                <Store.Title>
                  Loja
                </Store.Title>
                <Store.Text>
                  {store.company_name}
                </Store.Text>
              </Store>
            </ProductContainer.Col2>
          </ProductContainer>
          <Description>

            <Description.Title>
              Descrição do produto:
            </Description.Title>
            <Description.Text>
              {product.description}
            </Description.Text>

          </Description>

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
