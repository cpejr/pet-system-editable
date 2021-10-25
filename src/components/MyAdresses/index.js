import React, { useEffect, useState } from 'react';
import { notification } from 'antd';
import { BsTrash } from 'react-icons/bs';
import ModalEditAddresses from '../ModalEditAddresses';
import ModalAddAddress from '../ModalAddAddress';
import api from '../../utils/api';
import { useAuth } from '../../contexts/AuthContext';
import {
  ContainerAdresses, BoxAdress, Espaçamento, Geral, ContainerDatas,
  BoxDatas, GarbageIcon, EspaçamentosWrapper,
} from './styles';

export default function MyAdresses() {
  const { user } = useAuth();

  if (!user) {
    return (
      <ContainerDatas>
        <BoxDatas>
          <p>Dados do usuário não encontrados</p>
        </BoxDatas>
      </ContainerDatas>
    );
  }
  const [addresses, setAddresses] = useState('');

  async function loadAddresses() {
    try {
      const response = await api.get(`/addresses/${user.firebase_id}`);
      setAddresses(response.data);
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }
  async function deleteAddress(address_id) {
    try {
      await api.delete(`/address/${address_id}`);
      notification.open({
        message: 'Sucesso!',
        description: 'Endereço deletado com sucesso.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    } catch (error) {
      console.error(error); //eslint-disable-line
      notification.open({
        message: 'Erro!',
        description: 'Tivemos um problema ao apagar o endereço que você deseja!',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    }
    loadAddresses();
  }

  useEffect(() => {
    loadAddresses();
  }, []);
  if (addresses) {
    return (
      <Geral>
        <ContainerAdresses>
          {addresses.map((endereco) => (
            <BoxAdress>
              <EspaçamentosWrapper>
                <Espaçamento>
                  {endereco.street}
                  ,
                  {' '}
                  {endereco.address_num}
                </Espaçamento>
                <Espaçamento>
                  {endereco.complement}
                </Espaçamento>
                <Espaçamento>
                  {endereco.district}
                  ,
                  {' '}
                  {endereco.city}
                  {' '}
                  ,
                  {' '}
                  {endereco.state}
                </Espaçamento>
                <Espaçamento>
                  <p>{endereco.zipcode}</p>
                </Espaçamento>
                <Espaçamento>
                  <ModalEditAddresses address_id={endereco.address_id} />
                </Espaçamento>
              </EspaçamentosWrapper>
              <GarbageIcon onClick={() => {
                deleteAddress(endereco.address_id);
              }}
              >
                <BsTrash />
              </GarbageIcon>
            </BoxAdress>
          ))}
        </ContainerAdresses>
        <ModalAddAddress loadAddresses={loadAddresses} />
      </Geral>
    );
  }

  return (
    <ContainerDatas>
      <BoxDatas>
        <p>Dados do usuário não encontrados</p>
      </BoxDatas>
    </ContainerDatas>
  );
}
