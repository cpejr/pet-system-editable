import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
      margin: 8%;
  }
`;

export default function MosaicCarousel() {
  const responsive = {
    others: {
      breakpoint: { max: 1060, min: 913 },
      items: 0,
    },
    tablet: {
      breakpoint: { max: 912, min: 465 },
      items: 3,
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
        <Image src="/images/brands/Pedigree.png" alt="" width="400" height="200" />
      </Item>
      <Item>
        <Image src="/images/brands/JamboPet.png" alt="" width="400" height="200" />
      </Item>
      <Item>
        <Image src="/images/brands/RoyalCanin.png" alt="" width="400" height="200" />
      </Item>
      <Item>
        <Image src="/images/brands/Frontline.jpg" alt="" width="400" height="200" />
      </Item>

      <Item>
        <Image src="/images/brands/Bayer.jpg" alt="" width="400" height="200" />
      </Item>
      <Item>
        <Image src="/images/brands/Whiskas.png" alt="" width="400" height="200" />
      </Item>
      <Item>
        <Image src="/images/brands/Ferplast.png" alt="" width="400" height="200" />
      </Item>
      <Item>
        <Image src="/images/brands/Premier.png" alt="" width="400" height="200" />
      </Item>
    </Carousel>

  );
}
