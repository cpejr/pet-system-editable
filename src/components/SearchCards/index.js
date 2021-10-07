import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import api from '../../utils/api';
import {
  CardWrapper, CardInfo, CardDescription, CardDescriptionTitle,
  CardDescriptionValues, CardDescriptionDeliveryPrice,
  CardDescriptionProductPrice,
} from './styles';

export default function SearchCards(props) {
  const { product } = props;
  const [store, setStore] = useState([]);
  useEffect(() => {
    api.get(`store/${product.firebase_id_store}`).then((res) => {
      setStore(res.data);
    });
  }, []);

  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

  return (
    <Link href={`/Product/${product.product_id}`}>
      <CardWrapper>
        <Image loader={myLoader} src={product.img} alt="" width="200" height="200" />
        <CardInfo>
          <CardDescription>
            <CardDescriptionTitle>
              {product.product_name}
            </CardDescriptionTitle>
            <CardDescriptionValues>
              <CardDescriptionProductPrice>
                R$
                {' '}
                {product.price}
              </CardDescriptionProductPrice>
              <CardDescriptionDeliveryPrice>
                Entrega:
                {' '}
                R$
                {' '}
                {store.shipping_tax}
              </CardDescriptionDeliveryPrice>
            </CardDescriptionValues>
          </CardDescription>
        </CardInfo>
      </CardWrapper>
    </Link>
  );
}
