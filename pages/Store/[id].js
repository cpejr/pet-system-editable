import Image from 'next/image';
import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import {
  ContainerDoContainer,
  Container,
  StoreContainer,
  StoreName,
  StoreDatas,
  BigBanner,
  MediumBanner,
  LittleBanner,
} from './styles';
import api from '../../src/utils/api';
import { FooterMobile, StoreTabs } from '../../src/components';
import StoreIsOpen from '../../src/components/StoreIsOpen';

export default function Store({
  store, address, products, groups,
}) {
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;
  const openingTime = store.opening_time.split(',');
  const closingTime = store.closing_time.split(',');
  const situation = store.working_days.split(',');
  const [today, setToday] = useState();
  const data = new Date();
  const day = moment(data).format('dddd');
  useEffect(() => {
    if (day) {
      switch (day) {
        case 'Monday':
          setToday(0);
          break;

        case 'Tuesday':
          setToday(1);
          break;

        case 'Wednesday':
          setToday(2);
          break;

        case 'Thursday':
          setToday(3);
          break;

        case 'Friday':
          setToday(4);
          break;

        case 'Saturday':
          setToday(5);
          break;

        default:
          setToday(6);
          break;
      }
    }
  }, [day]);
  return (
    <ContainerDoContainer>
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
            <StoreDatas>
              {(StoreIsOpen(openingTime[today], closingTime[today]) && situation[today] === 'Aberto') ? `Funcionamento: ${openingTime[today]}h - ${closingTime[today]}h` : 'Estabelecimento Fechado'}
            </StoreDatas>
          </StoreContainer.Col2>
        </StoreContainer>
      </Container>
      <StoreTabs
        store={store}
        address={address}
        products={products}
        groups={groups}
        myLoader={myLoader}
      />
      <FooterMobile />
    </ContainerDoContainer>
  );
}

export async function getStaticPaths() {
  const { data: stores } = await api.get('store');

  return {
    paths: stores.map((store) => ({
      params: { id: store.firebase_id_store },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const [{ data: store },
    { data: address },
    { data: products },
    { data: groups }] = await axios.all([
    api.get(`store/${params.id}`),
    api.get(`storeAddress/${params.id}`),
    api.get(`productsByStore/${params.id}`),
    api.get(`groups/${params.id}`),
  ]);
  return {
    props: {
      store,
      address,
      products,
      groups,
    },
    revalidate: 20, // 20 segundos
  };
}
