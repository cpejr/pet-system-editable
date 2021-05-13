import styled from 'styled-components';

export const Body = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

Body.Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    margin: 10px;
    //background-color: red;

    @media screen and (max-width: 1200px) {
        display: none !important;
    }
`;

Body.Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 50%;
    // background-color: yellow;

    @media screen and (max-width: 900px) {
      width: 75%;
    }
    @media screen and (max-width: 600px) {
      width: 90%;
    }
`;

export const StoreBodyWrapper = styled.div`
    //height: 110vh;
    // height: 1200px;
    //background-color: green;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const StoreBody = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 50%;
    // background-color: yellow;

    @media screen and (max-width: 900px) {
      width: 75%;
    }
    @media screen and (max-width: 600px) {
      width: 90%;
    }
`;

export const Formulary = styled.div`
  align-items: center;
  justify-content: center;
  width: 50%;
  border: 1px;
  margin: 10px;
  // background-color: yellow;    
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const StoreFormulary = styled.div`
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px;
  margin: 10px;
  // background-color: yellow;
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

  @media screen and (max-width: 400px) {
      width: 100%;
      flex-direction: column;
    }
`;

export const BottomFormulary = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const UnderFields = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
