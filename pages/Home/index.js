import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Header from '../../src/components/Header';

const MainCarousel = styled.div`
    height: 400px;
    background-color: lightgray;
`;

const Footer = styled.div`
  height: 100px;
  background-color: ${({ theme }) => theme.colors.mediumGreen};
  margin-top: 5%;
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 50px;
  margin: 2.5% 5% 2.5% 5%;

  //background-color: pink;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5% 5% 2.5% 5%;
`;

const Subcontainer = styled.div`
  margin-bottom: 2.5%;
`;

const Mosaic = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
`;

const Text = styled.p`
  font-family: Roboto;
  margin-left: 5%;
  margin-bottom: 2%;
  font-size: 2em;
  @media screen and (max-width: 900px) {
    font-size: 1.5em;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2em;
  }
`;

const Divider = styled.hr`
  height: 1px;
  color: lightgray;
  background-color: lightgray;
  width: 80%;
`;

export default function Home() {
  return (
    <>
      <Header />
      <MainCarousel />
      <Container>
        <Cards>
          <Image src="/images/Card1.png" alt="" width="400" height="500" />
          <Image src="/images/Card2.png" alt="" width="400" height="500" />
          <Image src="/images/Card3.png" alt="" width="400" height="500" />
        </Cards>
      </Container>
      <Divider />
      <Container>
        <Text>Principais Lojistas em Belo Horizonte, MG:</Text>
        <Cards>
          <Image src="/images/Loja1.png" alt="" width="300" height="400" />
          <Image src="/images/Loja1.png" alt="" width="300" height="400" />
          <Image src="/images/Loja1.png" alt="" width="300" height="400" />
          <Image src="/images/Loja1.png" alt="" width="300" height="400" />
        </Cards>
      </Container>
      <Divider />
      <Container>
        <Subcontainer>
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
        </Subcontainer>
      </Container>
      <Divider />
      <Container>
        <Subcontainer>
          <Text>Bichinhos mais procurados</Text>
          <Mosaic>
            <Image src="/images/animalsCarousel/Cachorros.png" alt="" width="400" height="200" />
            <Image src="/images/animalsCarousel/Gatos.png" alt="" width="400" height="200" />
            <Image src="/images/animalsCarousel/Peixes.png" alt="" width="400" height="200" />
            <Image src="/images/animalsCarousel/Passaros.png" alt="" width="400" height="200" />
          </Mosaic>
        </Subcontainer>
      </Container>
      <Divider />
      <Footer />
    </>
  );
}
