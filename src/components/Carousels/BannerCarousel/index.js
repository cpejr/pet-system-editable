import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export default function MainCarousel({ image }) {
  const [imagesFiltered, setImagesFiltered] = useState('');
  const myLoader = ({ src }) => {
    return `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;
  };

  useEffect(() => {
    setImagesFiltered(image?.filter((item) => item.type === "Banner"));
  }, [image])

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
      {imagesFiltered?.map((img) => (
        <Item>
          <Image
            loader={myLoader}
            src={img.image_id}
            alt=""
            width="1920"
            height="390"
          />
        </Item>
      ))}
    </Carousel>
  );
}
