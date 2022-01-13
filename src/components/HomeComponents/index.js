import styled from 'styled-components';

export const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const CardItem = styled.div`
  margin: 1%;
  @media screen and (max-width: 600px) {
    height: 80%;
    width: 80%;
  }
`;

export const CardImage1 = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
background-image: url(/images/Card1.png);
width: 300px;
height: 400px;
border-radius: 10px;
box-shadow: 0 4px 2px -2px gray;
`;

export const CardImage2 = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
background-image: url(/images/Card2.png);
width: 300px;
height: 400px;
border-radius: 10px;
box-shadow: 0 4px 2px -2px gray;
`;

export const CardImage3 = styled.div`
display: flex;
align-items: flex-end;
justify-content: center;
background-image: url(/images/Card3.png);
width: 300px;
height: 400px;
border-radius: 10px;
box-shadow: 0 4px 2px -2px gray;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;
  margin-top: 2%;
  margin-bottom: 4%;
`;

export const Mosaic = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-family: Roboto;
  margin-left: 1%;
  margin-bottom: 4%;
  font-size: 2em;
  @media screen and (max-width: 900px) {
    font-size: 1.5em;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.2em;
  }
`;

export const Divider = styled.hr`
  height: 1px;
  color: lightgray;
  background-color: lightgray;
  width: 80%;
`;
export const Button = styled.button`
    display:flex;
    height: 35px;
    width: 130px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 300;
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: white;
    border: 0;
    border-radius: 5px;
    align-items: center;
    text-align: center;
    transform: translate(0%,-50%);
    justify-content: center;
    text-align: center;
    cursor: pointer;
`;
