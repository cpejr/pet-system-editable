import Image from 'next/image';
import Link from 'next/link';
import {
  Wrapper, CardWrapper, CardInfo, CardDescription, CardDescriptionTitle,
  CardDescriptionValues, CardDescriptionDeliveryPrice, CardDescriptionTime,
} from './styles';
import StoreIsOpen from '../StoreIsOpen';

export default function SearchCardsStore({ store }) {
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

  if (StoreIsOpen(store.opening_time, store.closing_time)) {
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
                  {store.opening_time}
                  {' - '}
                  {store.closing_time}
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
