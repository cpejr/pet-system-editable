import styled from 'styled-components';

export const ContainerDoContainer = styled.div``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  font-family: Roboto;
  margin: 0;
`;

export const StoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  margin-bottom: 2%;
  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

StoreContainer.Col1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
StoreContainer.Col2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 880px) {
    width: 100%;
    justify-content: center;
  }
`;

export const StoreName = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 53px;
  text-align: center;
  @media (max-width: 880px) {
    width: 100%;
    justify-content: center;
  }
`;

export const StoreDatas = styled.h3`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 42px;
  @media (max-width: 880px) {
    width: 100%;
    justify-content: center;
  }
`;

export const BigBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1074px) {
    display: none;
  }
`;

export const MediumBanner = styled.div`
  display: none;
  @media (max-width: 1074px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
export const LittleBanner = styled.div`
  display: none;
  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
