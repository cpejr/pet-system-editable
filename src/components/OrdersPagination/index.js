import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import MyProductRequestSmall from '../MyProductRequestSmall';

const RequestContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
height:100%;
width:75%;
padding:0;
border-style:solid;
border-width:1px;   
border-color:${({ theme }) => theme.colors.borderBoxColor};
@media(max-width:560px){
    width:90%;
    }
`;

const OrderText = styled.ul`
width:100%;
padding:0;
margin: 0 3%;
`;

const UserBox = styled.div`
display:flex;
width:100%;
align-items:center;
flex-direction:row;
justify-content:center;
border-bottom-style:solid;
border-bottom-width:1px;
margin:0;
border-bottom-color:${({ theme }) => theme.colors.borderBoxColor};
@media(max-width:960px){
  font-size:13px;

}
@media(max-width:560px){
  font-size:13px;

}
`;

UserBox.Col1 = styled.p`
display:flex;
align-items:center;
justify-content:center;
width:30%;
margin:2%;
`;
UserBox.Col2 = styled.p`
display:flex;
align-items:center;
justify-content:center;
width:40%;
margin:2%;
`;
UserBox.Col3 = styled.p`
display:flex;
align-items:center;
justify-content:center;
width:30%;
margin:2%;
`;

export default function MySalesInfo({ orders }) {
  if (orders.length === 0) {
    return (
      <RequestContainer>
        Não existem pedidos nessa data.
      </RequestContainer>
    );
  }
  return (
    <RequestContainer>
      <OrderText>
        {orders.map((order) => (
          <>
            <UserBox>
              <UserBox.Col1>{order.name}</UserBox.Col1>
              <UserBox.Col2>{order.email}</UserBox.Col2>
              <UserBox.Col3>{moment(order.order_created_at).format('DD-MM-YYYY')}</UserBox.Col3>
            </UserBox>
            <MyProductRequestSmall products={order.order_products} />
          </>
        ))}
      </OrderText>
    </RequestContainer>
  );
}
