import React from 'react';
import Image from 'next/image';
import {
  ContainerDoContainer, Container, StoreContainer, StoreName,
  StoreDatas, BigBanner, MediumBanner, LittleBanner,
} from './styles';
import api from '../../src/utils/api';
import { HeaderSearch, FooterMobile, StoreTabs } from '../../src/components';

export default function Store({ store, address }) {
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

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
            <StoreDatas>
              Taxa de entrega: R$
              {' '}
              {store.shipping_tax}
            </StoreDatas>
            <StoreDatas>
              {address.street}
              ,
              {' '}
              {address.address_num}
              ,
              {' '}
              {address.city}
              ,
              {' '}
              {address.state}
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
