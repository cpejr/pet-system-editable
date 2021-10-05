import React from 'react';
import Image from 'next/image';
import { GrLocation } from 'react-icons/gr';
import { BsSearch, BsFillPersonFill } from 'react-icons/bs';
import { MdShoppingCart } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { CgCloseO } from 'react-icons/cg';
import Link from 'next/link';
import styled from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import {
  ImageBox, TextBox, YourSpace, YourSpaceContainer, ItemBottomHeader, LogOut,
} from './styles';

Header.Wrapper = styled.div`
    display:flex;
    width: 100%;
    height: 25vh;
    flex-direction: column;
    @media(max-width:800px){
    display:none;
    }
`;

Header.Top = styled.div`
    display: flex;
    width:100%;
    align-items: center;
    justify-content: space-around;
    height: 75%;
    background-color: ${({ theme }) => theme.colors.rose};
`;

Header.Bottom = styled.div`
    display: flex;
    width:100%;
    flex-direction: row;
    justify-content: space-around;  // space evenly
    height: 35%;
    background-color: ${({ theme }) => theme.colors.mediumGreen};
`;

export default function Header() {
  const { user, logout } = useAuth();
  const PersonalButton = () => {
    if (!user) {
      return (
        <Link href="/login">
          <YourSpace.Word>
            Login
          </YourSpace.Word>
        </Link>
      );
    }
    switch (user.type) {
      case 'admin':
        return (
          <Link href="/admin">
            <YourSpace.Word>
              {user.name}
            </YourSpace.Word>
          </Link>
        );
      case 'seller':
        return (
          <Link href="/Seller/Perfil/Products">
            <YourSpace.Word>
              {user.name}
            </YourSpace.Word>
          </Link>
        );
      default:
        return (
          <Link href="/User/Perfil/MyRequests">
            <YourSpace.Word>
              {user.name}
            </YourSpace.Word>
          </Link>
        );
    }
  };

  return (
    <Header.Wrapper>
      <Header.Top>
        <ImageBox>
          <Link href="/Home">
            <Image src="/images/LogoWeb.png" alt="" width="250" height="100" />
          </Link>
        </ImageBox>
        <TextBox>
          <TextBox.LocationContainer>
            <GrLocation size="20" />
            <TextBox.Location type="" placeholder="Localização" />
          </TextBox.LocationContainer>
          <TextBox.SearchContainer>
            <BsSearch size="15" />
            <TextBox.Search type="text" placeholder="Busque por uma loja, produto, serviço" />
            <CgCloseO />
          </TextBox.SearchContainer>
        </TextBox>
        <YourSpaceContainer>
          <YourSpace>
            <BsFillPersonFill />
            <PersonalButton />
          </YourSpace>
        </YourSpaceContainer>
        <MdShoppingCart size="30" color="#AA4545" style={{ cursor: 'pointer' }} />
        <LogOut onClick={logout}>
          <Link href="/login">
            <FiLogIn size="30" color="#AA4545" style={{ cursor: 'pointer' }} />
          </Link>
        </LogOut>
      </Header.Top>
      <Header.Bottom>
        <ItemBottomHeader>Rações</ItemBottomHeader>
        <ItemBottomHeader>Petiscos</ItemBottomHeader>
        <ItemBottomHeader>Brinquedos</ItemBottomHeader>
        <ItemBottomHeader>Banhos</ItemBottomHeader>
        <ItemBottomHeader>Tosa</ItemBottomHeader>
        <ItemBottomHeader>Shampoos</ItemBottomHeader>
        <ItemBottomHeader>Perfumes</ItemBottomHeader>
        <ItemBottomHeader>Vasilhas</ItemBottomHeader>
        <ItemBottomHeader>Casinhas</ItemBottomHeader>
        <ItemBottomHeader>Outros serviços</ItemBottomHeader>
      </Header.Bottom>
    </Header.Wrapper>
  );
}
