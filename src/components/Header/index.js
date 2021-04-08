import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

Header.Wrapper = styled.div`
    width: 100%;
    height: 16vh;
    display: flex;
    flex-direction: column;
`;

Header.Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 75%;
    background-color: #F6C8CA;
`;

Header.Bottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;  // space evenly
    height: 25%;
    background-color: #609694;
`;

const TextBox = styled.input`
    margin-top: 15px;
    height: 30px;
    width: 400px;
    border-radius: 5px;
    border: 0.3px solid #000000;
    background: #F2F2F2;
`;

TextBox.Location = styled.input`
  height: 40px;
  width: 200px;
  border-radius: 5px;
  border: 0px;
  background: #FFF1F1;
`;

TextBox.Search = styled.input`
  height: 40px;
  width: 700px;
  border-radius: 5px;
  border: 0px;
  background: #FFF1F1;
`;

const Access = styled.button`
    height: 40px;
    width: 150px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 300;
    background-color: #609694;
    color: white;
    border: 0;
    border-radius: 5px;
`;

const ItemBottomHeader = styled.p`
  font-family: Poiret One;
  font-size: 20px;
  color: white;
  margin: 9px;
`;

export default function Header() {
  return (
    <Header.Wrapper>
      <Header.Top>
        <Image src="/images/LogoWeb.png" alt="" width="250" height="100" />
        <TextBox.Location type="" placeholder="Localização" />
        <TextBox.Search type="text" placeholder="Busque por uma loja, produto, serviço" />
        <Access>Acessar</Access>
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
