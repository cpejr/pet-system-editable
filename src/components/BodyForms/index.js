import styled from 'styled-components';

export const Body = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

Body.Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    margin: 10px;

    @media screen and (max-width: 560px) {
        display: none !important;
    }
`;

Body.Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;

`;

export const Formulary = styled.div`
  align-items: center;
  justify-content: center;
  width: 560px;
  border: 1px;
  margin: 10px;
  //background-color: yellow;
    @media screen and (max-width: 560px) {
        // completar
    }

`;

export const TopFormulary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  //background-color: red;
`;

export const ItemFormulary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  //background-color:green;
`;

// Div exclusiva para componente IE:
export const IEItemFormulary = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items:left;
`;

export const DividedItemFormulary = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  //background-color: blue; 
`;

export const BottomFormulary = styled.div`
  display: flex;
  justify-content: center;
`;

export const UnderFields = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
