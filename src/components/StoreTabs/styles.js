import styled from 'styled-components';

export const Container = styled.div`
  height: max-content;
  .ant-tabs-tab {
    color: #363636 !important;
    font-family: Roboto;
  }
  .ant-tabs-tab-active {
    color: #609694 !important;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #609694 !important;
    font-weight: 500;
  }
  .ant-tabs-ink-bar {
    position: absolute;
    background: #609694;
    pointer-events: none;
  }
`;

export const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
`;

ServiceContainer.Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  flex-direction: column;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding-right: 1.7%;
  @media (max-width: 1920px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 560px) {
    width: 100%;
  }
`;

SearchContainer.Row = styled.div`
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  margin-left:2%;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  @media (max-width: 560px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  align-items: initial;
  display: flex;
  margin-left: 0.5%;
  margin-top: 2%;
  margin-bottom: 1%;
  width: 100%;
  font-family: Roboto;
  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2%;
  }
`;
