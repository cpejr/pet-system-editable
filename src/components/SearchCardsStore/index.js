import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Wrapper, CardWrapper, CardInfo, CardDescription, CardDescriptionTitle,
  CardDescriptionValues, CardDescriptionDeliveryPrice, CardDescriptionTime,
} from './styles';
import StoreIsOpen from '../StoreIsOpen';

export default function SearchCardsStore({ store }) {
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

  const openingTime = store.opening_time.split(',');
  const closingTime = store.closing_time.split(',');
  const situation = store.working_days.split(',');
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
  if (StoreIsOpen(store.opening_time, store.closing_time) && situation[today] === 'Aberto') {
    return (
      <Link href={`/Store/${store.firebase_id_store}`}>
        <Wrapper>
          <CardWrapper>
            <Image loader={myLoader} src={store.logo_img} alt="" width="100%" height="100%" />
            <CardInfo>
              <CardDescription>
                <CardDescriptionTitle>
                  {store.company_name}
                </CardDescriptionTitle>
                <CardDescriptionValues>
                  <CardDescriptionDeliveryPrice>
                    Taxa de entrega:
                    R$
                    {' '}
                    {store.shipping_tax}
                  </CardDescriptionDeliveryPrice>
                </CardDescriptionValues>
                <CardDescriptionTime>
                  {openingTime[today]}
                  {' - '}
                  {closingTime[today]}
                </CardDescriptionTime>
              </CardDescription>
            </CardInfo>
          </CardWrapper>
        </Wrapper>
      </Link>
    );
  }
  return null;
}
