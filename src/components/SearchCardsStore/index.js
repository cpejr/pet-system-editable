import React from 'react';
import Image from 'next/image';
import {
  Wrapper, CardWrapper, CardInfo, CardDescription, CardDescriptionTitle,
  CardDescriptionValues, CardDescriptionDeliveryPrice,
} from './styles';

export default function SearchCards(props) {
  const { store } = props;

  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

  return (
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
          </CardDescription>
        </CardInfo>
      </CardWrapper>
    </Wrapper>
  );
}
