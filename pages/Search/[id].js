import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import api from '../../src/utils/api';
import { ContainerCategory, SearchContainer, Submit } from './styles';
import {
  HeaderSearch, OrderSearch, Brands, Price,
  SearchCards, FooterMobile, SearchHeader,
} from '../../src/components/index';

export default function Search(props) {
  const { subcategory } = props;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api.get('products').then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      <HeaderSearch />
      <SearchHeader />
      <ContainerCategory>
        <ContainerCategory.Col>
          <Image src="/images/racaopote.png" alt="" width="50" height="50" />
          Ração
        </ContainerCategory.Col>
        <ContainerCategory.Col>
          <Image src="/images/brinquedos.png" alt="" width="50" height="50" />
          Brinquedos
        </ContainerCategory.Col>
        <ContainerCategory.Col>
          <Image src="/images/vasilhas.png" alt="" width="50" height="50" />
          Vasilhas
        </ContainerCategory.Col>
        <ContainerCategory.Col>
          <Image src="/images/casinhas.png" alt="" width="50" height="50" />
          Casinhas
        </ContainerCategory.Col>
        <ContainerCategory.Col>
          <Image src="/images/petiscos.png" alt="" width="50" height="50" />
          Petiscos
        </ContainerCategory.Col>
        <ContainerCategory.Col>
          <Image src="/images/shampoo.png" alt="" width="50" height="50" />
          Shampoo
        </ContainerCategory.Col>
        <ContainerCategory.Col>
          <Image src="/images/perfumes.png" alt="" width="50" height="50" />
          Perfumes
        </ContainerCategory.Col>
        <ContainerCategory.Col>
          <Image src="/images/banho.png" alt="" width="50" height="50" />
          Banho
        </ContainerCategory.Col>
        <ContainerCategory.Col>
          <Image src="/images/tosa.png" alt="" width="50" height="50" />
          Tosa
        </ContainerCategory.Col>
        <ContainerCategory.Col>
          <Image
            src="/images/outrosservicos.png"
            alt=""
            width="50"
            height="50"
          />
          Serviços
        </ContainerCategory.Col>
      </ContainerCategory>
      <SearchContainer>
        <SearchContainer.Col1>
          <OrderSearch />
          <Brands />
          <Price />
          <Submit>Aplicar</Submit>
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

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await api.get(`subcategory/${id}`);
  const subcategory = response.data;
  return { props: { subcategory } };
}
