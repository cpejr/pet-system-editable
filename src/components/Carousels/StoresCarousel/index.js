import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
// import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1%;
`;

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;
font-family:Roboto;
background-color: white;
border-radius: 10px;
box-shadow: 0 4px 2px -2px gray;
cursor: pointer;
`;
const ContainerRow = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
width:100%;
flex-direction:row;
margin-bottom:2%;
`;
ContainerRow.Cols = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:30%;
flex-direction:column;
`;

const CardDescription = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:290px;
font-size:14px;
flex-direction:row;
margin-bottom: 10%;
margin-top: 10%;
`;

CardDescription.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:85%;
flex-direction:column;
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
`;
CardDescription.Col1.Row2.Delivery = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
width:55%;
font-size:12px;
`;

CardDescription.Col1.Row2.Time = styled.div`
display:flex;
align-items:center;
justify-content:flex-start;
width:45%;
font-size:12px;
color:${({ theme }) => theme.colors.baseGray};
`;

CardDescription.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:15%;
`;

const Button = styled.button`
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
width:35px;
height:35px;
background-color:${({ theme }) => theme.colors.mediumRed};
font-family:Roboto;
color:white;
border:none;
`;

const ImgNormal = styled.div`
display:flex;
width: 300px;
height: 320px;
border-top-left-radius:10px;
border-top-right-radius:10px;
`;

export default function StoresCarousel(props) {
  const { stores } = props;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 4,
    },
    midDesktop: {
      breakpoint: { max: 1500, min: 1025 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 601 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite
    >
      {stores?.length > 0 && stores.map((store) => (
        <Item key={store.store_id}>
          <div>
            <Container>
              <ContainerRow>
                <ContainerRow.Cols>
                  <ImgNormal>
                    <img src="/images/pet.jpg" alt="" width="300" height="320" />
                  </ImgNormal>
                  <CardDescription>
                    <CardDescription.Col1>
                      <CardDescription.Col1.Row1>
                        {store.company_name}
                      </CardDescription.Col1.Row1>
                      <CardDescription.Col1.Row2>
                        <CardDescription.Col1.Row2.Delivery>
                          • Taxa de entrega:R$3,99
                        </CardDescription.Col1.Row2.Delivery>
                        <CardDescription.Col1.Row2.Time>
                          • 25-20 min
                        </CardDescription.Col1.Row2.Time>
                      </CardDescription.Col1.Row2>
                    </CardDescription.Col1>
                    <CardDescription.Col2>
                      <Button>{store.evaluation}</Button>
                    </CardDescription.Col2>
                  </CardDescription>
                </ContainerRow.Cols>
              </ContainerRow>
            </Container>
          </div>
        </Item>
      ))}

    </Carousel>

  );
}
