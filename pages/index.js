import React from 'react';
import Image from 'next/image';
import BannerCarousel from '../src/components/Carousels/BannerCarousel';
import CardsCarousel from '../src/components/Carousels/CardsCarousel';
import StoresCarousel from '../src/components/Carousels/StoresCarousel';
import AnimalsCarousel from '../src/components/Carousels/AnimalsCarousel';
import MosaicCarousel from '../src/components/Carousels/MosaicCarousel';
import {
  Cards, CardItem, Container, Mosaic, Text, Divider,
} from '../src/components/HomeComponents';

export default function Home() {
  return (
    <>
      <BannerCarousel />
      <Container>
        <Cards>
          <CardItem>
            <Image src="/images/Card1.png" alt="" width="400" height="500" />
          </CardItem>
          <CardItem>
            <Image src="/images/Card2.png" alt="" width="400" height="500" />
          </CardItem>
          <CardItem>
            <Image src="/images/Card3.png" alt="" width="400" height="500" />
          </CardItem>
        </Cards>
        <CardsCarousel />
      </Container>
      <Divider />
      <Container>
        <Text>Principais Lojistas em Belo Horizonte, MG:</Text>
        <StoresCarousel />
      </Container>
      <Divider />
      <Container>
        <Text>Principais marcas:</Text>
        <Mosaic>
          <Image src="/images/brands/Pedigree.png" alt="" width="400" height="200" />
          <Image src="/images/brands/JamboPet.png" alt="" width="400" height="200" />
          <Image src="/images/brands/RoyalCanin.png" alt="" width="400" height="200" />
          <Image src="/images/brands/Frontline.jpg" alt="" width="400" height="200" />
        </Mosaic>
        <Mosaic>
          <Image src="/images/brands/Bayer.jpg" alt="" width="400" height="200" />
          <Image src="/images/brands/Whiskas.png" alt="" width="400" height="200" />
          <Image src="/images/brands/Ferplast.png" alt="" width="400" height="200" />
          <Image src="/images/brands/Premier.png" alt="" width="400" height="200" />
        </Mosaic>
        <MosaicCarousel />
      </Container>
      <Divider />
      <Container>
        <Text>Bichinhos mais procurados</Text>
        <AnimalsCarousel />
      </Container>
    </>
  );
}
