import React from 'react';
import Link from 'next/link';
import { SubTitle, Section, StyledSpan } from './styles';
import URL_BASE from '../../utils/urlBase';

const menuItens = [
  {
    text: 'Meus produtos',
    url: `${URL_BASE}/Seller/Perfil/Products`,
  },
  {
    text: 'Minha loja',
    url: `${URL_BASE}/Seller/Perfil/Store`,
  },
  {
    text: 'Pedidos',
    url: `${URL_BASE}/Seller/Perfil/SellerRequests`,
  },
  {
    text: 'Minhas vendas',
    url: `${URL_BASE}/Seller/Perfil/Sales`,
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
      </SubTitle>
    </div>
  );
}
