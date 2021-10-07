import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';
import {
  CardWrapper, CardInfo, CardDescription, CardDescriptionTitle,
  CardDescriptionValues, CardDescriptionDeliveryPrice, CardButtons,
  FavButton, Button, Star,
} from './styles';

export default function SearchCards(props) {
  const { product } = props;
  const [checkedFav1, setCheckedFav1] = useState('#C4C4C4');
  const handleClickFav1 = () => {
    if (checkedFav1 === '#C4C4C4') {
      setCheckedFav1('#F6C8CA');
    } else {
      setCheckedFav1('#C4C4C4');
    }
  };

  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

  return (
    <Link href={`/Product/${product.product_id}`}>
      <CardWrapper>
        <Image loader={myLoader} src={product.img} alt="" width="100%" height="100%" />
        <CardInfo>
          <CardDescription>
            <CardDescriptionTitle>
              {product.product_name}
            </CardDescriptionTitle>
            <CardDescriptionValues>
              <CardDescriptionDeliveryPrice>
                •Valor:
                {product.price}
              </CardDescriptionDeliveryPrice>
              <Star>
                <AiFillStar />
                5.0
              </Star>
            </CardDescriptionValues>
          </CardDescription>
          <CardButtons>
            <Button>5.0</Button>
            <FavButton>
              <AiFillHeart
                size={24}
                onClick={handleClickFav1}
                style={{ color: checkedFav1 }}
              />
            </FavButton>
          </CardButtons>
        </CardInfo>
      </CardWrapper>
    </Link>
  );
}
