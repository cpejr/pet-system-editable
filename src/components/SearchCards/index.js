/* eslint-disable no-nested-ternary */
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import { useEffect, useState } from 'react';
import {
  CardWrapper, CardInfo, CardDescription, CardDescriptionTitle,
  CardDescriptionValues, CardDescriptionDeliveryPrice,
  CardDescriptionProductPrice,
} from './styles';
import StoreIsOpen from '../StoreIsOpen';

export default function SearchCards({ product, store }) {
  const openingTime = store?.opening_time.split(',');
  const closingTime = store?.closing_time.split(',');
  const openingTimeProduct = product.opening_time.split(',');
  const closingTimeProduct = product.closing_time.split(',');
  const [today, setToday] = useState();
  const data = new Date();
  const day = moment(data).format('dddd');
  useEffect(() => {
    if (day) {
      switch (day) {
        case 'Monday':
          setToday(0);
          break;

        case 'Tuesday':
          setToday(1);
          break;

        case 'Wednesday':
          setToday(2);
          break;

        case 'Thursday':
          setToday(3);
          break;

        case 'Friday':
          setToday(4);
          break;

        case 'Saturday':
          setToday(5);
          break;

        default:
          setToday(6);
          break;
      }
    }
  }, [day]);
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;
  if (store ? StoreIsOpen(openingTime[today], closingTime[today]) : StoreIsOpen(openingTimeProduct[today], closingTimeProduct[today])) {
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
                  Frete:
                  {' '}
                  {store ? (store?.shipping_tax === 0 ? 'Gratis' : `R$${store?.shipping_tax}`) : (product?.shipping_tax === 0 ? 'Gratis' : `R$${product?.shipping_tax}`) }
                </CardDescriptionDeliveryPrice>
              </CardDescriptionValues>
            </CardDescription>
          </CardInfo>
        </CardWrapper>
      </Link>
    );
  }
  return null;
}
