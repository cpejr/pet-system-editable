/* eslint-disable no-nested-ternary */
import Link from 'next/link';
import Image from 'next/image';
import {
  CardWrapper, CardInfo, CardDescription, CardDescriptionTitle,
  CardDescriptionValues, CardDescriptionClosed,
  CardDescriptionProductPrice, CardDescriptionDescription,
} from './styles';

export default function SearchCardsClosed(props) {
  const { product } = props;

  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

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
              <CardDescriptionDescription>
                {product.description}
              </CardDescriptionDescription>
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
