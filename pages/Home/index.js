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

export default function Home({ stores, image }) {
  return (
    <>
      <BannerCarousel
        value="Banner"
        image={image} />
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

export async function getStaticProps() {
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
}
