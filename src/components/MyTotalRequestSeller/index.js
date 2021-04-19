import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Description = styled.div`
display:flex;
flex-direction:row;
width:50vw;
@media(max-width:560px){
  width:100vw;
  flex-direction:column;
}

`;

Description.Adress = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
width:70%;
@media(max-width:560px){
  font-size:13px;
  width:100%;
  align-items:center;
  justify-content:center;
}
`;

Description.Delivery = styled.div`
display:flex;
align-items:center;
flex-direction:column;
width:30%;
@media(max-width:560px){
  font-size:13px;
  width:100%;
  align-items:center;
}
`;

const Payment = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
width:50vw;
@media(max-width:560px){
  font-size:13px;
  width:100%;
  align-items:center;
}
`;
Payment.Title = styled.h3`
display:flex;
align-items:center;
`;

Payment.Card = styled.div`
display:flex;
align-items:center;
flex-direction:row;
`;
Payment.Card.Col1 = styled.div`
display:flex;
align-items:center;
flex-direction:column;
width:20%;
`;
Payment.Card.Col2 = styled.p`
display:flex;

flex-direction:column;
width:80%;
`;

const TotalSellerContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:50vw;
margin-top:2%;
@media(max-width:560px){
  width:90vw;

}
`;

TotalSellerContainer.Col1 = styled.div`
display:flex;
width:50%;
@media(max-width:560px){
  align-items:center;
  justify-content:center;
}
`;
TotalSellerContainer.Col2 = styled.div`
display:flex;
align-items: flex-end;
justify-content:center;
flex-direction:column;
width:25%;
@media(max-width:560px){
  font-size:13px;
}
`;
TotalSellerContainer.Col3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:25%;
@media(max-width:560px){
  font-size:13px;
}
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
export default function MyTotalRequestSellerOpen() {
  const [divOpen, setDivOpen] = useState(false);

  const HandleChange = () => {
    setDivOpen(divOpen === false);
  };

  const insideButton = divOpen;
  return (
    <div>
      {insideButton && (
        <div>
          <Description>
            <Description.Adress>
              <h3>A entrega foi realizada em:</h3>
              <p>Carla Almeida</p>
              <p>Av. João Cesar,828 casa, Eldorado</p>
              <p>Contagem- MG</p>
              <p>CEP: 32600-000</p>
            </Description.Adress>
            <Description.Delivery>
              <h4>Tipo de Entrega: Motoboy</h4>
            </Description.Delivery>
          </Description>
          <Payment>
            <Payment.Title>
              O pagamento foi feito com:
            </Payment.Title>
            <Payment.Card>
              <Payment.Card.Col1>
                <Image src="/images/card.jpg" width="100" height="50" />
              </Payment.Card.Col1>
              <Payment.Card.Col2>
                2x de R$ 101,00 sem juros
              </Payment.Card.Col2>
            </Payment.Card>
          </Payment>
        </div>
      )}
      <TotalSellerContainer>
        <TotalSellerContainer.Col1>
          <Submit onClick={HandleChange}>{insideButton ? 'Fechar detalhes' : 'Detalhes' }</Submit>
        </TotalSellerContainer.Col1>

        <TotalSellerContainer.Col2>
          <p>Subtotal:</p>
          <p>Frete:</p>
          <p>Total:</p>
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
