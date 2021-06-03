import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import api from '../../src/utils/api';
import Header from '../../src/components/Header';
import FooterMobile from '../../src/components/Mobile/FooterMobile';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
font-family: Roboto;
flex-direction: column;
margin-top: 2%;
`;

const ProductContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
width: 100%;
flex-direction: row;
@media(max-width:880px){
    flex-direction: column;
    align-items: center;
}
`;

ProductContainer.Col1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 40%;
margin: 0;
`;

ProductContainer.Col2 = styled.div`
display: flex;
align-items: initial;
justify-content: center;
width: 40%;
flex-direction: column;
@media(max-width:880px){
    width: 70%;
}
`;

const ProductTitle = styled.h2`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
margin: 0;
@media(max-width:880px){
    margin-top: 5%;
}
`;

const Price = styled.h3`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
margin-bottom: 0;
`;

const Delivery = styled.p`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
margin-bottom: 0;
`;

const ButtonsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
flex-direction: row;
margin-top: 10%;
@media(max-width:880px){
    flex-direction: column;
}
`;

ButtonsContainer.Col = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
flex-direction: column;
@media(max-width:880px){
   width: 100%;
   margin-bottom: 2%;
}
`;

const Button = styled.button`
height: 50px;
width: 80%;
font-family: Roboto;
font-size: 100%;
font-weight: 500;
background-color: ${({ theme }) => theme.colors.mediumGreen};
color: white;
border: 0;
border-radius: 5px;
cursor:pointer;
outline:none;
`;

const AddCarButton = styled.button`
height: 50px;
width: 80%;
font-family: Roboto;
font-size: 100%;
font-weight: 500;
background-color: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.mediumGreen};
border: 1;
border-color: ${({ theme }) => theme.colors.mediumGreen};
border-radius: 5px;
cursor:pointer;
outline:none;
`;

const Store = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction:column;
width: 100%;
`;

Store.Title = styled.h3`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
`;

Store.Text = styled.button`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
color:${({ theme }) => theme.colors.mediumGray} ;
border:none;
background-color: ${({ theme }) => theme.colors.background};
cursor:pointer;
margin: 0;
font-size: 16px;
font-family:Roboto;
padding: 0;
`;

const Description = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 62%;
flex-direction:column;
@media(max-width:880px){
    width: 70%;
    margin-bottom: 15%;
}
`;

Description.Title = styled.h3`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
margin-bottom: 0;
`;

Description.Text = styled.p`
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
color:${({ theme }) => theme.colors.mediumGray} ;
`;

const BackPage = styled.div`
display:none;
@media(max-width:800px){
display: flex;
align-items: center;
justify-content: center;
width: 40%;
flex-direction: row;
margin-top: 5%;
}
`;

const BackButton = styled.button`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
color:black ;
border:none;
background-color: ${({ theme }) => theme.colors.background};
cursor:pointer;
margin: 0;
font-size: 24px;
font-family:Roboto;
font-weight:bold;
padding: 0;
`;

export default function Product(props) {
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
              <img src="/images/RaçãoCachorro.jpg" width="300" height="350" alt="" />
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
                  {product.store.company_name}
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
  console.log(product);
  return { props: { product } };
}
