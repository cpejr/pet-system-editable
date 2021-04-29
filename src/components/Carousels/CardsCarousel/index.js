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
  @media screen and (max-width: 1000px) {
      margin: 3%;
  }
  @media screen and (max-width: 600px) {
      margin: 8%;
  }
`;

export default function CardsCarousel() {
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

  return (
    <Carousel
      responsive={responsive}
      infinite
    >
      <Item>
        <Image src="/images/Card1.png" alt="" width="400" height="500" />
      </Item>
      <Item>
        <Image src="/images/Card2.png" alt="" width="400" height="500" />
      </Item>
      <Item>
        <Image src="/images/Card3.png" alt="" width="400" height="500" />
      </Item>
    </Carousel>

  );
}
