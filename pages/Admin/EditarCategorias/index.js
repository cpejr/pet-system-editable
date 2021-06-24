import React from 'react';
import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
// import axios from 'axios';
import HeaderAdmin from '../../../src/components/HeaderAdmin';
// import AdminCards from '../../src/components/AdminCards';
import AdminCardsFix from '../../../src/components/AdminCardsFix';
import WindowDividerAdmin from '../../../src/components/WindowDividerAdmin';
import Categories from '../../../src/components/Categories';
import ModalAddCategory from '../../../src/components/CategoryModals/ModalAddCategory';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
@media(max-width:860px){
    flex-direction:column;
}
`;

Container.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:40%;
@media(max-width:860px){
    width:100%;
}
`;
Container.Col1.Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-bottom:5%;
`;

Container.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:60%;
@media(max-width:860px){
    width:100%;
    margin-top:4%;
}
`;

const ContainerCategories = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:80%;
  margin-bottom: 5%;
  //background-color: yellow;
`;

ContainerCategories.Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //background-color: green;
  width: 100%;
  margin-bottom: 5%;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-size: 45px;
  font-weight: 400; 
  margin-top: 0;
  margin-bottom: 0;
`;

const TopButton = styled.button`
  cursor: pointer;
  margin-top: 1%;
  margin-bottom: 1%;
  align-items: flex-end;
  cursor: pointer;
  height: 40px;
  width: 200px;
  border-radius: 5px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: white;
`;

export default function Admin() {
  return (
    <div>
      <HeaderAdmin />
      <Container>
        <Container.Col1>
          <Container.Col1.Row1>
            <FaRegUserCircle size={80} style={{ color: '#609694' }} />
          </Container.Col1.Row1>
          {/**
              <AdminCards />
           */}
          <AdminCardsFix />
        </Container.Col1>
        <WindowDividerAdmin />
        <Container.Col2>
          <ContainerCategories>
            <ContainerCategories.Top>
              <Title>Edição de Categorias</Title>
              {/** <TopButton>Criar categoria</TopButton> * */}
              <ModalAddCategory />
            </ContainerCategories.Top>
            <Categories />
          </ContainerCategories>
        </Container.Col2>
      </Container>
    </div>
  );
}
