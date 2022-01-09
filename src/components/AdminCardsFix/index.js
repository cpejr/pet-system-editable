import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { CgTikcode, CgShoppingCart, CgDollar } from 'react-icons/cg';
import { HiOutlineHome } from 'react-icons/hi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiUserPlus } from 'react-icons/fi';
import { MdBuild } from 'react-icons/md';
import JsonToCSV from '../JsonToCSV';
import api from '../../utils/api';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media(max-width:860px){
    width:100%;
}
`;

Container.Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

const Card = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 2%;
  width: 120px;
  height: 160px;
  border-width: 1px;
  border-radius: 10px;
  background-color:${({ theme }) => theme.colors.background};
  border-color:${({ theme }) => theme.colors.borderBoxColor};
  @media(max-width:860px){
    width:100%;
}
`;

Card.Title = styled.p`
  //margin-top: 25%;
  font-family: Roboto;
`;

export default function Cards() {
  const [storeData, setStoreData] = useState([]);
  const [storeCSVLoading, setStoreCSVLoading] = useState(false);
  useEffect(async () => {
    setStoreCSVLoading(true);
    const { data } = await api.get('store');
    setStoreData(data);
  }, []);

  return (
    <div>
      <Container>
        <Container.Line>
          <Link href="http://localhost:3000/Admin/PerfilControle">
            <Card>
              <CgTikcode size={50} style={{ color: '#609694' }} />
              <Card.Title>Perfil de Controle</Card.Title>
            </Card>
          </Link>
          <Card>
            <HiOutlineHome size={50} style={{ color: '#609694' }} />
            <JsonToCSV
              data={storeData}
              loading={storeCSVLoading}
              setLoading={setStoreCSVLoading}
            />
          </Card>
          <Link href="http://localhost:3000/Admin/Comissoes">
            <Card>
              <CgDollar size={50} style={{ color: '#609694' }} />
              <Card.Title>Comissões</Card.Title>
            </Card>
          </Link>
        </Container.Line>
        <Container.Line>
          <Link href="http://localhost:3000/Admin">
            <Card>
              <IoMdNotificationsOutline size={50} style={{ color: '#609694' }} />
              <Card.Title>Notificações</Card.Title>
            </Card>
          </Link>
          <Link href="http://localhost:3000/Admin/">
            <Card>
              <CgShoppingCart size={50} style={{ color: '#609694' }} />
              <Card.Title>Vendas</Card.Title>
            </Card>
          </Link>
          <Link href="http://localhost:3000/Admin/SolicitacaoLojas">
            <Card>
              <FiUserPlus size={50} style={{ color: '#609694' }} />
              <Card.Title>Solicitação de Lojas</Card.Title>
            </Card>
          </Link>
        </Container.Line>
        <Container.Line>
          <Link href="http://localhost:3000/Admin/EditarCategorias">
            <Card>
              <MdBuild size={50} style={{ color: '#609694' }} />
              <Card.Title>Editar Categorias</Card.Title>
            </Card>
          </Link>
        </Container.Line>
      </Container>

    </div>
  );
}
