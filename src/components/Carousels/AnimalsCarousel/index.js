import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function StoreCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 465 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <Item>
        <Image src="/images/animalsCarousel/Cachorros.png" alt="" width="400" height="200" />
      </Item>
      <Item>
        <Image src="/images/animalsCarousel/Gatos.png" alt="" width="400" height="200" />
      </Item>
      <Item>
        <Image src="/images/animalsCarousel/Peixes.png" alt="" width="400" height="200" />
      </Item>
      <Item>
        <Image src="/images/animalsCarousel/Passaros.png" alt="" width="400" height="200" />
      </Item>
      <Item>
        <Image src="/images/animalsCarousel/Cachorros.png" alt="" width="400" height="200" />
      </Item>
      <Item>
        <Image src="/images/animalsCarousel/Gatos.png" alt="" width="400" height="200" />
      </Item>
    </Carousel>
  );
}
