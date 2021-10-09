import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import api from "../../src/utils/api";
import HeaderSearch from "../../src/components/HeaderSearch";
import FooterMobile from "../../src/components/Mobile/FooterMobile";
import StoreTabs from "../../src/components/StoreTabs";


const ContainerDoContainer = styled.div`
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  font-family: Roboto;
  margin: 0;
`;

const StoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  margin-bottom: 2%;
  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

StoreContainer.Col1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
StoreContainer.Col2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  flex-direction: column;
  @media (max-width: 880px) {
    width: 100%;
    justify-content: center;
  }
`;


const StoreName = styled.h1`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  @media (max-width: 880px) {
    width: 100%;
    justify-content: center;
  }
`;

const StoreDatas = styled.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  @media (max-width: 880px) {
    width: 100%;
    justify-content: center;
  }
`;

const BigBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1074px) {
    display: none;
  }
`;

const MediumBanner = styled.div`
  display: none;
  @media (max-width: 1074px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
const LittleBanner = styled.div`
  display: none;
  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export default function Store({ store, address }) {
  const myLoader = ({ src }) => {
    return `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;
  };


  return (
    <ContainerDoContainer>
      <HeaderSearch />
      <Container>
          <StoreContainer>
            <StoreContainer.Col1>
              <BigBanner>
                <Image
                  loader={myLoader}
                  src={store.cover_img}
                  alt=""
                  width="550"
                  height="250"
                />
              </BigBanner>
              <MediumBanner>
                <Image
                  loader={myLoader}
                  src={store.cover_img}
                  alt=""
                  width="400"
                  height="200"
                />
              </MediumBanner>
              <LittleBanner>
                <Image
                  loader={myLoader}
                  src={store.cover_img}
                  alt=""
                  width="375"
                  height="200"
                />
              </LittleBanner>
            </StoreContainer.Col1>
            <StoreContainer.Col2>
              <StoreName>{store.company_name}</StoreName>
              <StoreDatas>•Taxa de entrega: R$ {store.shipping_tax}</StoreDatas>
              <StoreDatas>
              •Endereço: {address.street}, {address.address_num}, {address.city}, {address.state}
              </StoreDatas>
              <StoreDatas>
              •CEP:  {address.zipcode}
              </StoreDatas>
            </StoreContainer.Col2>
          </StoreContainer>
      </Container>
      <StoreTabs store={store} myLoader={myLoader} />
      <FooterMobile />
    </ContainerDoContainer>
  );
}
export async function getServerSideProps(context) {
  const { id } = context.query;
  const response_store = await api.get(`store/${id}`);
  const response_address = await api.get(`storeAddress/${id}`);

  const address = response_address.data;
  const store = response_store.data;
  return { props: { store, address } };
}
