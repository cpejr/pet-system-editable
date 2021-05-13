import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import HeaderSeller from '../../../../src/components/HeaderSeller';
import WordsDivider from '../../../../src/components/WordsDivider';
import FooterMobile from '../../../../src/components/Mobile/FooterMobile';

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
export default function Perfil() {
  return (
    <div>
      <HeaderSeller />

      <Title>Perfil da loja:</Title>

      <SubTitle>
        <Link href="http://localhost:3000/Seller/Perfil/Products">
          <Section>Meus produtos</Section>
        </Link>
        <WordsDivider />
        <Link href="http://localhost:3000/Seller/Perfil/Store">
          <Section.Select>Minha loja</Section.Select>
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
      <FooterMobile />

    </div>
  );
}
