import React from 'react';
import Link from 'next/link';
import MyLogOut from '../MyLogOut';
import { SubTitle, Section, StyledSpan } from './styles';
import URL_BASE from '../../utils/urlBase';

const menuItens = [
  {
    text: 'Meus Pedidos',
    url: `${URL_BASE}/User/Perfil/MyRequests`,
  },
  {
    text: 'Meus Endereços',
    url: `${URL_BASE}/User/Perfil/MyAdresses`,
  },
  {
    text: 'Meus Dados',
    url: `${URL_BASE}/User/Perfil/MyDatas`,
  },
  {
    text: 'Alterar Senha',
    url: `${URL_BASE}/User/Perfil/ChangePassword`,
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
