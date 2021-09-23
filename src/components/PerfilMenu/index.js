import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import MyLogOut from '../MyLogOut';

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
  flex-direction: row;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 1%;
  margin-left: 1%;
  border: none;
  background-color: ${({ theme, selected }) => (selected ? theme.colors.hoverBackground : theme.colors.background)};
  border-radius: ${({ selected }) => (selected ? '5%' : null)};
  cursor: pointer;
  font-family: Quicksand;
  outline: none;
`;

const VerticalBar = styled.div`
    background-color: #000;
    width: 1px;
    height: 40px;
`;

const menuItens = [
  {
    text: 'Meus Pedidos',
    url: 'http://localhost:3000/User/Perfil/MyRequests',
  },
  {
    text: 'Meus Endereços',
    url: 'http://localhost:3000/User/Perfil/MyAdresses',
  },
  {
    text: 'Meus Dados',
    url: 'http://localhost:3000/User/Perfil/MyDatas',
  },
  {
    text: 'Alterar Senha',
    url: 'http://localhost:3000/User/Perfil/ChangePassword',
  },
];

export default function PerfilMenu({ selectedItem }) {
  return (
    <div>
      <SubTitle>
        {menuItens.map((item) => (
          <>
            <Link href={item.url}>
              <Section selected={item.text === selectedItem}>{item.text}</Section>
            </Link>
            <VerticalBar />
          </>
        ))}
        <Section>
          <MyLogOut />
        </Section>
      </SubTitle>
    </div>
  );
}
