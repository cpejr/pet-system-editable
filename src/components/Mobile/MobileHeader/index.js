import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  MdHome, MdReceipt, MdLogin, MdShoppingCart,
} from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';
import { CgDollar } from 'react-icons/cg';
import styled from 'styled-components';
import { MobileHeaderContainer, MobileHeaderSpace } from './styles';
import { useAuth } from '../../../contexts/AuthContext';
import { useCart } from '../../CardContext/CardContext';

MobileHeader.Carrinho = styled.span`
  font-size: 12px;
  background: #ff0000;
  color: #fff;
  padding: 0 5px;
  vertical-align: top;
  margin-right: -38px;
  margin-top: 1px;
  margin-bottom:-15px;
  font-weight: 600;
  border-radius: 9px; 
`;

export default function MobileHeader() {
  const { user, store } = useAuth();
  const router = useRouter();
  const [searchText] = useState('');
  const cart = useCart();
  const itemsCount = Object.keys(cart.cart).length;

  const HandleProfileButton = () => {
    if (!user && !store) return router.push('/login');
    if (store) return router.push('/Seller/Perfil/Products');
    if (user?.type !== 'admin') return router.push('/User/Perfil/MyRequests');
    return router.push('/Admin');
  };

  const ProfileButton = () => {
    if (!user && !store) {
      return (
        <MobileHeaderContainer.Col4 onClick={HandleProfileButton}>
          <MdLogin size="40" />
          Login
        </MobileHeaderContainer.Col4>
      );
    }
    return (
      <MobileHeaderContainer.Col4 onClick={HandleProfileButton}>
        <BsFillPersonFill size="40" />
        Perfil
      </MobileHeaderContainer.Col4>
    );
  };

  const HomeButton = () => router.push('/Home');

  const SearchButton = () => router.push({ pathname: '/Search', query: { keyword: searchText } });

  const PersonalButton = () => {
    if ((!user && !store) || user?.type !== 'admin') {
      return (
        <Link href="/Carrinho">
          <MobileHeaderContainer.Col3>
            {(itemsCount > 0) ? (
              <MobileHeader.Carrinho>
                {itemsCount > 0 && <span>{itemsCount}</span>}
              </MobileHeader.Carrinho>
            ) : (
              <div />
            )}
            <MdShoppingCart size="40" />
            Carrinho
          </MobileHeaderContainer.Col3>
        </Link>
      );
    }
    if (store) {
      return (
        <MobileHeaderContainer.Col3>
          <Link href="/Seller/Perfil/SellerRequests">
            <MdReceipt size="40" />
            Pedidos
          </Link>
        </MobileHeaderContainer.Col3>
      );
    }
    return (
      <Link href="/Admin/Comissoes">
        <MobileHeaderContainer.Col3>
          <CgDollar size="40" />
          Comissões
        </MobileHeaderContainer.Col3>
      </Link>
    );
  };

  return (
    <div>
      <MobileHeaderSpace />
      <MobileHeaderContainer>
        <MobileHeaderContainer.Col1 onClick={HomeButton}>
          <MdHome size="40" />
          Início
        </MobileHeaderContainer.Col1>
        <MobileHeaderContainer.Col2>
          <AiOutlineSearch size="40" onClick={SearchButton} />
          Busca
        </MobileHeaderContainer.Col2>
        <PersonalButton />
        <ProfileButton />
      </MobileHeaderContainer>
    </div>
  );
}
