import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
MainContainer.Data = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10%;
  justify-content: center;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Divider = styled.hr`
  height: 500px;
  @media screen and (max-width: 1200px) {
    display: none !important;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Order = styled.div`
  width: 50%;
`;

export const InputField = styled.input`
  display: flex;
  align-items: center;
  justify-content: initial;
  width: 100%;
  height: 30px;
  font-family: Roboto;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.baseGray};
  background: #f2f2f2;
  @media (max-width: 1190px) {
    justify-content: center;
  }
`;
InputField.Line = styled.div`
  display: flex;
  font-family: Roboto;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;
InputField.LineField = styled.input`
  width: 100px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.baseGray};
  background: #f2f2f2;
`;
InputField.InsideLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
InputField.InsideLineBrand = styled.div`
  width: 68px;
  height: 30px;
  margin-top: 25px;
`;

export const InputName = styled.div`
  display: flex;
  align-items: center;
  justify-content: initial;
  font-family: Quicksand;
  margin-left: auto;
  margin-right: 10px;

  @media (max-width: 1190px) {
    justify-content: center;
  }
`;
InputName.Inp2 = styled.div`
  width: 100%;
  font-family: Quicksand;
`;

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 350px;
  margin: 10px;
  @media screen and (max-width: 1200px) {
  }
`;

export const FieldSpace = styled.div`
  width: 20px;
`;

export const Button = styled.button`
  display: flex;
  background-color: #609694;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.baseGray};
  color: #ffffff;
  cursor: pointer;
  height: 3em;
  width: 80%;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const Subtitle = styled.div`
  display: flex;
  width: 80%;
  font-size: 24px;
`;
export const Qnt = styled.div`
  width: 10%;
`;
export const Product = styled.div`
  width: 70%;
`;
Product.Subtotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 70%;
`;

export const Price = styled.div`
  width: 20%;
`;

export const Subtotal = styled.div`
  font-size: 20px;
`;

export const Data = styled.div`
  font-size: 20px;
`;

export const Space = styled.div`
  width: 100%;
  height: 10%;
`;
