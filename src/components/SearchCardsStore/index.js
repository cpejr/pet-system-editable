import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;
padding: 0.5%;
margin: 0.5%;
font-family:Roboto;
`;

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;
border: 1px solid black;
font-family:Roboto;
`;

const CardInfo = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
padding: 3%;
width:100%;
font-size:16px;
flex-direction:row;
`;

const CardDescription = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 50%;
flex-direction:column;
`;

const CardDescriptionTitle = styled.h3`
display:flex;
align-items:center;
justify-content:flex-start;
width:100%;
margin-top:1%;
margin-bottom:1%;
`;

const CardDescriptionValues = styled.p`
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

const CardButtons = styled.div`
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

const Star = styled.div`
display:none;
@media(max-width:560px){
    display:flex;
    color:${({ theme }) => theme.colors.starYellow};
    margin-left:5%;
}
`;

export default function SearchCards(props) {
  const { store } = props;
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
              •Valor:{'200'}
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
    </Wrapper>
  );
}
