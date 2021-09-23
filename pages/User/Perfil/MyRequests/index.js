import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../../../../src/components/Header';
import MyListOrders from '../../../../src/components/MyListOrders';
import MyListFinalizedOrders from '../../../../src/components/MyListFinalizedOrders';
import MyLogOut from '../../../../src/components/MyLogOut';
import FooterMobile from '../../../../src/components/Mobile/FooterMobile';

const Title = styled.h1`
  display: flex;
  align-items: initial;
  margin-left: 5%;
  margin-top: 2%;
  margin-bottom: 1%;
  font-family: Quicksand;
  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2%;
  }
`;

const SubTitle = styled.div`
  display: flex;
  align-items: initial;
  margin-left: 8%;
  font-family: Quicksand;
  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
`;
const Section = styled.button`
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 1%;
  margin-left: 1%;
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  font-family: Quicksand;
  outline: none;
`;

Section.Select = styled.button`
  flex-direction: row;
  font-size: 16px;
  align-items: center;
  margin-left: 1%;
  margin-right: 1%;
  border: none;
  background-color: ${({ theme }) => theme.colors.hoverBackground};
  border-radius: 5%;
  outline: none;
  font-family: Quicksand;
`;
const VerticalBars = styled.div`
    background-color: black;
    width: 1px;
    height: 40px;
    }
`;
export default function Perfil() {
  return (
    <div>
      <Header />
      <Title>Meu Perfil</Title>

      <SubTitle>
        <Link href="http://localhost:3000/User/Perfil/MyRequests">
          <Section.Select>Meus pedidos</Section.Select>
        </Link>
        <VerticalBars />
        <Link href="http://localhost:3000/User/Perfil/MyAdresses">
          <Section>Meus endereços</Section>
        </Link>
        <VerticalBars />
        <Link href="http://localhost:3000/User/Perfil/MyDatas">
          <Section>Dados pessoais</Section>
        </Link>
        <VerticalBars />
        <Link href="http://localhost:3000/User/Perfil/ChangePassword">
          <Section>Alterar Senha</Section>
        </Link>
        <VerticalBars />
        <Section>
          <MyLogOut />
        </Section>
      </SubTitle>
      <Title>Pedido Atual</Title>
      <MyListOrders />
      <Title>Pedidos Anteriores</Title>
      <MyListFinalizedOrders />
      <FooterMobile />
    </div>
  );
}
