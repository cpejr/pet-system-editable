import styled from 'styled-components';

export const CarrinhoCardText = styled.p`
  display: flex;
  font-family: Roboto;
  font-size: 2em;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 16px;
  align-items:center;
  @media screen and (max-width: 900px) {
    font-size: 1em;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.6em;
  }
`;

export const CarrinhoCardInfoQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: Roboto;
  flex-direction: column;
  margin-top: 163px;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;
  }
`;

ProductContainer.Col1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin: 0;
  margin-right: 131px;
`;

ProductContainer.Col2 = styled.div`
  display: flex;
  align-items: initial;
  justify-content: center;
  width: 40%;
  flex-direction: column;
  @media (max-width: 880px) {
    width: 70%;
  }
`;

export const ProductTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
  text-align: justify;
  text-justify: inter-word;
  font-family: Roboto;
  font-style: normal;
  font-size: 45px;
  line-height: 53px;
  margin-bottom: 33px;
  @media (max-width: 880px) {
    margin-top: 5%;
  }
`;

export const Price = styled.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 53px;
  margin-bottom: 66px;
`;

export const Delivery = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 42px;
  margin-bottom: 15px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  margin-top: 10%;
  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

ButtonsContainer.Col = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  flex-direction: column;
  @media (max-width: 880px) {
    width: 100%;
    margin-bottom: 2%;
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 80%;
  font-family: Roboto;
  font-size: 100%;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.mediumGreen};
  color: white;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`;

export const AddCarButton = styled.button`
  height: 50px;
  width: 80%;
  font-family: Roboto;
  font-size: 100%;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.mediumGreen};
  border: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.mediumGreen};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`;

export const Store = styled.div`
  width: 100%;
  margin-bottom: 33px;
`;

Store.Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
`;

Store.Text = styled.button`
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.mediumGray};
  border: none;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
  @media (max-width: 880px) {
    width: 70%;
    margin-bottom: 15%;
  }
`;
Description.Container = styled.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 64px;
`;
Description.Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 42px;
  margin-top: 64px;
`;

Description.Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  text-align: justify;
  text-justify: inter-word;
  color: ${({ theme }) => theme.colors.mediumGray};
`;

export const BackPage = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    flex-direction: row;
    margin-top: 5%;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  color: black;
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  margin: 0;
  font-size: 24px;
  font-family: Roboto;
  font-weight: bold;
  padding: 0;
`;
