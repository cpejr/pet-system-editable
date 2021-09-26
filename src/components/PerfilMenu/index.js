import React from 'react';
import Link from 'next/link';
import MyLogOut from '../MyLogOut';
import { SubTitle, Section, StyledSpan } from './styles';

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
              <Section selected={item.text === selectedItem}>
                <StyledSpan
                  selected={item.text === selectedItem}
                >
                  {item.text}
                </StyledSpan>
              </Section>
            </Link>
          </>
        ))}
        <Section style={{ border: 'none' }}>
          <MyLogOut />
        </Section>
      </SubTitle>
    </div>
  );
}
