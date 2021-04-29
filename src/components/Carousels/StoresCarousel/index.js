import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
`;

export default function StoreCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 4,
    },
    midDesktop: {
      breakpoint: { max: 1500, min: 1025 },
      items: 3,
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
  return (
    <Carousel
      responsive={responsive}
      infinite
    >
      <Item>
        <Image src="/images/Loja1.png" alt="" width="300" height="400" />
      </Item>
      <Item>
        <Image src="/images/Loja1.png" alt="" width="300" height="400" />
      </Item>
      <Item>
        <Image src="/images/Loja1.png" alt="" width="300" height="400" />
      </Item>
      <Item>
        <Image src="/images/Loja1.png" alt="" width="300" height="400" />
      </Item>
      <Item>
        <Image src="/images/Loja1.png" alt="" width="300" height="400" />
      </Item>
      <Item>
        <Image src="/images/Loja1.png" alt="" width="300" height="400" />
      </Item>
    </Carousel>

  );
}
