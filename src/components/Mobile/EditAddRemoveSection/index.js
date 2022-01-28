import React from 'react';
import styled from 'styled-components';
import ModalAddProductsMobile from '../ModalAddProductsMobile';

const Container = styled.div`
display:none;
@media(max-width:560px){
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:row;
height:50px;
background-color: ${({ theme }) => theme.colors.darkGreen};
color:${({ theme }) => theme.colors.titleGray};
}
`;

Container.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:33%;
font-family:Roboto;
font-size:12px;
`;

Container.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:33%;
font-family:Roboto;
font-size:12px;
`;

Container.Col3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:34%;
font-family:Roboto;
font-size:12px;
`;

export default function LocationAndFilter({ categories, att, setAtt }) {
  return (
    <div>
      <Container>
        <Container.Col1>
          Editar categorias
        </Container.Col1>
        <Container.Col2>
          <ModalAddProductsMobile categories={categories} setAtt={setAtt} att={att} />
        </Container.Col2>
        <Container.Col3>
          Remover categorias
        </Container.Col3>
      </Container>
    </div>
  );
}
