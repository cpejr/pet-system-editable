import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MyProductRequestSmall from '../MyProductRequestSmall';

const RequestContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:70%;
height:100%;
border-style:solid;
border-width:1px;   
border-color:${({ theme }) => theme.colors.borderBoxColor};
@media(max-width:560px){
    width:90%;
    }
`;

const UserBox = styled.li`
display:flex;
width:100%;
align-items:center;
flex-direction:row;
justify-content:center;
border-bottom-style:solid;
border-bottom-width:1px;
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
`;
UserBox.Col2 = styled.p`
display:flex;
align-items:center;
justify-content:center;
width:40%;
`;
UserBox.Col3 = styled.p`
display:flex;
align-items:center;
justify-content:center;
width:30%;
`;

export default function MySalesInfo({ orders }) {
  console.log(orders);
  
  if( orders.length === 0) {
    return(
     <RequestContainer>
         Não existem pedidos nessa data.
     </RequestContainer>
    );
  } else {
    return (
      <RequestContainer>
        <ul className='list-orders'>
          {orders.map(order => {
            <UserBox key={order.order_id}> 
              <UserBox.col1>{order.name}</UserBox.col1>
              <UserBox.col2>{order.email}</UserBox.col2>
              <UserBox.col3>{order.created_at}</UserBox.col3>
            </UserBox>
          })}
        </ul>
      </RequestContainer>
    );
  }
}