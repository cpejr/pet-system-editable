import React from 'react';
import styled from 'styled-components';
import { GrRadial, GrRadialSelected } from 'react-icons/gr';

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
    width: 30%;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.baseGray};
    background: #F2F2F2;
    margin-bottom:1%;
    @media(max-width:560px){
      height: 40px;
    width: 70%;
    border-radius: 5px;
    margin-bottom:2%;
}
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

const PaymentContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:row;
`;
PaymentContainer.Col1 = styled.div`
display:flex;
align-items:flex-end;
justify-content:center;
flex-direction:column;
width:30%;
margin-right:2%;
color: ${({ theme }) => theme.colors.mediumGreen};
`;

PaymentContainer.Col2 = styled.h4`
display:flex;
justify-content:center;
width:70%;
flex-direction:column;
font-family:Roboto;
margin:0;
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
        <Title>Alterar Forma de Pagamento:</Title>
        <PaymentContainer>
          <PaymentContainer.Col1>
            <p><GrRadialSelected style={{ color: '#609694' }} /></p>
            <p><GrRadial /></p>
            <p><GrRadial /></p>
          </PaymentContainer.Col1>

          <PaymentContainer.Col2>

            <p>Débito</p>
            <p>Crédito</p>
            <p>Dinheiro</p>
          </PaymentContainer.Col2>
        </PaymentContainer>
      </Container>
    </div>
  );
}
