import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;
`;
const Title = styled.h3`
display:flex;
align-items:center;
justify-content:center;
width:100%;
font-family:Roboto;
margin-bottom:2%;
`;

const Fields = styled.div`
display:flex;
align-items:center;
justify-items:center;
flex-direction:column;
width:100%;

`;
const InputFields = styled.input`
    height: 40px;
    width: 70%;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.baseGray};
    background: #F2F2F2;
    margin-bottom:3%;
`;

const ConfirmButton = styled.div`
display:flex;
align-items:center;
`;

const Submit = styled.button`
display:flex;
align-items:center;
justify-content:center;
    height: 40px;
    width: 150px;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.mediumGreen};
    color: white;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    outline:none;
`;

export default function MyDatasMobile() {
  return (
    <div>
      <Container>
        <Title>Alterar Senha:</Title>
        <Fields>
          <InputFields placeholder="Senha atual" />
          <InputFields placeholder="Nova senha" />
          <InputFields placeholder="Confirme a nova senha" />
        </Fields>
        <ConfirmButton>
          <Submit>Confirmar</Submit>
        </ConfirmButton>
      </Container>
    </div>
  );
}
