import styled from 'styled-components';

export const ContainerCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  font-family: Roboto;
  @media (max-width: 700px) {
    display: none;
  }
`;

ContainerCategory.Col = styled.div`
  flex-direction: column;
  margin: 0 1% 0 1%;
`;

ContainerCategory.submitImg = styled.button`
  border: none;
  flex-direction: column;
  padding: 10%;
  border-radius: 10px;
  margin: 0% 1% 0% 0%;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    box-shadow: 0 16px 40px 0px rgba(112, 144, 176, 0.2);
    transform: scale(1.02);
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

ContainerCategory.CategoryName = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  margin-top: 2%;
  margin-bottom: 2%;
`;

SearchContainer.Col = styled.div`
  display: grid;
  margin: 2%;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  @media (max-width: 560px) {
    width: 100%;
  }
`;

SearchContainer.Col1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  min-width: 300px;
  flex-direction: column;
  @media (max-width: 880px) {
    width: 40%;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
SearchContainer.Col2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 75%;
  flex-direction: column;
  @media (max-width: 560px) {
    width: 100%;
  }
`;
export const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2%;
`;
TypeContainer.Cols = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  border-width: 1px;
`;
TypeContainer.Cols2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  border-bottom: solid;
  border-width: 1px;
`;
