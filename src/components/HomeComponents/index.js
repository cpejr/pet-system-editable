import styled from 'styled-components';

export const Footer = styled.div`
  height: 100px;
  background-color: ${({ theme }) => theme.colors.mediumGreen};
  margin-top: 5%;
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
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
