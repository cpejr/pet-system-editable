import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const FullRequest = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:row;
`;

FullRequest.Col1 = styled.div`
display:flex;
align-items:center;
margin-left:5%;
width:30%;
@media(max-width:560px){
    display:flex;
    margin-left:1%;
    margin-right:1%;
    width:20%;
    }
`;
FullRequest.Col2 = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:50%;
@media(max-width:560px){
  font-size:14px;
  line-height:20px;
}

`;
FullRequest.Col2.Row1 = styled.h3`
display:flex;
@media(max-width:560px){
  font-size:14px;
  margin:0;
}

`;
FullRequest.Col2.Row2 = styled.div`
margin-bottom:8%;
color:#AAABB0;
@media(max-width:1000px){
  margin-bottom:2%;
  font-size:13px;
}

@media(max-width:560px){
    display:flex;
    flex-direction:column;
    font-size:13px;
    }
`;
FullRequest.Col2.Row3 = styled.div`
display:flex;
flex-direction:row;
@media(max-width:1000px){
  display:none;
@media(max-width:560px){
    display:none;
    }
}
`;

const Box = styled.button`
border-color:black;
width:30px;
height:30px;
margin-right:1%;
background-color:none;

`;
const Paragraph = styled.p`
display:flex;
margin:0;
align-items:center;
`;
FullRequest.Col3 = styled.div`
display:flex;
align-items:center;
width:20%;
  @media(max-width:1000px){
  width:30%;
  }
  @media(max-width:560px){
      display:flex;
      align-items:center;
      justify-content:center;
    width:30%;
      }
`;

const Submit = styled.button`
    height: 40px;
    width: 50%;
    font-family: Roboto;
    font-size: 100%;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.mediumGreen};
    color: white;
    border: 0;
    border-radius: 5px;
    cursor:pointer;
    outline:none;
    @media(max-width:1000px){
      display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    width:80%;
    height:30px;
    border-radius:20px;
}
    @media(max-width:560px){
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    width:80%;
    height:30px;
    border-radius:20px;
    }
`;

const ImgLittle = styled.div`
display:none;
@media(max-width:560px){
display:flex;
}
`;
const ImgNormal = styled.div`
display:flex;
@media(max-width:560px){
display:none;
}
`;

export default function MyRequest() {
  return (
    <div>

      <FullRequest>
        <FullRequest.Col1>
          <ImgLittle>
            <Image src="/images/pet2Little.png" alt="" width="80" height="80" />
          </ImgLittle>
          <ImgNormal>
            <Image src="/images/pet2.jpg" alt="" width="350" height="188" />
          </ImgNormal>
        </FullRequest.Col1>
        <FullRequest.Col2>
          <FullRequest.Col2.Row1>
            PetShop do Matheus
          </FullRequest.Col2.Row1>
          <FullRequest.Col2.Row2>
            <p1>• 1 item por R$12,98</p1>
            <p1> • 23 de mar, Em preparação</p1>
          </FullRequest.Col2.Row2>
          <FullRequest.Col2.Row3>
            <Box>1</Box>
            <Paragraph>Shampoo Pet Essence 750ml</Paragraph>
          </FullRequest.Col2.Row3>
        </FullRequest.Col2>
        <FullRequest.Col3>
          <Submit>Ver Pedido</Submit>
        </FullRequest.Col3>

      </FullRequest>
    </div>
  );
}
