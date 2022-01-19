import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { MdHome, MdReceipt, MdLogin, MdShoppingCart } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { MobileHeaderContainer, MobileHeaderSpace } from './styles';
import Link from 'next/link';
import { useAuth } from '../../../contexts/AuthContext';
import { IoMdNotificationsOutline } from 'react-icons/io';



export default function MobileHeader() {
  const {user, store} = useAuth();
  const router = useRouter();
  const [searchText, setSearchText] = useState('');

  const HandleProfileButton = () => {
    if (!user && !store) return router.push("/login");
    if (store) return router.push("/Seller/Perfil/Products");
    if (user.type != 'admin')  return router.push("/User/Perfil/MyRequests");
    if (user.type === 'admin') return router.push("/Admin");
  };

  const ProfileButton = () => {
    if (!user && !store) {
      return(
        <MobileHeaderContainer.Col4 onClick={HandleProfileButton}>
          <MdLogin size="40" />
          Login
        </MobileHeaderContainer.Col4>
      );
    }
    if (user || store) {
      return(
        <MobileHeaderContainer.Col4 onClick={HandleProfileButton}>
          <BsFillPersonFill size="40" />
          Perfil
        </MobileHeaderContainer.Col4>
      );
    }

  }

  const HomeButton = () => router.push("/Home");

  const SearchButton = () => router.push({ pathname: '/Search', query: { keyword: searchText } });

  const PersonalButton = () => {
    if(!user && !store){
      return(
        <MobileHeaderContainer.Col3 />
      ); 
    }
    if(store){
      return(
        <MobileHeaderContainer.Col3>
          <Link href="/Seller/Perfil/SellerRequests">
            <MdReceipt size="40"/>
            Pedidos
          </Link>
        </MobileHeaderContainer.Col3>
      );
    }
    if(user.type != 'Admin') {
      return(  
        <Link href="/Carrinho">
           <MobileHeaderContainer.Col3>
            <MdShoppingCart size="40"/>
        </MobileHeaderContainer.Col3> 
        </Link> 
      );   
    }
    if(user.type === 'admin') {
      return(
        <MobileHeaderContainer.Col3>
          <Link href="/Admin">
            <IoMdNotificationsOutline size="40"/>
            Notificações
          </Link>
        </MobileHeaderContainer.Col3>
      );
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
        <PersonalButton />
        <ProfileButton />
      </MobileHeaderContainer>
    </div>
  );
}
