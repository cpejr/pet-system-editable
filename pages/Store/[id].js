import React, { useState } from 'react';
import styled from 'styled-components';
import api from '../../src/utils/api';
import HeaderSearch from '../../src/components/HeaderSearch';
import FooterMobile from '../../src/components/Mobile/FooterMobile';
import StoreTabs from '../../src/components/StoreTabs';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
flex-direction: column;
font-family: Roboto;
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

const StoreName = styled.h1`
display: flex;
align-items: center;
justify-content: flex-start;
width: 70%;
@media(max-width:880px){
width: 100%;
justify-content: center;
}
`;

const StoreDatas = styled.h3`
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

export default function Store({ store }) {
  const [followBackground, setFollowBackground] = useState('#F8F8F8');
  const [followFont, setFollowFont] = useState('#609694');
  const [follow, setFollow] = useState('Seguir');

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
              ,
              {' '}
              {store.ie_state}
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
      </Container>
      <StoreTabs store={store} />
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
