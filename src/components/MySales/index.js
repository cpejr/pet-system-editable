import { applySession } from 'next-iron-session';
import React from 'react';
import styled from 'styled-components';
import MyProductRequestSmall from '../MyProductRequestSmall';
import MySalesMonth from '../MySalesMonth';
import { toast } from 'react-toastify';

const DividerContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
@media(max-width:960px){
  flex-direction:column;
}
@media(max-width:560px){
    width:100%;
    flex-direction:column;
    }
`;

DividerContainer.Col1 = styled.div`
width:10%;

`;
DividerContainer.Col2 = styled.div`
width:30%;
@media(max-width:960px){
    width:70%;
    }
@media(max-width:560px){
    width:90%;
    }
`;
DividerContainer.Col3 = styled.div`
width:60%;
@media(max-width:960px){
    width:100%;
    }
@media(max-width:560px){
    width:100%;
    }
`;

const BodyContainer = styled.div`
display:flex;
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

toast.configure();

export default function MySellerRequest() {
  const [orders, setOrders] = useStated([]);
  const [value, setValue] = useState(new Date());
// async function getOrders() {
//     try {
  
//       const response = await api.get('/ordersByStore', {
//         params: {
//           month: moment(value).format('M'),
//           year: moment(value).format('Y'),
//         },
//       });
//       console.log(response.data);
//       setOrders(response.data);
//     } catch(error) {
//       toast('Erro ao obter pedidos.', { position: toast.POSITION.BOTTOM_RIGHT });
//     }
//   }
  return (
    <div>
      <DividerContainer>
        <DividerContainer.Col1 />
        <DividerContainer.Col2>
          <MySalesMonth />
        </DividerContainer.Col2>

        <DividerContainer.Col3>
          <BodyContainer>
            <RequestContainer>
              <UserBox>
                <UserBox.Col1>Carla Almeida</UserBox.Col1>
                <UserBox.Col2>carlinha@hotmail.com</UserBox.Col2>
                <UserBox.Col3>30/01/2021</UserBox.Col3>
              </UserBox>
              <MyProductRequestSmall />
            </RequestContainer>
          </BodyContainer>

        </DividerContainer.Col3>
      </DividerContainer>
    </div>
  );
}
