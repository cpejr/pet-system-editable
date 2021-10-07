import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import api from "../../src/utils/api";
import HeaderSearch from "../../src/components/HeaderSearch";
import FooterMobile from "../../src/components/Mobile/FooterMobile";
import StoreTabs from "../../src/components/StoreTabs";

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
  width: 40%;
`;
StoreContainer.Col2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  flex-direction: column;
  @media (max-width: 880px) {
    width: 100%;
    justify-content: center;
  }
`;

StoreContainer.Col3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  @media (max-width: 880px) {
    width: 50%;
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
  cursor: pointer;
  outline: none;
  @media (max-width: 880px) {
    width: 80%;
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
  const [followBackground, setFollowBackground] = useState("#F8F8F8");
  const [followFont, setFollowFont] = useState("#609694");
  const [follow, setFollow] = useState("Seguir");

  const myLoader = ({ src }) => {
    return `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;
  };

  function changeFollowBackground() {
    if (followBackground === "#F8F8F8") {
      setFollowBackground("#609694");
      setFollowFont("#F8F8F8");
      setFollow("Seguindo");
    } else {
      setFollowBackground("#F8F8F8");
      setFollowFont("#609694");
      setFollow("Seguir");
    }
  }

  return (
    <div>
      <HeaderSearch />
      <Container>
        {store && (
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
              <StoreDatas>Taxa de entrega: R$ {store.shipping_tax}</StoreDatas>
              <StoreDatas>
                {address.zipcode}, {address.state}
              </StoreDatas>
            </StoreContainer.Col2>
            <StoreContainer.Col3>
              <Button
                onClick={changeFollowBackground}
                style={{
                  backgroundColor: followBackground,
                  borderColor: "#609694",
                  color: followFont,
                }}
              >
                {follow}
              </Button>
            </StoreContainer.Col3>
          </StoreContainer>
        )}
      </Container>
      <StoreTabs store={store} myLoader={myLoader} />
      <FooterMobile />
    </div>
  );
}
export async function getServerSideProps(context) {
  const { id } = context.query;
  const response_store = await api.get(`store/${id}`);
  const response_address = await api.get(`storeAddress/${id}`);

  const address = response_address.data;
  const store = response_store.data;
  console.log(store);
  return { props: { store, address } };
}
