import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Wrapper,
  CardWrapper,
  CardInfo,
  CardDescription,
  CardDescriptionTitle,
  CardDescriptionValues,
  CardDescriptionDeliveryPrice,
  CardDescriptionTime,
  CardDescriptionClosed,
} from './styles';
import StoreIsOpen from '../StoreIsOpen';

export default function SearchCardsStoreClosed({ store, address }) {
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

  const openingTime = store.opening_time.split(',');
  const closingTime = store.closing_time.split(',');
  const situation = store.working_days.split(',');
  const regionShippingTax = store ? store?.shipping_tax.split(',') : product ? product?.shipping_tax.split(',') : null;
  const [shippingValue, setShippingValue] = useState();
  const [shippingMinValue, setShippingMinValue] = useState(0);
  const [shippingMaxValue, setShippingMaxValue] = useState(0);
  const [today, setToday] = useState();
  const data = new Date();
  const day = data.getDay();

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
    setToday(day ?? 6);
  }, [day]);

  if ((StoreIsOpen(openingTime[today], closingTime[today]) === false) || situation[today] === 'Fechado') {
    return (
      <Link href={`/Store/${store.firebase_id_store}`}>
        <Wrapper>
          <CardWrapper>
            <Image
              loader={myLoader}
              src={store.logo_img}
              alt=""
              width="100%"
              height="100%"
            />
            <CardInfo>
              <CardDescription>
                <CardDescriptionTitle>
                  {store.company_name}
                </CardDescriptionTitle>
                <CardDescriptionValues>
                  <CardDescriptionDeliveryPrice>
                    Taxa de entrega: R$
                    {' '}
                    {shippingValue ? (parseFloat(shippingValue) === 0 ? 'Gratis' : `R$${shippingValue}`) : (shippingMinValue === 0 ? `Gratis ~ R$${shippingMaxValue.toFixed(2)}` : `R$${shippingMinValue.toFixed(2)} ~ R$${shippingMaxValue.toFixed(2)}`) }
                  </CardDescriptionDeliveryPrice>
                </CardDescriptionValues>
                <CardDescriptionValues>
                  <CardDescriptionTime>
                    <CardDescriptionClosed>
                      ESTABELECIMENTO FECHADO
                    </CardDescriptionClosed>
                  </CardDescriptionTime>
                  <CardDescriptionTime>
                    Funcionamento:
                    {' '}
                    {openingTime[today]}
                    {' - '}
                    {closingTime[today]}
                  </CardDescriptionTime>
                </CardDescriptionValues>
              </CardDescription>
            </CardInfo>
          </CardWrapper>
        </Wrapper>
      </Link>
    );
  }
  return null;
}
