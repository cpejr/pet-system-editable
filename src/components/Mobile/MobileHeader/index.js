import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { MdHome, MdReceipt } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { MobileHeaderContainer, MobileHeaderSpace } from './styles';
import Link from 'next/link';
import { useAuth } from '../../../contexts/AuthContext';
import { MdShoppingCart } from 'react-icons/md';

export default function MobileHeader() {
  const {user, store} = useAuth();
  const router = useRouter();
  const [searchText, setSearchText] = useState('');

  const ProfileButton = () => {
    if (!user && !store) router.push('/login');
    if (store) router.push('/Seller/Perfil/Products');
    if (user && user.type != 'Admin') router.push('/User/Perfil/MyRequests');
    if (user.type === 'Admin') router.push('/Admin');
  };

  const HomeButton = () => router.push('/Home');

  const SearchButton = () => router.push({ pathname: '/Search', query: { keyword: searchText } });

  const PersonalButton = () => {
    if(store){

    }
    if(user && user.type != 'Admin') {
      return(
      <MobileHeaderContainer.Col3>
        <MdReceiptMdShoppingCart size="40" />
        Carrinho
      </MobileHeaderContainer.Col3>
      ) 
      
    }
  }

  return (
    <div>
      <MobileHeaderSpace />
      <MobileHeaderContainer>
        <MobileHeaderContainer.Col1 onClick={HomeButton}>
          <MdHome size="40" />
          Início
        </MobileHeaderContainer.Col1>
        <MobileHeaderContainer.Col2>
          <AiOutlineSearch size="40" onClick={SearchButton}/>
          Busca
        </MobileHeaderContainer.Col2>
        <PersonalButton/>
        <MobileHeaderContainer.Col4 onClick={ProfileButton}>
          <BsFillPersonFill size="40" />
          Perfil
        </MobileHeaderContainer.Col4>
      </MobileHeaderContainer>
    </div>
  );
}
