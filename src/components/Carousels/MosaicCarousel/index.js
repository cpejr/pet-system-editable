import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
   margin: 8%;
   @media screen and (max-width: 500px) {
    margin: 8%;
   }
`;

export default function MosaicCarousel({ image }) {
  const [imagesFiltered, setImagesFiltered] = useState([]);
  const myLoader = ({ src }) => {
    return `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;
  };
  useEffect(() => {
    setImagesFiltered(image?.filter((item) => item.type === "Principais Marcas"));
  }, [image])

  const responsive = {
    others: {
      breakpoint: { max: 5000, min: 913 },
      items: 4,
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
      {imagesFiltered?.map((img) => (
        <Item>
          <Image
            loader={myLoader}
            src={img.image_id}
            alt=""
            width="400"
            height="200"
          />
        </Item>
      ))}
    </Carousel>

  );
}
