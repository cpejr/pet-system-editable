import { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../utils/api';

const Description = styled.div`
display:flex;
flex-direction:column;
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
align-items:flex-start;
flex-direction:column;
width:70%;
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
margin-bottom: 50px;
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
export default function MyTotalRequestSellerOpen({ order }) {
  const [divOpen, setDivOpen] = useState(false);
  const [store, setStore] = useState([]);

  useEffect(() => {
    api.get(`store/${order.firebase_id_store}`).then((res) => {
      setStore(res.data);
    });
  }, []);

  const HandleChange = () => {
    setDivOpen(divOpen === false);
  };

  const insideButton = divOpen;
  return (
    <div>
      <TotalSellerContainer>
        <TotalSellerContainer.Col1>
          <Submit onClick={HandleChange}>{insideButton ? 'Fechar detalhes' : 'Detalhes' }</Submit>
        </TotalSellerContainer.Col1>

        <TotalSellerContainer.Col2>
          <p>
            Subtotal:
          </p>
          <p>
            Frete:
          </p>
          <p>Total:</p>
        </TotalSellerContainer.Col2>
        <TotalSellerContainer.Col3>
          <p>R$ {order.total_price}</p>
          <p>R$ {store.shipping_tax}</p>
          <p>R$ {order.total_price + parseFloat(store.shipping_tax)}</p>
        </TotalSellerContainer.Col3>

      </TotalSellerContainer>
      {insideButton && (
        <div>
          <Description>
            <Description.Adress>
              <h3>A entrega foi realizada em:</h3>
              <p>
                {order.street}
                ,
                {order.address_num}
                ,
                {order.complement}
                ,
                {order.district}
              </p>
              <p>
                {order.city}
                -
                {order.state}
              </p>
              <p>
                CEP:
                {' '}
                {order.zipcode}
              </p>
            </Description.Adress>
            <Description.Delivery>
              <h3>
                Tipo de Entrega:
              </h3>
              <p>
                {' '}
                {order.delivery_method}
              </p>
            </Description.Delivery>
          </Description>
          <Payment>
            <Payment.Title>
              O pagamento foi feito com:
            </Payment.Title>
            {order.payment_type}
          </Payment>
        </div>
      )}
    </div>
  );
}
