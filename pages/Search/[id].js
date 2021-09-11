import React, { useEffect, useState } from 'react';
import api from "../../src/utils/api"
import styled from 'styled-components';
import Image from 'next/image';
import HeaderSearch from '../../src/components/HeaderSearch';
import OrderSearch from '../../src/components/Filter/OrderSearch';
import Brands from '../../src/components/Filter/Brands';
import Price from '../../src/components/Filter/Price';
import SearchCards from '../../src/components/SearchCards';
import FooterMobile from '../../src/components/Mobile/FooterMobile';
import SearchHeader from '../../src/components/Mobile/SearchHeader';

const ContainerCategory = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:row;
font-family:Roboto;
@media(max-width:700px){
display:none;
}
`;

ContainerCategory.Col = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:10%;
`;

const SearchContainer = styled.div`
display:flex;
align-items:flex-start;
justify-content:center;
width:100%;
flex-direction:row;
margin-top:2%;
margin-bottom:2%;
`;

SearchContainer.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:25%;
flex-direction:column;
@media(max-width:880px){
width:40%;
}
@media(max-width:560px){
display:none;
}
`;
SearchContainer.Col2 = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
justify-content:center;
width:75%;
flex-direction:column;
@media(max-width:560px){
width:100%;
}
`;
const Submit = styled.button`
height: 40px;
width: 50%;
font-family: Roboto;
font-size: 100%;
font-weight: 500;
background-color: ${({ theme }) => theme.colors.mediumGreen};
color: white;
border: 0;
border-radius: 5px;
cursor:pointer;
outline:none;
@media(max-width:560px){
display:none;
}
`;

export default function Search(props) {
    const { subcategory } = props;
    const [products, setProducts] = useState([]);
  useEffect(() => {
    api.get('products').then((res) => {
      setProducts(res.data);
    })
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
              <Image src="/images/outrosservicos.png" alt="" width="50" height="50" />
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
    console.log(subcategory);
    return { props: { subcategory } };
  }