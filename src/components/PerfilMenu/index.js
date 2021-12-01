import React from 'react';
import Link from 'next/link';
import MyLogOut from '../MyLogOut';
import { SubTitle, Section, StyledSpan } from './styles';
import api from '../../utils/api';
import JsonToCSV from '../JsonToCSV';

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

// const testando = [
//   {
//     company_name: 'DESGRAÇA', cnpj: '112155445', email: 'é isso porra', cellphone: '112155445', phone: '112155445', shipping_tax: 'R$5,00',
//   },
//   {
//     email: 'é isso porra', cnpj: '112155445', cellphone: '112155445', phone: '112155445', shipping_tax: 'R$5,00', company_name: 'CARALHO',
//   },
// ];

export default function PerfilMenu({ selectedItem }) {
  const getStoreData = async () => {
    const { data } = await api.get('store');
    console.log('🚀 ~ file: index.js ~ line 39 ~ getStoreData ~ teste', data);
    return data;
  };

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
          <JsonToCSV data={getStoreData()} />
        </Section>
        <Section style={{ border: 'none' }}>
          <MyLogOut />
        </Section>
      </SubTitle>
    </div>
  );
}
