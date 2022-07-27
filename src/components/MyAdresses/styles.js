import styled from 'styled-components';

export const ContainerAdresses = styled.div`
  display: flex;
  flex-direction: column;
  font: 1rem Quicksand;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1075px) {
    flex-direction: column;
    padding-left: 5%;
  }
`;

export const BoxAdress = styled.div`
  display: flex;
  width: 30%;
  background-color: #609694;
  line-height: 100%;
  border-width: 1px;
  margin-top: 0%;
  margin-bottom: 2%;
  padding: 1%;


  @media (max-width: 1050px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 560px) {
    width: 80%;
    margin-bottom: 2%;
  }
`;

export const Espaçamento = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  font-family: Quicksand;
  width: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
  line-height: 1.1;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

Espaçamento.Col1 = styled.h3`
  display: flex;
  width: 30%;
  @media (max-width: 860px) {
    width: 100%;
    font-size: 16px;
  }
`;

export const Geral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerDatas = styled.div`
  display: flex;
  width: 100%;
  min-height: 65vh;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 5%;

  @media screen and (max-height: 1024px) {
    height: 65vh;
}

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const ProductNotFound = styled.div`
  display: flex;
  font: 2.3rem Roboto;
  flex-direction: column;
  width: 45%;
  align-items: center;
  justify-content: center;
  padding: 5px;
  line-height: 100%;
  @media (max-width: 560px) {
    font-size: 1.2rem;
  }
  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;
export const ProductNotFoundImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:5%;
  @media (max-width: 850px) {
    width:300px;
    height: 316.71px;
  }
  @media (max-width: 770px) {
    width:240px;
    height: 253.37px;
  }
  @media (max-width: 560px) {
    width:200px;
    height: 211.14px;
  }
  @media (max-width: 320px) {
    width:150px;
    height: 158.35px;
  }
`;
export const GarbageIcon = styled.button`
  display: flex;
  justify-content: flex-end;
  color: white;
  width: fit-content;
  font-size: 1.5rem;
  height: fit-content;
  background-color: transparent;
  border: none;
`;
export const EspaçamentosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
