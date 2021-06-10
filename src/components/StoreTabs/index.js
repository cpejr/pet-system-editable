import React from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import ProductsCarousel from '../Carousels/ProductsCarousel';
import StoreServices from '../StoreServices';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Container = styled.div`
.ant-tabs-tab {
color: #363636 !important;
  font-family:Roboto;
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

const ServiceContainer = styled.div`
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

export default function StoreTabs({ store }) {
  return (
    <Container>
      <Tabs defaultActiveKey="1" onChange={callback} centered size="large">
        <TabPane tab="Produtos" key="1">
          <ProductsCarousel />
        </TabPane>
        <TabPane tab="Serviços" key="2">
          <StoreServices store={store} />
        </TabPane>
      </Tabs>
    </Container>
  );
}
