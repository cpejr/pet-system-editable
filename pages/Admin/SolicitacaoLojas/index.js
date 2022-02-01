import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import AdminCardsFix from '../../../src/components/AdminCardsFix';
import WindowDividerAdmin from '../../../src/components/WindowDividerAdmin';
import api from '../../../src/utils/api';
import ModalAdmin from '../../../src/components/ModalAdmin';
import withAuthAdmin from '../../../src/components/WithAuth/WithAuthAdmin';

const Container = styled.div` 
display:flex;
align-items:center;
justify-content:center;
margin-top: 10px;
margin-bottom: 10px;
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

const CardsLojas = styled.div`
display:grid;
align-items:center;
justify-content:center;
grid-template-columns:1fr 1fr 1fr 1fr;
gap:15px;
margin-top:32px;
@media(max-width: 910px){
  grid-template-columns:1fr 1fr;
}
`;

const Content = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color:white;
  padding:10px 0 0;
  border-radius:5px;
`;

const CardTitle = styled.div`
  font-family:Roboto;
  display:flex;
  height:100%;
  text-align:center;
  color:white;
  justify-content:center;
  background-color:${({ theme }) => theme.colors.darkGreen};
  border-radius:0 0 5px 5px;
  width:130px;
`;

const Title = styled.div`
font-size:30px;
wieght:bold;
font-family:Roboto;
`;

const Img = styled.div`
padding:10px 15px 10px;
`;

const Admin = ({ }) => {
  const [stores, setStores] = useState([]);
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

  async function getWaitingStores() {
    try {
      const response = await api.get('store');
      setStores([...response.data].filter((store) => store.status === false));
    } catch (error) {
      console.warn(error);
      alert('Algo deu errado');
    }
  }

  useEffect(() => {
    getWaitingStores();
  }, []);

  return (
    <div>
      <Container>
        <Container.Col1>
          <Container.Col1.Row1>
            <FaRegUserCircle size={80} style={{ color: '#609694' }} />
          </Container.Col1.Row1>
          <AdminCardsFix />
        </Container.Col1>
        <WindowDividerAdmin />
        <Container.Col2>
          <Title>Lojas em espera:</Title>
          <CardsLojas>
            {stores.map((store) => (
              <>
                <Content>
                  <ModalAdmin store={store} stores={stores} setStores={setStores} />
                  <Img>
                    <Image loader={myLoader} src={store.logo_img} alt="" width="100" height="100" />
                  </Img>
                  <CardTitle>{store.company_name}</CardTitle>
                </Content>
              </>
            ))}
          </CardsLojas>
        </Container.Col2>
      </Container>
    </div>

  );
};
export default withAuthAdmin(Admin);
