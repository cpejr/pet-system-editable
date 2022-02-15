import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;

  @media screen and (max-width: 281px) {
    width: 50%;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  font-family: Roboto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 2px -2px gray;
  cursor: pointer;
`;
const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-direction: row;
  margin-bottom: 2%;
`;
ContainerRow.Cols = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  flex-direction: column;
`;

const CardDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  font-size: 14px;
  flex-direction: row;
  margin-bottom: 10%;
  margin-top: 10%;
`;

CardDescription.Col1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  flex-direction: column;
`;

CardDescription.Col1.Row1 = styled.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1%;
  margin-bottom: 1%;
`;

CardDescription.Col1.Row2 = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
  flex-direction: row;
`;
CardDescription.Col1.Row2.Delivery = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 55%;
  font-size: 12px;
`;

CardDescription.Col1.Row2.Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 45%;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.baseGray};
`;

CardDescription.Col2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.mediumRed};
  font-family: Roboto;
  color: white;
  border: none;
`;

const ImgNormal = styled.div`
  display: flex;
  width: 300px;
  height: 320px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export default function StoresCarouselCard({ store, address }) {
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

  const regionShippingTax = store ? store?.shipping_tax.split(',') : product ? product?.shipping_tax.split(',') : null;
  const [shippingValue, setShippingValue] = useState();
  const [shippingMinValue, setShippingMinValue] = useState(0);
  const [shippingMaxValue, setShippingMaxValue] = useState(0);
  useEffect(() => {
    if (regionShippingTax && address !== 'Usuário não está logado') {
      switch (address.region) {
        case 'Barreiro':
          setShippingValue(regionShippingTax[0]);
          break;

        case 'Centro Sul':
          setShippingValue(regionShippingTax[1]);
          break;

        case 'Leste':
          setShippingValue(regionShippingTax[2]);
          break;

        case 'Nordeste':
          setShippingValue(regionShippingTax[3]);
          break;

        case 'Noroeste':
          setShippingValue(regionShippingTax[4]);
          break;

        case 'Norte':
          setShippingValue(regionShippingTax[5]);
          break;

        case 'Oeste':
          setShippingValue(regionShippingTax[6]);
          break;

        case 'Pampulha':
          setShippingValue(regionShippingTax[7]);
          break;

        default:
          setShippingValue(regionShippingTax[8]); // Venda Nova
          break;
      }
    } else {
      setShippingMinValue(Math.min(...regionShippingTax));
      setShippingMaxValue(Math.max(...regionShippingTax));
    }
  }, [regionShippingTax, address]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1800 },
      items: 4,
    },
    midDesktop: {
      breakpoint: { max: 1799, min: 1198 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1197, min: 782 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 781, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {store && (
      <Link href={{ pathname: `/Store/${store.firebase_id_store}` }}>
        <Item key={store.firebase_id_store}>
          <div>
            <Container>
              <ContainerRow>
                <ContainerRow.Cols>
                  <ImgNormal>
                    <Image
                      loader={myLoader}
                      src={store.logo_img}
                      alt=""
                      width="300"
                      height="320"
                    />
                  </ImgNormal>
                  <CardDescription>
                    <CardDescription.Col1>
                      <CardDescription.Col1.Row1>
                        {store.company_name}
                      </CardDescription.Col1.Row1>
                      <CardDescription.Col1.Row2>
                        <CardDescription.Col1.Row2.Delivery>
                          • Taxa de entrega: R$
                          {' '}
                          {shippingValue ? (parseFloat(shippingValue) === 0 ? 'Gratis' : `R$${shippingValue}`) : (shippingMinValue === 0 ? `Gratis ~ R$${shippingMaxValue.toFixed(2)}` : `R$${shippingMinValue.toFixed(2)} ~ R$${shippingMaxValue.toFixed(2)}`) }
                        </CardDescription.Col1.Row2.Delivery>
                      </CardDescription.Col1.Row2>
                    </CardDescription.Col1>
                    <CardDescription.Col2>
                      <Button>{store.evaluation}</Button>
                    </CardDescription.Col2>
                  </CardDescription>
                </ContainerRow.Cols>
              </ContainerRow>
            </Container>
          </div>
        </Item>
      </Link>
      )}
    </>
  );
}
