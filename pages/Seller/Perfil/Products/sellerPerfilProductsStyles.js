import styled from 'styled-components';

export const SubTitle = styled.div`
  display: flex;
  align-items: initial;
  margin-left: 8%;
  font-family: Roboto;
  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
`;

export const Section = styled.button`
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 1%;
  margin-left: 1%;
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  font-family: Roboto;
  outline: none;
`;

Section.Select = styled.button`
  display: flex;
  font-size: 16px;
  align-items: center;
  margin-left: 1%;
  margin-right: 1%;
  border: none;
  background-color: ${({ theme }) => theme.colors.hoverBackground};
  border-radius: 5%;
  outline: none;
  font-family: Roboto;
`;

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  margin-top: 4%;
  min-height: 65vh;

  @media screen and (min-height: 1024px) {
    min-height: 83.3vh;
  }
`;

ProductContainer.Col1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media screen and (min-height: 1024px) {
    min-height: 83.3vh;
  }

  @media (max-width: 1065px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40%;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

ProductContainer.Col2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 560px) {
    width: 100%;
    justify-content: center;
  }
`;

export const MarketContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1010px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

MarketContainer.Col1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62%;
  @media (max-width: 1010px) {
    width: 100%;
  }

  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 100%;
  }
`;

MarketContainer.Col2 = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 38%;
  @media (max-width: 1010px) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-bottom: 2%;
  }
`;

export const TitleMarket = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-family: Roboto;
  font-size: 25px;
`;

export const EditGroup = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  border: 0;
  outline: none;
  margin-left: 2%;
  margin-right: 1%;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`;

export const RemoveGroup = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  border: 0;
  outline: none;

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

Group.Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 5%;
`;

export const Groups = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const Botoes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
`;
