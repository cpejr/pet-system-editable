import React, { useEffect, useState } from 'react';
import { notification } from 'antd';
import ModalEditAddresses from '../ModalEditAddresses';
import ModalAddAddress from '../ModalAddAddress';
import ModalDeleteAddress from '../ModalDeleteAddress';
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
              <ModalDeleteAddress address_id={endereco.address_id} loadAddresses={loadAddresses}/>
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
