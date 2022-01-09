import React from 'react';
import { MdHome, MdReceipt } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { MobileHeaderContainer, MobileHeaderSpace } from './styles';

export default function MobileHeader() {
  return (
    <div>
      <MobileHeaderSpace />
      <MobileHeaderContainer>
        <MobileHeaderContainer.Col1>
          <MdHome size="40" />
          Início
        </MobileHeaderContainer.Col1>
        <MobileHeaderContainer.Col2>
          <AiOutlineSearch size="40" />
          Busca
        </MobileHeaderContainer.Col2>
        <MobileHeaderContainer.Col3>
          <MdReceipt size="40" />
          Pedidos
        </MobileHeaderContainer.Col3>
        <MobileHeaderContainer.Col4>
          <BsFillPersonFill size="40" />
          Perfil
        </MobileHeaderContainer.Col4>
      </MobileHeaderContainer>
    </div>
  );
}
