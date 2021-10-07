import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 230px;
  flex-direction: column;
  border: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.mediumGray};
  padding-top: 5%;
  padding-bottom: 2%;
  margin-bottom: 2%;
  margin: 1%;
  border-radius: 10px;
  box-shadow: 0 4px 2px -2px gray;
`;

const ProductName = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  color: ${({ theme }) => theme.colors.mediumGreen};
  background-color: ${({ theme }) => theme.colors.background};
  border: none;
  margin: 0;
  cursor: pointer;
`;

const LinkA = styled.a`
  color: ${({ theme }) => theme.colors.mediumGreen};
  :hover {
    color: ${({ theme }) => theme.colors.mediumGreen};
    font-weight: bold;
  }
`;

const PriceAndFav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  flex-direction: row;
  font-weight: bold;
`;
const FavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
`;

export default function ProductsCarousel({ products, myLoader }) {
  const [checkedFav, setCheckedFav] = useState("#C4C4C4");
  const handleClickFav = () => {
    if (checkedFav === "#C4C4C4") {
      setCheckedFav("#F6C8CA");
    } else {
      setCheckedFav("#C4C4C4");
    }
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 5,
    },
    midDesktop: {
      breakpoint: { max: 1500, min: 1025 },
      items: 4,
    },
    smallDesktop: {
      breakpoint: { max: 1024, min: 850 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 849, min: 601 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} infinite>
      {products?.length > 0 &&
        products.map((product) => (
          <Container>
            <ProductCard>
              <Image
                loader={myLoader}
                src={product.img}
                alt=""
                width="150"
                height="150"
              />
              <ProductName>
                <Link href={`/Product/${product.product_id}`}>
                  <LinkA>{product.product_name}</LinkA>
                </Link>
              </ProductName>
              <PriceAndFav>
                R$ : {product.price}
                <FavButton>
                  <AiFillHeart
                    size={24}
                    onClick={handleClickFav}
                    style={{ color: checkedFav }}
                  />
                </FavButton>
              </PriceAndFav>
            </ProductCard>
          </Container>
        ))}
    </Carousel>
  );
}
