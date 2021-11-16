import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0.5%;
  margin: 0.5%;
  font-family: Roboto;
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1vw;
  height: auto;
  font-family: Roboto;
  background-color: transparent;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  cursor: pointer;
  text-align: justify;
  text-justify: inter-word;
  &:hover {
    box-shadow: 0 16px 40px 0px rgba(112, 144, 176, 0.2);
    transform: scale(1.02);
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 3%;
  font-size: 16px;
  width: 100%;
  flex-direction: row;
  border-left: 1px solid #f2f2f2;
  margin-left: 5%;
`;

export const CardDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  flex-direction: column;
`;

export const CardDescriptionTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const CardDescriptionTime = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const CardDescriptionValues = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  width: 100%;
  margin: 0;
  @media (max-width: 880px) {
    flex-direction: column;
    align-items: initial;
  }
`;
export const CardDescriptionDeliveryPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  font-size: 16px;
  @media (max-width: 560px) {
    width: 100%;
    color: ${({ theme }) => theme.colors.baseGray};
  }
`;

export const CardDescriptionProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  font-size: 24px;
  @media (max-width: 560px) {
    width: 100%;
    color: ${({ theme }) => theme.colors.baseGray};
  }
`;
export const ImgBox = styled.h1`
    border-radius: 20px;
`;
