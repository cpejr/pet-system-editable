import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button, CardImage1, CardImage2, CardImage3 } from '../../../../src/components/HomeComponents';
import api from '../../../../src/utils/api';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
  @media screen and (max-width: 1000px) {
      margin: 3%;
  }
  @media screen and (max-width: 600px) {
      margin: 8%;
  }
`;

export default function CardsCarousel() {
  const [serviceId, setServiceId] = useState('');
  const [accessoryId, setAccessoryId] = useState('');
  const [showerId, setShowerId] = useState('');
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1025 },
      items: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 601 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    api.get('category')?.then((response) => {
      response.data?.forEach(category => {
        if(category.name === 'Acessórios'){
          setAccessoryId(category.category_id);
        }
        if(category.name === 'Serviços'){
          setServiceId(category.category_id);
        }
        if(category.name === 'Banho e tosa'){
          setShowerId(category.category_id); 
        }
      });
    }).catch((error) => {
      alert('Erro ao tentar obter categorias');
    });
  }, [])

  return (
    <Carousel
      responsive={responsive}
      infinite
    >
      <Item>
        <CardImage1>
          <Link
            key={accessoryId}
            href={{ pathname: '/Search', query: { id: accessoryId } }}
          >
            <Button>Acessórios</Button>
          </Link>
        </CardImage1>
      </Item>
      <Item>
        <CardImage2>
          <Link
            key={showerId}
            href={{ pathname: '/Search', query: { id: showerId } }}
          >
            <Button>Banho e tosa</Button>
          </Link>
        </CardImage2>
      </Item>
      <Item>
        <CardImage3>
          <Link
            key={serviceId}
            href={{ pathname: '/Search', query: { id: serviceId } }}
          >
            <Button>Serviços</Button>
          </Link>
        </CardImage3>
      </Item>
    </Carousel>
  );
}