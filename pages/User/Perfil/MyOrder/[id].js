import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import MyIndividualOrder from '../../../../src/components/MyIndividualOrder';
import api from '../../../../src/utils/api';
import withAuthUser from '../../../../src/components/WithAuth/WithAuthUser';

const Title = styled.h1`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 5%;
  font-family: Roboto;
  font-size: 30px;
  font-weight: 500;
  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2%;
  }
`;

const Section = styled.button`
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  margin-left: 1%;
  margin-right: 1%;
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  font-family: Roboto;
  outline: none;
`;

Section.Select = styled.button`
  flex-direction: row;
  font-size: 16px;
  align-items: center;
  margin-left: 1%;
  margin-right: 1%;
  border: none;
  background-color: ${({ theme }) => theme.colors.hoverBackground};
  border-radius: 5%;
  outline: none;
  font-family: Roboto;
`;

toast.configure();

const Perfil = () => {
  const [order, setOrder] = useState('');
  const [price, setPrice] = useState(0);

  async function getOrder() {
    let sum = 0;
    try {
      const id = '6f792129-6fad-4801-a37b-c037bc3ed59f';
      const response = await api.get(`order/${id}`);
      console.log(response.data);
      setOrder(response.data);
      response.data.cart_product.forEach((product) => {
        console.log(product.final_price);
        // eslint-disable-next-line operator-assignment
        sum = sum + product.final_price;
        console.log(sum);
      }).then(() => {
        setPrice(sum);
      });
    } catch (error) {
      toast('Erro ao obter pedido', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  }

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      <Title>Meu pedido</Title>
      <MyIndividualOrder order={order} price={price} />
    </div>
  );
};

export default withAuthUser(Perfil);
