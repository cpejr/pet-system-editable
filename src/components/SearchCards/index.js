/* eslint-disable no-nested-ternary */
import Link from 'next/link';
import Image from 'next/image';
import {
  CardWrapper, CardInfo, CardDescription, CardDescriptionTitle,
  CardDescriptionValues, CardDescriptionDeliveryPrice,
  CardDescriptionProductPrice,
} from './styles';
import StoreIsOpen from '../StoreIsOpen';

export default function SearchCards({ product, store }) {
  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;
  if (store ? StoreIsOpen(store.opening_time, store.closing_time) : StoreIsOpen(product.opening_time, product.closing_time)) {
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
