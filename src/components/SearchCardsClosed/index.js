/* eslint-disable no-nested-ternary */
import Link from 'next/link';
import Image from 'next/image';
import {
  CardWrapper, CardInfo, CardDescription, CardDescriptionTitle,
  CardDescriptionValues, CardDescriptionClosed,
  CardDescriptionProductPrice,
} from './styles';
import StoreIsOpen from '../StoreIsOpen';

export default function SearchCardsClosed({ product }) {
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

  if (StoreIsOpen(product.opening_time, product.closing_time) === false) {
    return (
      <Link href={`/Product/${product.product_id}`}>
        <CardWrapper>
          <Image
            loader={myLoader}
            src={product.img}
            alt=""
            width="200"
            height="200"
          />
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
                <CardDescriptionClosed>
                  ESTABELECIMENTO FECHADO
                </CardDescriptionClosed>
              </CardDescriptionValues>
            </CardDescription>
          </CardInfo>
        </CardWrapper>
      </Link>
    );
  }
  return null;
}
