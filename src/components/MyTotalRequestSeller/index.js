import React from 'react';
import styled from 'styled-components';

const TotalSellerContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:50vw;
@media(max-width:560px){
  display:none;
}

`;

TotalSellerContainer.Col1 = styled.div`
display:flex;
width:50%;
`;
TotalSellerContainer.Col2 = styled.div`
display:flex;
align-items: flex-end;
justify-content:center;
flex-direction:column;
width:25%;
`;
TotalSellerContainer.Col3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:25%;
`;

const Submit = styled.button`
    height: 40px;
    width: 50%;
    font-family: Roboto;
    font-size: 100%;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.mediumGreen};
    color: white;
    border: 0;
    border-radius: 5px;
    cursor:pointer;
    outline:none;
`;
export default function MyTotalRequestSeller() {
  return (
    <div>
      <TotalSellerContainer>
        <TotalSellerContainer.Col1>
          <Submit>Detalhes</Submit>
        </TotalSellerContainer.Col1>
        <TotalSellerContainer.Col2>
          <p>Subtotal:</p>
          <p>Frete:</p>
          <p>Total</p>
        </TotalSellerContainer.Col2>
        <TotalSellerContainer.Col3>
          <p>R$ 187,00</p>
          <p>R$ 15,00</p>
          <p>R$ 202,00</p>
        </TotalSellerContainer.Col3>
      </TotalSellerContainer>
    </div>
  );
}
