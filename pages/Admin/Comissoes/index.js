import React from 'react';
import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import HeaderAdmin from '../../../src/components/HeaderAdmin';
// import AdminCards from '../../../src/components/AdminCards';
import AdminCardsFix from '../../../src/components/AdminCardsFix';
import WindowDividerAdmin from '../../../src/components/WindowDividerAdmin';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
@media(max-width:860px){
    flex-direction:column;
}
`;

Container.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:40%;
@media(max-width:860px){
    width:100%;
}
`;
Container.Col1.Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-bottom:5%;
`;

Container.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:60%;
@media(max-width:860px){
    width:100%;
    margin-top:4%;
}
`;

const ContainerModal = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;
`;

const TitleModal = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
font-family:Roboto;
font-size:24px;
margin-bottom:5%;
@media(max-width:860px){
        width:100%;
        font-size:16px;
        margin-bottom:20%;
    } 
`;

export default function Admin() {
  { /**
    const [comission, setComission] = useState('');

    async function handleCommissionChange(event) {
      setComission(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const body = {
      share: comission,
    };

    try {
      if (comission != null) {
        const Validate = await api.put('/api/admin', body);
        console.log(Validate.date);
      } else {
        const Validate = await api.post('/api/admin', body);
        console.log(Validate.date);
      }
    } catch (error) {
      console.log(error);
    }
  }
*/ }

  return (
    <div>
      <HeaderAdmin />
      <Container>
        <Container.Col1>
          <Container.Col1.Row1>
            <FaRegUserCircle size={80} style={{ color: '#609694' }} />
          </Container.Col1.Row1>
          {/**
              <AdminCards />
           */}
          <AdminCardsFix />
        </Container.Col1>
        <WindowDividerAdmin />
        <Container.Col2>
          <ContainerModal>
            <TitleModal>
              Ajustar Comissão
            </TitleModal>
          </ContainerModal>
          <p>
            Trazer as informações do modal do componente anterior!
          </p>
        </Container.Col2>
      </Container>
    </div>
  );
}
