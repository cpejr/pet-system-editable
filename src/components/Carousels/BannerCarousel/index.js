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

export default function MainCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite
    >
      <Item>
        <Image src="/images/banners/Banner1.png" alt="" width="1920" height="390" />
      </Item>
      <Item>
        <Image src="/images/banners/Banner2.jpg" alt="" width="1920" height="390" />
      </Item>
      <Item>
        <Image src="/images/banners/Banner3.jpg" alt="" width="1920" height="390" />
      </Item>
    </Carousel>
  );
}
