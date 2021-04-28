import React, { useState } from 'react';
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
width:30%;
flex-direction:column;
`;
PaymentContainer.Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
`;

PaymentContainer.Row1.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
PaymentContainer.Row1.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
PaymentContainer.Row2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
`;
PaymentContainer.Row2.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
PaymentContainer.Row2.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

PaymentContainer.Row3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
margin-bottom:5%;
`;
PaymentContainer.Row3.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
PaymentContainer.Row3.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

export default function MyDatasMobile() {
  const [checkedCredito, setCheckedCredito] = useState(false);
  const handleClickCredito = () => setCheckedCredito(!checkedCredito);

  const [checkedDebito, setCheckedDebito] = useState(false);
  const handleClickDebito = () => setCheckedDebito(!checkedDebito);

  const [checkedBoleto, setCheckedBoleto] = useState(false);
  const handleClickBoleto = () => setCheckedBoleto(!checkedBoleto);

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

          <PaymentContainer.Row1>
            <PaymentContainer.Row1.Col1>
              <input onClick={handleClickCredito} checked={checkedCredito} type="radio" />
            </PaymentContainer.Row1.Col1>
            <PaymentContainer.Row1.Col2>
              Crédito
            </PaymentContainer.Row1.Col2>
          </PaymentContainer.Row1>

          <PaymentContainer.Row2>
            <PaymentContainer.Row2.Col1>
              <input onClick={handleClickDebito} checked={checkedDebito} type="radio" />
            </PaymentContainer.Row2.Col1>
            <PaymentContainer.Row2.Col2>
              Débito
            </PaymentContainer.Row2.Col2>
          </PaymentContainer.Row2>

          <PaymentContainer.Row3>
            <PaymentContainer.Row3.Col1>
              <input onClick={handleClickBoleto} checked={checkedBoleto} type="radio" />
            </PaymentContainer.Row3.Col1>
            <PaymentContainer.Row3.Col2>
              Boleto
            </PaymentContainer.Row3.Col2>
          </PaymentContainer.Row3>
        </PaymentContainer>
      </Container>
    </div>
  );
}
