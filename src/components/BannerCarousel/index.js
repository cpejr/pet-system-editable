import React from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';

export default function MainCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
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
    <Carousel responsive={responsive}>
      <div>
        <Image src="/images/banners/Banner1.png" alt="" width="1920" height="390" />
      </div>
      <div>
        <Image src="/images/banners/Banner2.jpg" alt="" width="1920" height="390" />
      </div>
      <div>
        <Image src="/images/banners/Banner3.jpg" alt="" width="1920" height="390" />
      </div>
    </Carousel>
  );
}
