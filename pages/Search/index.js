import React, { useEffect, useState } from "react";
import api from "../../src/utils/api";
import styled from "styled-components";
import Image from "next/image";
import HeaderSearch from "../../src/components/HeaderSearch";
import OrderSearch from "../../src/components/Filter/OrderSearch";
import Brands from "../../src/components/Filter/Brands";
import Price from "../../src/components/Filter/Price";
import SearchCards from "../../src/components/SearchCards";
import FooterMobile from "../../src/components/Mobile/FooterMobile";
import SearchHeader from "../../src/components/Mobile/SearchHeader";

const ContainerCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  font-family: Roboto;
  @media (max-width: 700px) {
    display: none;
  }
`;

ContainerCategory.Col = styled.div`
  flex-direction: column;
  margin: 0 1% 0 1%;
`;

ContainerCategory.submitImg = styled.button`
  border: none;
  flex-direction: column;
  padding: 10%;
  border-radius: 10px;
  margin: 0% 1% 0% 0%;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    box-shadow: 0 16px 40px 0px rgba(112, 144, 176, 0.2);
    transform: scale(1.02);
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

ContainerCategory.CategoryName = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  margin-top: 2%;
  margin-bottom: 2%;
`;

SearchContainer.Col1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  min-width: 300px;
  flex-direction: column;
  @media (max-width: 880px) {
    width: 40%;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
SearchContainer.Col2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 75%;
  flex-direction: column;
  @media (max-width: 560px) {
    width: 100%;
  }
`;

export default function Search() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState([0, 5000]);
  const [categoria, setCategoria] = useState();

  const defineBackgroundColor = (category_id) => {
    return categoria === category_id
      ? { backgroundColor: "#A6DAD8" }
      : { backgroundColor: "#F8F8F8" };
  };

  const myLoader = ({ src }) => {
    return `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;
  };

  useEffect(() => {
    api.get("category").then((res) => {
      setCategories(res.data);
    });

    api
      .get("products", { params: { price: price, category_id: categoria } })
      .then((res) => {
        setProducts(res.data);
      });
  }, [categoria, price]);

  return (
    <div>
      <HeaderSearch />
      <SearchHeader />
      <ContainerCategory>
        {categories.map((categoria) => (
          <ContainerCategory.Col>
            <ContainerCategory.submitImg
              style={defineBackgroundColor(categoria.category_id)}
              onClick={() => setCategoria(categoria.category_id)}
            >
              <Image
                loader={myLoader}
                src={categoria.img}
                alt=""
                width="50"
                height="50"
              />
              <ContainerCategory.CategoryName>
                {categoria.name}
              </ContainerCategory.CategoryName>
            </ContainerCategory.submitImg>
          </ContainerCategory.Col>
        ))}
        <ContainerCategory.Col>
          <ContainerCategory.submitImg onClick={() => setCategoria()}>
            <Image src="/images/Xvermelho.png" alt="" width="50" height="50" />
            <ContainerCategory.CategoryName>
              Limpar categoria
            </ContainerCategory.CategoryName>
          </ContainerCategory.submitImg>
        </ContainerCategory.Col>
      </ContainerCategory>
      <SearchContainer>
        <SearchContainer.Col1>
          <OrderSearch />
          <Price setPrice={setPrice} />
          <Brands categories={categories} key={categories.category_id} />
        </SearchContainer.Col1>
        <SearchContainer.Col2>
          {products.map((p) => (
            <SearchCards product={p} key={p.product_id} />
          ))}
        </SearchContainer.Col2>
      </SearchContainer>
      <FooterMobile />
    </div>
  );
}
