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
import { useCart } from '../../CardContext/CardContext';

export default function CarrinhoCard({
  product, subTotal, setSubTotal, setAtt, att,
}) {
  const cart = useCart();
  function remove(id) {
    cart.removeFromCart(id);
  }
  const [quantity, setQuantity] = useState(product.amount);

  const body = {
    product_id: product.product_id,
    amount: quantity,
    final_price: (parseFloat((quantity * product.price).toFixed(2))),
  };
  const updateQuantity = () => {
    try {
      api.put('/CartProducts', body);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updateQuantity();
  }, [quantity]);

  async function handleDelete(product_id) {
    try {
      await api.delete(`/CartProducts/${product_id}`);
      setAtt(!att);
      notification.open({
        message: 'Sucesso!',
        description: 'Produto deletado do carrinho com sucesso.',
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
          'Tivemos um problema ao apagar o produto que você deseja!',
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
    setSubTotal(parseFloat((subTotal + product.price).toFixed(2)));
  }
  function handleMinus() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setSubTotal(parseFloat((subTotal - product.price).toFixed(2)));
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
            remove(product.product_id);
          }}
        />
      </CarrinhoCardIcon>
    </CarrinhoCardWrapper>
  );
}
