import React from 'react';
import Link from 'next/link';
import { SubTitle, Section, StyledSpan } from './styles';

const menuItens = [
  {
    text: 'Meus produtos',
    url: 'http://localhost:3000/Seller/Perfil/Products',
  },
  {
    text: 'Minha loja',
    url: 'http://localhost:3000/Seller/Perfil/Store',
  },
  {
    text: 'Pedidos',
    url: 'http://localhost:3000/Seller/Perfil/SellerRequests',
  },
  {
    text: 'Minhas vendas',
    url: 'http://localhost:3000/Seller/Perfil/Sales',
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
