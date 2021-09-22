import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Header from '../../../../src/components/Header';
import MyRequest from '../../../../src/components/MyRequest';
import MyListOrders from '../../../../src/components/MyListOrders';
import MyListFinalizedOrders from '../../../../src/components/MyListFinalizedOrders';
import MyLogOut from '../../../../src/components/MyLogOut';
import WordsDivider from '../../../../src/components/WordsDivider';
import FooterMobile from '../../../../src/components/Mobile/FooterMobile';
import BlackBars from '../../../../src/components/BlackBars';

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
const Section2 = styled.button`
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
const Section3 = styled.button`
  display: flex;
  width:max;
  flex-direction: column;
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
const ActualType = styled.h2`
  display: flex;
  align-items: initial;
  margin-left: 5%;
  font-family: Quicksand;
  @media (max-width: 560px) {
    font-size: 18px;
    margin-top: 10%;
  }
`;
const OldType = styled.h2`
  display: flex;
  align-items: initial;
  margin-left: 5%;
  margin-top: 3%;
  font-family: Quicksand;
  @media (max-width: 560px) {
    font-size: 18px;
    margin-top: 10%;
  }
`;
const VerticalBars = styled.div`
    background-color: black;
    width: 1px;
    height: 40px;
    }
`;
const HorizontalBars = styled.div`
    background-color: black;
    width: 568px;
    height: 1px;
    }
`;

export default function Perfil() {
  return (
    <div>
      <Header />
      <Title>Meu Perfil</Title>

      <SubTitle>
        <Section3>
          <Section2>
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
          </Section2>
        <HorizontalBars></HorizontalBars>
        </Section3>
      </SubTitle>
      <ActualType>Pedido Atual</ActualType>
      <MyListOrders />
      <OldType>Pedidos Anteriores</OldType>
      <MyListFinalizedOrders />
      <FooterMobile />
    </div>
  );
}
