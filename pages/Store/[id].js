import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../../src/utils/api';
import HeaderSearch from '../../src/components/HeaderSearch';
import FooterMobile from '../../src/components/Mobile/FooterMobile';
import ProductsCarousel from '../../src/components/Carousels/ProductsCarousel';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
flex-direction: column;
font-family: Roboto;
margin-bottom: 2%;
`;

const StoreContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
flex-direction: row;
margin-bottom: 2%;
@media(max-width:880px){
flex-direction: column;
}
@media(max-width:800px){
margin-top: 5%;
}
`;

StoreContainer.Col1 = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 40%;
`;
StoreContainer.Col2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 40%;
flex-direction: column;
@media(max-width:880px){
width: 100%;
justify-content: center;
}
`;

StoreContainer.Col3 = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 20%;
@media(max-width:880px){
width: 50%;
justify-content: center;
}
`;

const StoreName = styled.h2`
display: flex;
align-items: center;
justify-content: flex-start;
width: 70%;
@media(max-width:880px){
width: 100%;
justify-content: center;
}
`;

const StoreDatas = styled.p`
display: flex;
align-items: center;
justify-content: flex-start;
width: 70%;
@media(max-width:880px){
width: 100%;
justify-content: center;
}
`;

const Button = styled.button`
height: 40px;
width: 70%;
font-family: Roboto;
font-size: 100%;
font-weight: 500;
background-color: ${({ theme }) => theme.colors.mediumGreen};
color: white;
border: solid;
border-width: 1px;
border-radius: 5px;
cursor:pointer;
outline:none;
@media(max-width:880px){
width: 80%;
}
`;

const ProductAndServices = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 90%;
height: 40px;
flex-direction: row;
border:solid;
border-width: 1px;
border-color:${({ theme }) => theme.colors.mediumGray} ;
`;

ProductAndServices.Col = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
`;

const ProductButton = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:20%;
height: 40px;
cursor: pointer;
border:none;
background-color:${({ theme }) => theme.colors.background};
font-size:16px;
border-bottom:solid;
border-width: 3px;
`;

const ServiceButton = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:20%;
height: 40px;
cursor: pointer;
border:none;
background-color:${({ theme }) => theme.colors.background};
font-size:16px;
border-bottom:solid;
border-width: 3px;
`;

export default function Store({ store }, { products }) {
  // const { store } = props;
  // const { products } = props;
  const [product, setProduct] = useState('#111111');
  const [service, setService] = useState('#111111');
  const [followBackground, setFollowBackground] = useState('#F8F8F8');
  const [followFont, setFollowFont] = useState('#609694');
  const [follow, setFollow] = useState('Seguir');

  function changeProduct() {
    if (product === '#111111') {
      setProduct('#609694');
    } else {
      setProduct('#111111');
    }
  }

  function changeService() {
    if (service === '#111111') {
      setService('#609694');
    } else {
      setService('#111111');
    }
  }
  function changeFollowBackground() {
    if (followBackground === '#F8F8F8') {
      setFollowBackground('#609694');
      setFollowFont('#F8F8F8');
      setFollow('Seguindo');
    } else {
      setFollowBackground('#F8F8F8');
      setFollowFont('#609694');
      setFollow('Seguir');
    }
  }

  return (
    <div>
      <HeaderSearch />
      <Container>
        {store && (
        <StoreContainer>
          <StoreContainer.Col1>
            <img alt="" className="StoreBanner" src="/images/storeBanner.png" width="450" height="200" />
          </StoreContainer.Col1>
          <StoreContainer.Col2>
            <StoreName>{store.company_name}</StoreName>
            <StoreDatas>
              Taxa de entrega: R$ 6,00
            </StoreDatas>
            <StoreDatas>
              {store.cep}
            </StoreDatas>
          </StoreContainer.Col2>
          <StoreContainer.Col3>
            <Button
              onClick={changeFollowBackground}
              style={{ backgroundColor: followBackground, borderColor: '#609694', color: followFont }}
            >
              {follow}
            </Button>
          </StoreContainer.Col3>
        </StoreContainer>
        )}
        <ProductAndServices>
          <ProductAndServices.Col>
            <ProductButton
              onClick={changeProduct}
              style={{ color: product, borderColor: product }}
            >
              Produtos
            </ProductButton>
          </ProductAndServices.Col>
          <ProductAndServices.Col>
            <ServiceButton
              onClick={changeService}
              style={{ color: service, borderColor: service }}
            >
              Serviços
            </ServiceButton>
          </ProductAndServices.Col>
        </ProductAndServices>
      </Container>
      <ProductsCarousel products={products} />
      <FooterMobile />
    </div>
  );
}
export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await api.get(`store/${id}`);
  const store = response.data;
  console.log(store);
  return { props: { store } };
}
