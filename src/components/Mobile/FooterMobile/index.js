import React from 'react';
import { MdHome, MdReceipt } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { FooterContainer } from './styles';

export default function FooterMobile() {
  return (
    <div>
      <FooterContainer>
        <FooterContainer.Col1>
          <MdHome size="40" />
          Início
        </FooterContainer.Col1>
        <FooterContainer.Col2>
          <AiOutlineSearch size="40" />
          Busca
        </FooterContainer.Col2>
        <FooterContainer.Col3>
          <MdReceipt size="40" />
          Pedidos
        </FooterContainer.Col3>
        <FooterContainer.Col4>
          <BsFillPersonFill size="40" />
          Perfil
        </FooterContainer.Col4>
      </FooterContainer>
    </div>
  );
}
