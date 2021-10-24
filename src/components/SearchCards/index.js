import Link from 'next/link';
import Image from 'next/image';
import {
  CardWrapper, CardInfo, CardDescription, CardDescriptionTitle,
  CardDescriptionValues, CardDescriptionDeliveryPrice,
  CardDescriptionProductPrice, CardDescriptionDescription,
} from './styles';

export default function SearchCards(props) {
  const { product } = props;

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
              <CardDescriptionDescription>
                {product.description}
              </CardDescriptionDescription>
              <CardDescriptionProductPrice>
                R$
                {' '}
                {product.price}
              </CardDescriptionProductPrice>
              <CardDescriptionDeliveryPrice>
                Frete:
                {' '}
                {`${product?.shipping_tax ? `R$${product?.shipping_tax}` : 'Gratis'}`}
              </CardDescriptionDeliveryPrice>
            </CardDescriptionValues>
          </CardDescription>
        </CardInfo>
      </CardWrapper>
    </Link>
  );
}
