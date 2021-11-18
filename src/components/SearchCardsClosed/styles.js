import styled from 'styled-components';

export const CardWrapper = styled.button`
  display: flex;
  align-items: center;
  width: auto;
  padding: 1vw;
  height: 100%;
  font-family: Roboto;
  background-color: transparent;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 7%);
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
  .Image {
    height: 100%;
    width: 100%;
    object-fit: fill;
    mask-image: linear-gradient(45deg, #000000 25%, rgba(0, 0, 0, 0.2) 25%),
      linear-gradient(-45deg, #000000 25%, rgba(0, 0, 0, 0.2) 25%),
      linear-gradient(45deg, rgba(0, 0, 0, 0.2) 75%, #000000 75%),
      linear-gradient(-45deg, rgba(0, 0, 0, 0.2) 75%, #000000 75%);
    mask-size: 20px 20px;
    mask-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
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

export const CardDescriptionDescription = styled.div`
  display: flex;
  justify-content: left;
  width: 100%;
  font-family: Roboto;
  font-size: 16px;
`;

export const CardDescriptionTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1%;
  margin-bottom: 1%;
  font-size: 26px;
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
export const CardDescriptionClosed = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  font-size: 16px;
  color: red;
  @media (max-width: 560px) {
    width: 100%;
    color: ${({ theme }) => theme.colors.baseGray};
  }
`;
