import styled from 'styled-components';

export const CardWrapper = styled.button`
  display: flex;
  align-items: center;
  width: auto;
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
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3%;
  width: 100%;
  font-size: 16px;
  flex-direction: row;
  border-left: 1px solid #f2f2f2;
  margin-left: 5%;
`;

export const CardDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
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

export const CardDescriptionValues = styled.p`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
  flex-direction: row;
  @media (max-width: 880px) {
    flex-direction: column;
    align-items: initial;
  }
`;
export const CardDescriptionDeliveryPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 60%;
  font-size: 24px;
  @media (max-width: 560px) {
    width: 100%;
    color: ${({ theme }) => theme.colors.baseGray};
  }
`;
