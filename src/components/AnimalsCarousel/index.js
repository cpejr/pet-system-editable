import React from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';

export default function StoreCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div>
        <Image src="/images/animalsCarousel/Cachorros.png" alt="" width="400" height="200" />
      </div>
      <div>
        <Image src="/images/animalsCarousel/Gatos.png" alt="" width="400" height="200" />
      </div>
      <div>
        <Image src="/images/animalsCarousel/Peixes.png" alt="" width="400" height="200" />
      </div>
      <div>
        <Image src="/images/animalsCarousel/Passaros.png" alt="" width="400" height="200" />
      </div>
      <div>
        <Image src="/images/animalsCarousel/Cachorros.png" alt="" width="400" height="200" />
      </div>
      <div>
        <Image src="/images/animalsCarousel/Gatos.png" alt="" width="400" height="200" />
      </div>
    </Carousel>

  );
}
