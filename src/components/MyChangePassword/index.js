import React from 'react';
import styled from 'styled-components';

const FieldsConatiner = styled.div`
display:flex;
width:100%;
flex-direction:column;
margin-top:2%;
align-items:center
`;

const Fields = styled.div`
display:flex;
flex-direction:column;
`;
const InputFields = styled.input`
    height: 30px;
    width: 400px;
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
export default function MyChangePassword() {
  return (
    <FieldsConatiner>
      <Fields>
        <InputFields placeholder="Senha atual" />
        <InputFields placeholder="Nova senha" />
        <InputFields placeholder="Confirme a nova senha" />
      </Fields>
      <ConfirmButton>
        <Submit>Confirmar</Submit>
      </ConfirmButton>

    </FieldsConatiner>
  );
}
