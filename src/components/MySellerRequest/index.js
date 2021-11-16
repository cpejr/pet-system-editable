import { useState, useEffect } from 'react';
import styled from 'styled-components';
import MyProductRequest from '../MyProductRequest';
import api from '../../utils/api';
import MyTotalRequestSeller from '../MyTotalRequestSeller';
import ModalOrderStatusEdit from '../ModalOrderStatusEdit';

const BodyContainer = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
width:100%;
height:100%;
margin-top:2%;
margin-bottom:2%;

`;
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
margin-bottom: 50px;
@media(max-width:560px){
  width:90%;
}
`;

const UserBox = styled.div`
display:flex;
width:100%;
align-items:center;
flex-direction:row;
justify-content:center;
border-bottom-style:solid;
border-bottom-width:1px;
border-bottom-color:${({ theme }) => theme.colors.borderBoxColor};
@media(max-width:560px){
  font-size:13px;
}
`;

const StatusBox = styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:center;
border-bottom-style:solid;
border-bottom-width:1px;
border-bottom-color:${({ theme }) => theme.colors.borderBoxColor};
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
export default function MySellerRequest() {
  const [orders, setOrders] = useState([]);
  const [att, setAtt] = useState(true);

  useEffect(() => {
    api.get('ordersByStore').then((res) => {
      setOrders(res.data);
    });
  }, [att]);

  function dataFormatada(bdate) {
    const data = new Date(bdate);
    const minutos = data.getMinutes().toString();
    const minutosF = minutos.length === 1 ? `0${minutos}` : minutos;
    const horas = data.getHours().toString();
    const horasF = horas.length === 1 ? `0${horas}` : horas;
    const dia = data.getDate().toString();
    const diaF = dia.length === 1 ? `0${dia}` : dia;
    const mes = (data.getMonth() + 1).toString();
    const mesF = mes.length === 1 ? `0${mes}` : mes;
    const anoF = data.getFullYear();
    return `${diaF}/${mesF}/${anoF}   ${horasF}:${minutosF}`;
  }

  return (
    <div>
      <BodyContainer>
        {orders.map((order) => (
          <RequestContainer>
            <UserBox>
              <UserBox.Col1>
                Cliente:
                {' '}
                {order.name}
              </UserBox.Col1>
              <UserBox.Col2>{order.email}</UserBox.Col2>
              <UserBox.Col3>{dataFormatada(order.created_at)}</UserBox.Col3>
            </UserBox>
            <StatusBox>
              Status:
              {' '}
              {order.status}
              {'  '}
              <ModalOrderStatusEdit order={order} att={att} setAtt={setAtt} />
            </StatusBox>
            <MyProductRequest order_products={order.order_products} />
            <MyTotalRequestSeller order={order} />

          </RequestContainer>
        ))}
      </BodyContainer>
    </div>
  );
}
