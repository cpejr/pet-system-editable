import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeaderAdmin from '../../../src/components/HeaderAdmin';
import AdminCardsFix from '../../../src/components/AdminCardsFix';
import { FaRegUserCircle } from 'react-icons/fa';
import WindowDividerAdmin from '../../../src/components/WindowDividerAdmin';
import api from '../../../src/utils/api';
import axios from 'axios';

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

export default function Admin ({}) {

  const [stores, setStores] = useState([]);

  async function updateStoreStatus() {
    
  }

  async function getWaitingStores() {
    try {
      const response = await api.get('/store');
      setStores([...response.data].filter(store => store.status === false));
    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");
    }
  }

  useEffect(() => {
    getWaitingStores()
  }, [])

  return (
      <div>
          <HeaderAdmin />
          <Container>
            <Container.Col1>
              <Container.Col1.Row1>
                <FaRegUserCircle size={80} style={{ color: '#609694' }} />
              </Container.Col1.Row1>
              <AdminCardsFix />
            </Container.Col1>
            <WindowDividerAdmin />
            <Container.Col2>
              <h4>Lojas em espera:</h4>
              {stores.map((store) => {
                return(
                  <h4>{store.company_name}</h4>
                )
              })}
              
            </Container.Col2>
          </Container>    
           
      </div>

  );
}