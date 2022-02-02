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

export default function SearchCards({ product, store, address }) {
  const openingTime = store?.opening_time.split(',');
  const closingTime = store?.closing_time.split(',');
  const regionShippingTax = store ? store?.shipping_tax.split(',') : product ? product?.shipping_tax.split(',') : null;
  const [shippingValue, setShippingValue] = useState();
  const [shippingMinValue, setShippingMinValue] = useState(0);
  const [shippingMaxValue, setShippingMaxValue] = useState(0);
  const openingTimeProduct = product.opening_time.split(',');
  const closingTimeProduct = product.closing_time.split(',');
  const [today, setToday] = useState();
  const data = new Date();
  const day = moment(data).format('dddd');

  useEffect(() => {
    if (regionShippingTax && address !== 'Usuário não está logado') {
      switch (address.region) {
        case 'Barreiro':
          setShippingValue(regionShippingTax[0]);
          break;

        case 'Centro Sul':
          setShippingValue(regionShippingTax[1]);
          break;

        case 'Leste':
          setShippingValue(regionShippingTax[2]);
          break;

        case 'Nordeste':
          setShippingValue(regionShippingTax[3]);
          break;

        case 'Noroeste':
          setShippingValue(regionShippingTax[4]);
          break;

        case 'Norte':
          setShippingValue(regionShippingTax[5]);
          break;

        case 'Oeste':
          setShippingValue(regionShippingTax[6]);
          break;

        case 'Pampulha':
          setShippingValue(regionShippingTax[7]);
          break;

        default:
          setShippingValue(regionShippingTax[8]); // Venda Nova
          break;
      }
    } else {
      setShippingMinValue(Math.min(...regionShippingTax));
      setShippingMaxValue(Math.max(...regionShippingTax));
    }
  }, [regionShippingTax, address]);

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
                  {shippingValue ? (parseFloat(shippingValue) === 0 ? 'Gratis' : `R$${shippingValue}`) : (shippingMinValue === 0 ? `Gratis ~ R$${shippingMaxValue.toFixed(2)}` : `R$${shippingMinValue.toFixed(2)} ~ R$${shippingMaxValue.toFixed(2)}`) }
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
