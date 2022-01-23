import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { GrLocation } from 'react-icons/gr';
import { BsSearch, BsFillPersonFill } from 'react-icons/bs';
import { MdShoppingCart } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';
import { CgCloseO } from 'react-icons/cg';
import Link from 'next/link';
import { useAuth } from '../../contexts/AuthContext';

Header.Wrapper = styled.div`
    display:flex;
    width: 100%;
    height: 25vh;
    flex-direction: column;
    flex-direction: column;
    @media(max-width:560px){
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
    @media(max-width:560px){
    display:none;
    }
`;

Header.Bottom = styled.div`
    display: flex;
    width:100%;
    flex-direction: row;
    justify-content: space-around;
    height: 35%;
    background-color: ${({ theme }) => theme.colors.mediumGreen};
    @media(max-width:560px){
    display:none;
    }
`;

const ImageBox = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
cursor:pointer;
`;

const TextBox = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-around;
    height: 100%;
    width: 55%;
    border-radius: 5px;
`;

TextBox.LocationContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  height:45%;
  width: 30%;
  border-radius: 5px;
  border: 0px;
  background: #FFF1F1;
  padding-left:0.5%;  
`;

TextBox.Location = styled.input`
display:flex;
  height: 90%;
  width: 90%;
  margin-left:1%;
  border-radius: 5px;
  border: 0px;
  background: #FFF1F1;
  outline:none;
  
`;

TextBox.SearchContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  width: 60%;
  height:45%;
  border-radius: 5px;
  border: 0px;
  padding-left:0.5%;
  padding-right:0.5%;
  background: #FFF1F1;
`;

TextBox.Search = styled.input`
  display:flex;
  height: 90%;
  width: 90%;
  margin-left:1%;
  border-radius: 5px;
  border: 0px;
  background: #FFF1F1;
  outline:none;
`;

const YourSpaceContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:11%;
height:100%;
`;

const YourSpace = styled.button`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    width: 100%;
    height:45%;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 300;
    background-color: ${({ theme }) => theme.colors.mediumGreen};
    color: white;
    border: 0;
    border-radius: 5px;
    cursor:pointer;
`;

YourSpace.Word = styled.p`
display:flex;
align-items:center;
justify-content:center;
font-size: 100%;
margin: 0;
`;

const ItemBottomHeader = styled.p`
  display:flex;
  align-items:center;
  justify-content:center;
  font-family: Poiret One;
  font-size: 100%;
  color: white;
  margin: 0;
  cursor: pointer;
`;

const LogOut = styled.button`
display: flex;
align-items: center;
justify-content: center;
border: 0;
outline: none;
background-color:${({ theme }) => theme.colors.rose} ;
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
              {user.first_name}
            </YourSpace.Word>
          </Link>
        );
      case 'seller':
        return (
          <Link href="/Seller/Perfil/Products">
            <YourSpace.Word>
              {user.first_name}
            </YourSpace.Word>
          </Link>
        );
      default:
        return (
          <Link href="/User/Perfil/MyRequests">
            <YourSpace.Word>
              {user.first_name}
            </YourSpace.Word>
          </Link>
        );
    }
  };
  return (
    <Header.Wrapper>
      <Header.Top>
        <Link href="/Home">
          <ImageBox>
            <Image src="/images/LogoWeb.png" alt="" width="250" height="100" />
          </ImageBox>
        </Link>
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
        <ItemBottomHeader>Ração</ItemBottomHeader>
        <ItemBottomHeader>Brinquedos</ItemBottomHeader>
        <ItemBottomHeader>Vasilhas</ItemBottomHeader>
        <ItemBottomHeader>Casinhas</ItemBottomHeader>
        <ItemBottomHeader>Petiscos</ItemBottomHeader>
        <ItemBottomHeader>Shampoo</ItemBottomHeader>
        <ItemBottomHeader>Perfumes</ItemBottomHeader>
        <ItemBottomHeader>Banho</ItemBottomHeader>
        <ItemBottomHeader>Tosa</ItemBottomHeader>
        <ItemBottomHeader>Outros serviços</ItemBottomHeader>
      </Header.Bottom>
    </Header.Wrapper>
  );
}
