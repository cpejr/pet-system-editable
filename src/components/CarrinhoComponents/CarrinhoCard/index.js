import React, { useEffect, useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { notification } from 'antd';
import { FaRegMinusSquare, FaRegPlusSquare } from 'react-icons/fa';
import Image from 'next/image';
import api from '../../../utils/api';
import { CarrinhoText } from '..';
import {
  CarrinhoCardWrapper,
  CarrinhoCardInfo,
  CarrinhoCardInfoBottom,
  CarrinhoCardText,
  CarrinhoCardInfoQuantity,
  CarrinhoCardIcon,
} from './styles';

export default function CarrinhoCard(props) {
  const { product } = props;
  const { subTotal } = props;
  const { setSubTotal } = props;
  const [quantity, setQuantity] = useState(product.amount);
  // const [sent, setSent] = useState(true);

  const body = {
    product_id: product.product_id,
    amount: quantity,
    final_price: quantity * product.price,
  };

  const updateQuantity = () => {
    try {
      api.put('/CartProducts', body).then((response) => {
        // setSent(true);
        console.log(body);
        console.log(response);
      });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    setSubTotal(subTotal + product.price * quantity);
  }, []);

  useEffect(() => {
    console.log('Opa');
    updateQuantity();
  }, [quantity]);

  async function handleDelete(product_id) {
    console.log(product_id);
    try {
      await api.delete(`/CartProducts/${product_id}`);
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
        description:
          'Tivemos um problema ao apagar o endereço que você deseja!',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    }
  }
  function handlePlus() {
    setQuantity(quantity + 1);
    setSubTotal(subTotal + product.price);
  }
  function handleMinus() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setSubTotal(subTotal - product.price);
    } else {
      setQuantity(0);
    }
  }
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

  return (
    <CarrinhoCardWrapper>
      <Image
        loader={myLoader}
        src={product.img}
        alt="racao"
        width="95px"
        height="95px"
      />
      <CarrinhoCardInfo>
        <CarrinhoText>{product.product_name}</CarrinhoText>
        <CarrinhoCardInfoBottom>
          <CarrinhoCardText>
            R$
            {product.price}
          </CarrinhoCardText>
          <CarrinhoCardInfoQuantity>
            <FaRegMinusSquare size="18px" onClick={() => handleMinus()} />
            <CarrinhoCardText>{quantity}</CarrinhoCardText>
            <FaRegPlusSquare size="18px" onClick={() => handlePlus()} />
          </CarrinhoCardInfoQuantity>
        </CarrinhoCardInfoBottom>
      </CarrinhoCardInfo>
      <CarrinhoCardIcon>
        <IoTrashOutline
          onClick={() => {
            handleDelete(product.product_id);
          }}
        />
      </CarrinhoCardIcon>
    </CarrinhoCardWrapper>
  );
}
