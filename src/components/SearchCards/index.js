import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;
font-family:Roboto;
`;

const CardInfo = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding: 3%;
width:100%;
font-size:16px;
flex-direction:row;
`;

const CardDescription = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:85%;
flex-direction:column;
@media(max-width:880px){
width:70%;
}
`;

const CardDescriptionTitle = styled.h3`
display:flex;
align-items:center;
justify-content:flex-start;
width:100%;
margin-top:1%;
margin-bottom:1%;
`;

const CardDescriptionDelivery = styled.p`
display:flex;
align-items:center;
justify-content:flex-start;
width:100%;
margin:0;
flex-direction:row;
@media(max-width:880px){
    flex-direction:column;
    align-items:initial;
}
`;
const CardDescriptionDeliveryPrice = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
width:60%;
font-size:14px;
@media(max-width:560px){
    width:100%;
    color:${({ theme }) => theme.colors.baseGray};
}
`;

const CardDescriptionDeliveryTime = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
width:40%;
font-size:14px;
color:${({ theme }) => theme.colors.baseGray};
@media(max-width:560px){
    width:100%;
}
`;

const CardDescriptionButtons = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:15%;
@media(max-width:560px){
width:30%;
}
`;

const FavButton = styled.button`
display:none;
@media(max-width:560px){
display:flex;
align-items:center;
justify-content:center;
border:none;
background-color:${({ theme }) => theme.colors.background};
}
`;

const Button = styled.button`
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
width:35px;
height:35px;
background-color:${({ theme }) => theme.colors.mediumGray};
border:none;
@media(max-width:560px){
display:none;
}

`;
const ImgNormal = styled.div`
display:flex;
width: 100%;
height: 10vw;
padding: 5% 10%;
@media(max-width:560px){
display: flex;
}
`;

const Star = styled.div`
display:none;
@media(max-width:560px){
    display:flex;
    color:${({ theme }) => theme.colors.starYellow};
    margin-left:5%;
}
`;

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

  const myLoader = ({src}) => {
    return `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;
  }

  return (
    <CardWrapper>
      <Image loader={myLoader} src={product.img} alt="" width="100%" height="100%" />
      <CardInfo>
        <CardDescription>
          <CardDescriptionTitle>
            {product.product_name}
          </CardDescriptionTitle>
          <CardDescriptionDelivery>
            <CardDescriptionDeliveryPrice>
              • Taxa de entrega:R$3,99
            </CardDescriptionDeliveryPrice>
            <CardDescriptionDeliveryTime>
              • 25-20 min
              <Star>
                <AiFillStar />
                5.0
              </Star>
            </CardDescriptionDeliveryTime>
          </CardDescriptionDelivery>
        </CardDescription>
        <CardDescriptionButtons>
          <Button>5.0</Button>
          <FavButton>
            <AiFillHeart
              size={24}
              onClick={handleClickFav1}
              style={{ color: checkedFav1 }}
            />
          </FavButton>
        </CardDescriptionButtons>
      </CardInfo>
    </CardWrapper>
  );
}
