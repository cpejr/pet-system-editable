import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import { CgCloseO } from 'react-icons/cg';
import ModalFilterSearch from '../ModalFilterSearch';

const Container = styled.div`
display:none;
@media(max-width:800px){
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;
font-family:Roboto; 
}
`;
const ContainerSearch = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:row;
`;
const TextBox = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-around;
    height: 100px;
    width: 70%;
    border-radius: 5px;
`;
TextBox.SearchContainer = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  width: 80%;
  height:45%;
  border-radius: 5px;
  border: 0px;
  padding-left:0.5%;
  padding-right:0.5%;
  background-color:${({ theme }) => theme.colors.mediumGray};
`;

TextBox.Search = styled.input`
  display:flex;
  height: 90%;
  width: 70%;
  margin-left:2%;
  border-radius: 5px;
  border: 0px;
  background-color:${({ theme }) => theme.colors.mediumGray};
  outline:none;
`;
ContainerSearch.Col2 = styled.button`
width:30%;
border:none;
background-color:${({ theme }) => theme.colors.background};
font-size:16px;
color:${({ theme }) => theme.colors.mediumGreen};
`;
const TypeContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
margin-bottom:2%;
`;
TypeContainer.Cols = styled.button`
display:flex;
align-items:center;
justify-content:center;
width:33%;
background-color:${({ theme }) => theme.colors.background};
font-size:16px;
border-top:none;
border-left:none;
border-right:none;
border-bottom:solid;
border-width:1px;
`;
TypeContainer.Cols2 = styled.button`
display:flex;
align-items:center;
justify-content:center;
width:33%;
background-color:${({ theme }) => theme.colors.background};
font-size:16px;
border-top:none;
border-left:none;
border-right:none;
border-bottom:solid;
border-width:1px;
`;
TypeContainer.Cols3 = styled.button`
display:flex;
align-items:center;
justify-content:center;
width:34%;
background-color:${({ theme }) => theme.colors.background};
font-size:16px;
border-top:none;
border-left:none;
border-right:none;
border-bottom:solid;
border-width:1px;
`;

export default function SearchHeader() {
  const [checkedStore, setCheckedStore] = useState('#AAABB0');
  const handleClickStore = () => {
    if (checkedStore === '#AAABB0') {
      setCheckedStore('#609694');
    } else {
      setCheckedStore('#AAABB0');
    }
  };
  const [checkedProducts, setCheckedProducts] = useState('#AAABB0');
  const handleClickProducts = () => {
    if (checkedProducts === '#AAABB0') {
      setCheckedProducts('#609694');
    } else {
      setCheckedProducts('#AAABB0');
    }
  };
  const [checkedService, setCheckedService] = useState('#AAABB0');
  const handleClickService = () => {
    if (checkedService === '#AAABB0') {
      setCheckedService('#609694');
    } else {
      setCheckedService('#AAABB0');
    }
  };
  return (
    <div>
      <Container>
        <ContainerSearch>
          <TextBox>
            <TextBox.SearchContainer>
              <BsSearch size="20" style={{ color: '#609694' }} />
              <TextBox.Search type="text" />
              <CgCloseO size="20" style={{ color: '#609694' }} />
            </TextBox.SearchContainer>
          </TextBox>
          <ContainerSearch.Col2>
            Cancelar
          </ContainerSearch.Col2>
        </ContainerSearch>
        <TypeContainer>
          <TypeContainer.Cols
            onClick={handleClickStore}
            style={{ color: checkedStore }}
          >
            Lojas
          </TypeContainer.Cols>
          <TypeContainer.Cols2
            onClick={handleClickProducts}
            style={{ color: checkedProducts }}
          >
            Produtos
          </TypeContainer.Cols2>
          <TypeContainer.Cols3
            onClick={handleClickService}
            style={{ color: checkedService }}
          >
            Serviços
          </TypeContainer.Cols3>
        </TypeContainer>
        <ModalFilterSearch />
      </Container>
    </div>
  );
}
