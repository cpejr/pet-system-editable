import React, { useEffect, useState } from "react";
import api from '../../src/utils/api';
import Header from '../../src/components/Header';
import MobileHeader from '../../src/components/MobileHeader';
import BannerCarousel from '../../src/components/Carousels/BannerCarousel';
import CardsCarousel from '../../src/components/Carousels/CardsCarousel';
import StoresCarousel from '../../src/components/Carousels/StoresCarousel';
import AnimalsCarousel from '../../src/components/Carousels/AnimalsCarousel';
import MosaicCarousel from '../../src/components/Carousels/MosaicCarousel';
import {
  Cards, CardItem, CardImage1, CardImage2, CardImage3, Container, Mosaic, Text, Divider, Button,
} from '../../src/components/HomeComponents';

export default function Home() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    api.get("store").then((res) => {
      setStores(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <MobileHeader />
      <BannerCarousel />
      <Container>
        <Cards>
          <CardItem>
            <CardImage1>
              <Button>Acessórios</Button>
            </CardImage1>
          </CardItem>
          <CardItem>
            <CardImage2>
              <Button>Banho e tosa</Button>
            </CardImage2>
          </CardItem>
          <CardItem>
            <CardImage3>
              <Button>Serviços</Button>
            </CardImage3>
          </CardItem>
        </Cards>
        <CardsCarousel />
      </Container>
      <Divider />
      <Container>
        <Text>Principais Lojistas em Belo Horizonte, MG:</Text>
        <StoresCarousel stores={stores} />

      </Container>
      <Divider />
      <Container>
        <Text>Principais marcas:</Text>
        <Mosaic>
          <img className="pedigree" src="/images/brands/pedigree.png" alt="" width="250" height="" />
          <img className="adimax" src="/images/brands/adimax.png" alt="" width="250" height="150" />
          <img className="royal" src="/images/brands/royal.png" alt="" width="250" height="150" />
          <img className="ferplast" src="/images/brands/ferplast.png" alt="" width="250" height="150" />
        </Mosaic>
        <Mosaic>
          <img className="frontline" src="/images/brands/frontline.png" alt="" width="250" height="150" />
          <img className="whiskas" src="/images/brands/whiskas.png" alt="" width="250" height="150" />
          <img className="bayer" src="/images/brands/bayer.png" alt="" width="250" height="150" />
          <img className="premier" src="/images/brands/premier.png" alt="" width="250" height="150" />
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
