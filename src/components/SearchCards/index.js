import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;
font-family:Roboto;
`;
const ContainerRow = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
width:100%;
flex-direction:row;
margin-bottom:2%;
@media(max-width:880px){
flex-direction:column;
margin:0;
}
`;
ContainerRow.Cols = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:30%;
flex-direction:column;
@media(max-width:880px){
width:100%;
flex-direction:row;
margin-bottom:2%;
}
@media(max-width:560px){
flex-direction:row;
width:100vw;
margin-bottom:2%;
}
`;

const CardDescription = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
font-size:16px;
flex-direction:row;
`;

CardDescription.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:85%;
flex-direction:column;
@media(max-width:880px){
width:70%;
}
`;

CardDescription.Col1.Row1 = styled.h3`
display:flex;
align-items:center;
justify-content:flex-start;
width:100%;
margin-top:1%;
margin-bottom:1%;
`;

CardDescription.Col1.Row2 = styled.p`
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
CardDescription.Col1.Row2.Delivery = styled.div`
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

CardDescription.Col1.Row2.Time = styled.div`
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

CardDescription.Col2 = styled.div`
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
const ImgLittle = styled.div`
display:none;
@media(max-width:560px){
display:flex;
margin-left:5%;
margin-right:5%;
}
`;
const ImgNormal = styled.div`
display:flex;
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

export default function SearchCards() {
  const [checkedFav1, setCheckedFav1] = useState('#C4C4C4');
  const handleClickFav1 = () => {
    if (checkedFav1 === '#C4C4C4') {
      setCheckedFav1('#F6C8CA');
    } else {
      setCheckedFav1('#C4C4C4');
    }
  };
  const [checkedFav2, setCheckedFav2] = useState('#C4C4C4');
  const handleClickFav2 = () => {
    if (checkedFav2 === '#C4C4C4') {
      setCheckedFav2('#F6C8CA');
    } else {
      setCheckedFav2('#C4C4C4');
    }
  };
  const [checkedFav3, setCheckedFav3] = useState('#C4C4C4');
  const handleClickFav3 = () => {
    if (checkedFav3 === '#C4C4C4') {
      setCheckedFav3('#F6C8CA');
    } else {
      setCheckedFav3('#C4C4C4');
    }
  };
  return (
    <div>
      <Container>
        <ContainerRow>
          <ContainerRow.Cols>
            <ImgLittle>
              <Image src="/images/pet2Little.png" alt="" width="80" height="80" />
            </ImgLittle>
            <ImgNormal>
              <Image src="/images/pet2.jpg" alt="" width="350" height="188" />
            </ImgNormal>
            <CardDescription>
              <CardDescription.Col1>
                <CardDescription.Col1.Row1>
                  Pet Shop do Matheus
                </CardDescription.Col1.Row1>
                <CardDescription.Col1.Row2>
                  <CardDescription.Col1.Row2.Delivery>
                    • Taxa de entrega:R$3,99
                  </CardDescription.Col1.Row2.Delivery>
                  <CardDescription.Col1.Row2.Time>
                    • 25-20 min
                    <Star>
                      <AiFillStar />
                      5.0
                    </Star>
                  </CardDescription.Col1.Row2.Time>
                </CardDescription.Col1.Row2>
              </CardDescription.Col1>
              <CardDescription.Col2>
                <Button>5.0</Button>
                <FavButton>
                  <AiFillHeart
                    size={24}
                    onClick={handleClickFav1}
                    style={{ color: checkedFav1 }}
                  />
                </FavButton>
              </CardDescription.Col2>
            </CardDescription>
          </ContainerRow.Cols>
          <ContainerRow.Cols>
            <ImgLittle>
              <Image src="/images/pet3Little.png" alt="" width="80" height="80" />
            </ImgLittle>
            <ImgNormal>
              <Image src="/images/pet3.jpg" alt="" width="350" height="188" />
            </ImgNormal>
            <CardDescription>
              <CardDescription.Col1>
                <CardDescription.Col1.Row1>
                  Pet Shop BH
                </CardDescription.Col1.Row1>
                <CardDescription.Col1.Row2>
                  <CardDescription.Col1.Row2.Delivery>
                    • Taxa de entrega:R$4,99
                  </CardDescription.Col1.Row2.Delivery>
                  <CardDescription.Col1.Row2.Time>
                    • 45-40 min
                    <Star>
                      <AiFillStar />
                      5.0
                    </Star>
                  </CardDescription.Col1.Row2.Time>
                </CardDescription.Col1.Row2>
              </CardDescription.Col1>
              <CardDescription.Col2>
                <Button>5.0</Button>
                <FavButton>
                  <AiFillHeart
                    size={24}
                    onClick={handleClickFav2}
                    style={{ color: checkedFav2 }}
                  />
                </FavButton>
              </CardDescription.Col2>
            </CardDescription>
          </ContainerRow.Cols>
          <ContainerRow.Cols>
            <ImgLittle>
              <Image src="/images/petLittle.png" alt="" width="80" height="80" />
            </ImgLittle>
            <ImgNormal>
              <Image src="/images/pet.jpg" alt="" width="350" height="188" />
            </ImgNormal>
            <CardDescription>
              <CardDescription.Col1>
                <CardDescription.Col1.Row1>
                  Pet Shop Canine
                </CardDescription.Col1.Row1>
                <CardDescription.Col1.Row2>
                  <CardDescription.Col1.Row2.Delivery>
                    • Taxa de entrega:R$6,99
                  </CardDescription.Col1.Row2.Delivery>
                  <CardDescription.Col1.Row2.Time>
                    • 15-10 min
                    <Star>
                      <AiFillStar />
                      5.0
                    </Star>
                  </CardDescription.Col1.Row2.Time>
                </CardDescription.Col1.Row2>
              </CardDescription.Col1>
              <CardDescription.Col2>
                <Button>5.0</Button>
                <FavButton>
                  <AiFillHeart
                    size={24}
                    onClick={handleClickFav3}
                    style={{ color: checkedFav3 }}
                  />
                </FavButton>
              </CardDescription.Col2>
            </CardDescription>
          </ContainerRow.Cols>
        </ContainerRow>

      </Container>

    </div>
  );
}
