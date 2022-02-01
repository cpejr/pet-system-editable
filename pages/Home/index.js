import api from '../../src/utils/api';
import BannerCarousel from '../../src/components/Carousels/BannerCarousel';
import CardsCarousel from '../../src/components/Carousels/CardsCarousel';
import StoresCarousel from '../../src/components/Carousels/StoresCarousel';
import AnimalsCarousel from '../../src/components/Carousels/AnimalsCarousel';
import MosaicCarousel from '../../src/components/Carousels/MosaicCarousel';
import {
  Cards, CardItem, CardImage1, CardImage2, CardImage3, Container, Mosaic, Text, Divider, Button,
} from '../../src/components/HomeComponents';
import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Home({ stores }) {
  const [serviceId, setServiceId] = useState('');
  const [accessoryId, setAccessoryId] = useState('');
  const [showerId, setShowerId] = useState('');

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
    }).catch((error));

  return (
    <>
      <BannerCarousel />
      <Container>
        <Cards>
          <CardItem>
            <CardImage1>
              <Link
                key={accessoryId}
                href={{ pathname: '/Search', query: { id: accessoryId } }}
              >
                <Button>Acessórios</Button>
              </Link>
            </CardImage1>
          </CardItem>  
          <CardItem>
            <CardImage2>
              <Link
                key={showerId}
                href={{ pathname: '/Search', query: { id: showerId } }}
              >
                <Button>Banho e tosa</Button>
              </Link>
            </CardImage2>
          </CardItem>
          <CardItem>
            <CardImage3>
              <Link
                key={serviceId}
                href={{ pathname: '/Search', query: { id: serviceId } }}
              >
                <Button>Serviços</Button>
              </Link>
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
},

export async function getStaticProps() {
  const { data: stores } = await api.get('store');
  return {
    props: { stores },
    revalidate: 60 * 10, // 10 minutos
  };
}
