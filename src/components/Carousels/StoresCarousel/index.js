import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import { toast } from 'react-toastify';
import StoresCarouselCard from '../../storesCarouselCard';
import api from '../../../utils/api';
import 'react-multi-carousel/lib/styles.css';

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

export default function StoresCarousel(props) {
  const { stores } = props;

  const [address, setAddress] = useState('Usuário não está logado');

  useEffect(() => {
    try {
      api.get('address/userMain').then((response) => {
        setAddress(response.data);
      });
    } catch (err) {
      console.error(err);
      toast('Erro!', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  }, []);

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
    <Carousel responsive={responsive} infinite>
      {stores?.length > 0
        && stores.map((store) => (
          <StoresCarouselCard store={store} address={address} />
        ))}
    </Carousel>
  );
}
