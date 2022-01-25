import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

const CardImage1 = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
background-image: url(/images/animalsCarousel/Cachorro.png);
width: 250px;
height: 150px;
border-radius: 10px;
box-shadow: 0 4px 2px -2px gray;
`;
const CardImage2 = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
background-image: url(/images/animalsCarousel/Gato.png);
width: 250px;
height: 150px;
border-radius: 10px;
box-shadow: 0 4px 2px -2px gray;
`;
const CardImage3 = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
background-image: url(/images/animalsCarousel/Peixe.png);
width: 250px;
height: 150px;
border-radius: 10px;
box-shadow: 0 4px 2px -2px gray;
`;
const CardImage4 = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
background-image: url(/images/animalsCarousel/Passaro.png);
width: 250px;
height: 150px;
border-radius: 10px;
box-shadow: 0 4px 2px -2px gray;
`;

export const Button = styled.button`
    display:flex;
    height: 25px;
    width: 130px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 300;
    background-color:rgba(170, 69, 69, 0.9);
    color: white;
    border: 0;
    border-radius: 5px;
    align-items: center;
    text-align: center;
    transform: translate(0%,-50%);
    justify-content: center;
    text-align: center;
    cursor: pointer;
`;

export default function StoreCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    midDesktop: {
      breakpoint: { max: 1279, min: 1023 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 646 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 645, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite
    >
      <Item>
        <CardImage1>
          <Button>Cachorro</Button>
        </CardImage1>
      </Item>
      <Item>
        <CardImage2>
          <Button>Gato</Button>
        </CardImage2>
      </Item>
      <Item>
        <CardImage3>
          <Button>Peixe</Button>
        </CardImage3>
      </Item>
      <Item>
        <CardImage4>
          <Button>Pássaro</Button>
        </CardImage4>
      </Item>
    </Carousel>
  );
}
