import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import HeaderSeller from '../../../../src/components/HeaderSeller';
import WordsDivider from '../../../../src/components/WordsDivider';
import MySales from '../../../../src/components/MySales';
import MySearchDateMonth from '../../../../src/components/MySearchDateMonth';
import MySearchDateYear from '../../../../src/components/MySearchDateYear';

const Title = styled.h1`
align-items:initial;
display:flex;
margin-left:5%;
margin-top:2%;
margin-bottom:1%;
font-family: Roboto;
`;

const SubTitle = styled.div`
align-items:initial;
display:flex;
margin-left:8%;
font-family: Roboto;
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
flex-direction:row;
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

const ContainerDate = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:2%;
`;

ContainerDate.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
width:30%;
`;
ContainerDate.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:4%;
`;
ContainerDate.Col3 = styled.div`
display:flex;
align-items:center;
width:66%;
`;

export default function Perfil() {
  return (
    <div>
      <HeaderSeller />
      <createGlobalStyle>

        <Title>Perfil da loja:</Title>

        <SubTitle>
          <Link href="http://localhost:3000/Seller/Perfil/Store">
            <Section>Minha loja</Section>
          </Link>
          <WordsDivider />
          <Link href="http://localhost:3000/Seller/Perfil/SellerRequests">
            <Section>Pedidos</Section>
          </Link>
          <WordsDivider />
          <Link href="http://localhost:3000/Seller/Perfil/Sales">
            <Section.Select>Minhas vendas</Section.Select>
          </Link>
        </SubTitle>
        <ContainerDate>
          <ContainerDate.Col1>
            <MySearchDateMonth />
          </ContainerDate.Col1>

          <ContainerDate.Col2 />

          <ContainerDate.Col3>
            <MySearchDateYear />
          </ContainerDate.Col3>

        </ContainerDate>

        <MySales />
      </createGlobalStyle>

    </div>
  );
}
