import api from '../../src/utils/api';
import Image from 'next/image';
import BannerCarousel from '../../src/components/Carousels/BannerCarousel';
import CardsCarousel from '../../src/components/Carousels/CardsCarousel';
import StoresCarousel from '../../src/components/Carousels/StoresCarousel';
import AnimalsCarousel from '../../src/components/Carousels/AnimalsCarousel';
import MosaicCarousel from '../../src/components/Carousels/MosaicCarousel';
import {
  Cards, CardItem, CardImage1, CardImage2, CardImage3, Container, Mosaic, Text, Divider, Button,
} from '../../src/components/HomeComponents';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import Link from 'next/link';

toast.configure();

export default function Home({ stores, image }) {
  const [serviceId, setServiceId] = useState('');
  const [accessoryId, setAccessoryId] = useState('');
  const [showerId, setShowerId] = useState('');

  useEffect(() => {
    api.get('category').then((response) => {
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
      toast('Erro ao obter categorias.', { position: toast.POSITION.BOTTOM_RIGHT });
    });
  }, [])

  return (
    <>
      <BannerCarousel
        value="Banner"
        image={image} />
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
        <MosaicCarousel
          value="Principais Marcas"
          image={image} />
      </Container>
      <Divider />
      <Container>
        <Text>Bichinhos mais procurados</Text>
        <AnimalsCarousel />
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data: stores } = await api.get('store');
    const { data: image } = await api.get('image');
    return {
      props: { stores, image },
      revalidate: 60 * 10, // 10 minutos
    };
  } catch (error) {
    console.warn(error);
    alert('Algo deu errado');
  }
  return null;
}
