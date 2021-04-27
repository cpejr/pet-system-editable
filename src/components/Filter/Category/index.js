import React from 'react';
import styled from 'styled-components';
import { GrRadial } from 'react-icons/gr';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background-color:${({ theme }) => theme.colors.mediumGray};
width:200px;
border-radius:5px;
margin-bottom:10%;
`;
Container.Title = styled.h3`
display:flex;
align-items:center;
justify-content:center;
margin:0;
width:100%;
height:40px;
background-color:${({ theme }) => theme.colors.mediumGreen};
border-top-left-radius:5px;
border-top-right-radius:5px;
`;

const CategoryContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:row;
`;
CategoryContainer.Col1 = styled.div`
display:flex;
align-items:flex-end;
justify-content:center;
flex-direction:column;
width:20%;
margin-right:2%;

`;

CategoryContainer.Col2 = styled.div`
display:flex;
justify-content:center;
width:80%;
flex-direction:column;
font-family:Roboto;

`;

export default function Category() {
  return (
    <div>
      <Container>
        <Container.Title>Categorias</Container.Title>
        <CategoryContainer>
          <CategoryContainer.Col1>
            <p><GrRadial /></p>
            <p><GrRadial /></p>
            <p><GrRadial /></p>
          </CategoryContainer.Col1>

          <CategoryContainer.Col2>
            <p>Ração</p>
            <p>Brinquedos</p>
            <p>Vasilhas</p>
          </CategoryContainer.Col2>
        </CategoryContainer>
      </Container>
    </div>
  );
}
