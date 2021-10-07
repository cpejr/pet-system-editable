import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import api from '../../src/utils/api';
import { ContainerCategory, SearchContainer, Submit } from './styles';
import {
  HeaderSearch, OrderSearch, Brands, Price,
  SearchCards, FooterMobile, SearchHeader,
} from '../../src/components/index';

export default function Search(props) {
  const {categoriaHeader} = props;
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState([0, 5000]);
  const [categoria, setCategoria] = useState(categoriaHeader);

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

export async function getServerSideProps({ params }) {
  const categoriaHeader = params.id;
  return { props: { categoriaHeader } };
}
