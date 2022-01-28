import styled from 'styled-components';

export const FullRequest = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  padding-bottom: 5%;
`;

FullRequest.Col1 = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5%;
  width: 30%;
  @media (max-width: 560px) {
    display: flex;
    margin-left: 1%;
    margin-right: 1%;
    width: 20%;
  }
`;
FullRequest.Col2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  width: 50%;
  @media (max-width: 560px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
FullRequest.Col2.Row1 = styled.h3`
  display: flex;
  @media (max-width: 560px) {
    font-size: 14px;
    margin: 0;
  }
`;
FullRequest.Col2.Row2 = styled.div`
  margin-bottom: 8%;
  color: #aaabb0;
  @media (max-width: 1000px) {
    margin-bottom: 2%;
    font-size: 13px;
  }

  @media (max-width: 560px) {
    display: flex;
    flex-direction: column;
    font-size: 13px;
  }
`;
FullRequest.Col2.Row3 = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    display: none;
    @media (max-width: 560px) {
      display: none;
    }
  }
`;
export const Paragraph = styled.p`
  display: flex;
  justify-content:flex-start;
  margin: 0;
`;
FullRequest.Col3 = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  @media (max-width: 1000px) {
    width: 30%;
  }
  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
  }
`;

export const Submit = styled.button`
  height: 40px;
  width: 50%;
  font-family: Roboto;
  font-size: 100%;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.mediumGreen};
  color: white;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 80%;
    height: 30px;
    border-radius: 20px;
  }
  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 80%;
    height: 30px;
    border-radius: 20px;
  }
`;

export const ImgLittle = styled.div`
  display: none;
  @media (max-width: 560px) {
    display: flex;
  }
`;
export const ImgNormal = styled.div`
  display: flex;
  @media (max-width: 560px) {
    display: none;
  }
`;
