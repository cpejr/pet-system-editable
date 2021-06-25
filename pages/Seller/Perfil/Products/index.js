import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
import HeaderSeller from '../../../../src/components/HeaderSeller';
import WordsDivider from '../../../../src/components/WordsDivider';
import FooterMobile from '../../../../src/components/Mobile/FooterMobile';
import Order from '../../../../src/components/Filter/Order';
import Category from '../../../../src/components/Filter/Category';
import Products from '../../../../src/components/Products';
// import MyProducts from '../../../MyProducts';
import ModalAddProducts from '../../../../src/components/ModalAddProducts';
import LocationAndFilter from '../../../../src/components/Mobile/LocationAndFilter';
import EditAddRemoveSection from '../../../../src/components/Mobile/EditAddRemoveSection';

const Title = styled.h1`
align-items:initial;
display:flex;
margin-left:5%;
margin-top:2%;
margin-bottom:1%;
font-family: Roboto;
@media(max-width:560px){
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:2%;
    }
`;

const SubTitle = styled.div`
display:flex;
align-items:initial;
margin-left:8%;
font-family: Roboto;
@media(max-width:560px){
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0;
    }
`;

const Section = styled.button`
display:flex;
font-size:16px;
align-items:center;
justify-content:center;
margin-right:1%;
margin-left:1%;
border:none;
background-color:${({ theme }) => theme.colors.background};
cursor: pointer;
font-family: Roboto;
outline:none;
`;

Section.Select = styled.button`
display:flex;
font-size:16px;
align-items:center;
margin-left:1%;
margin-right:1%;
border:none;
background-color:${({ theme }) => theme.colors.hoverBackground};
border-radius:5%;
outline:none;
font-family: Roboto;
`;

const ProductContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:row;
@media(max-width:1065px){
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:row;
    }
`;

ProductContainer.Col1 = styled.div`
width:20%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
@media(max-width:1065px){
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-direction:column;
    width:100%;
    }
    @media(max-width:560px){
    display:none;
    }

`;

ProductContainer.Col2 = styled.div`
width:80%;
display:flex;
align-items:center;
justify-content:initial;
@media(max-width:560px){
    width:100%;
    justify-content: center;
    }

`;

const MarketContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
@media(max-width:1010px){
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    }
`;

MarketContainer.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:62%;
@media(max-width:1010px){
    width:100%;
    }

@media(max-width:700px){
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    }

@media(max-width:560px){
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    width:100%;
    }
`;

MarketContainer.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:38%;
@media(max-width:1010px){
    width:100%;
    justify-content: center;
    }

@media(max-width:560px){
    display:flex;
    align-items:center;
    justify-content:center;
    width:90%;
    margin-bottom:2%;
    }

`;

const TitleMarket = styled.h2`
display:flex;
align-items:center;
justify-content:center;
margin-top: 30px;
font-family: Roboto;
font-size: 25px;
`;
const EditCategory = styled.button`
    height: 50px;
    width: 30%;
    font-family: Roboto;
    font-size: 100%;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: white;
    border: 0;
    border-radius: 5px;
    cursor:pointer;
    outline:none;
    margin-right:2%;
    margin-top: --5px;
    @media(max-width:1010px){
      display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    width:20%;
    height:50px;
    
}
    @media(max-width:560px){
    display:none;
    }
`;

const RemoveProducts = styled.button`
    height: 50px;
    width: 30%;
    font-family: Roboto;
    font-size: 100%;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.strongRed};
    color: white;
    border: 0;
    border-radius: 5px;
    cursor:pointer;
    outline:none;
    @media(max-width:1010px){
      display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    width:20%;
    height:50px;
}
    @media(max-width:560px){
      display:none;
    }
`;

export default function Perfil() {
  return (
    <div>
      <HeaderSeller />

      <Title>Perfil da loja:</Title>

      <SubTitle>
        <Link href="http://localhost:3000/Seller/Perfil/Products">
          <Section.Select>Meus produtos</Section.Select>
        </Link>
        <WordsDivider />
        <Link href="http://localhost:3000/Seller/Perfil/Store">
          <Section>Minha loja</Section>
        </Link>
        <WordsDivider />
        <Link href="http://localhost:3000/Seller/Perfil/SellerRequests">
          <Section>Pedidos</Section>
        </Link>
        <WordsDivider />
        <Link href="http://localhost:3000/Seller/Perfil/Sales">
          <Section>Minhas vendas</Section>
        </Link>
      </SubTitle>
      <LocationAndFilter />
      <EditAddRemoveSection />
      <MarketContainer>
        <MarketContainer.Col1>
          <TitleMarket>
            Produtos do meu MarketPlace
          </TitleMarket>
        </MarketContainer.Col1>
        <MarketContainer.Col2>
          <EditCategory>Editar Categoria</EditCategory>
          <RemoveProducts>Remover produtos</RemoveProducts>
          <ModalAddProducts />
        </MarketContainer.Col2>
      </MarketContainer>

      <ProductContainer>
        <ProductContainer.Col1>
          <Order />
          <Category />
        </ProductContainer.Col1>
        <ProductContainer.Col2>
          <Products />
        </ProductContainer.Col2>

      </ProductContainer>
      <FooterMobile />

    </div>
  );
}
