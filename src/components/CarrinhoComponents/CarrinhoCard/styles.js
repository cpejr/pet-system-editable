import styled from 'styled-components';

export const CarrinhoCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65vw;
  margin-bottom: 1em;
  margin-left: 0.3em;
  border: 1px solid #f2f2f2;     
  box-shadow: 0px 1px 4px rgb(0 0 0 / 7%);
  border-radius: 4px;
  height: 100px;
  padding: 5px 5px 5px 50px;

  @media screen and (max-width: 600px) {
    padding: 2px;
    width: 100%;
  }
`;

export const CarrinhoCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;

export const CarrinhoCardInfoBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const CarrinhoCardText = styled.p`
  font-family: Roboto;
  font-size: 1.1em;
  text-align: center;
  margin: 0;
  @media screen and (max-width: 900px) {
    font-size: 1em;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.9em;
  }
`;
export const CarrinhoCardInfoQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 55px;
`;

export const CarrinhoCardIcon = styled.div`
  display: flex;
  font-size: x-large;
  justify-content: flex-start;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 660px) {
    font-size: large;
}

  @media (max-width: 490px) {
    font-size: medium;
  }
`;
