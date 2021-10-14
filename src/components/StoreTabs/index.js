import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';
import api from '../../utils/api';
import 'antd/dist/antd.css';
import ProductsCarousel from '../Carousels/ProductsCarousel';
import StoreServices from '../StoreServices';
import SearchCards from '../SearchCards';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Container = styled.div`
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

const SearchContainer = styled.div`
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
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
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

const Title = styled.h1`
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

export default function StoreTabs({ store, myLoader }) {
  const [products, setProducts] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    api.get(`productsByStore/${store.firebase_id_store}`).then((res) => {
      setProducts(res.data);
    });

    api.get(`groups/${store.firebase_id_store}`).then((res) => {
      setGroups(res.data);
    });
  }, []);

  return (
    <Container>
      <Tabs defaultActiveKey="1" onChange={callback} centered size="large">
        <TabPane tab="Produtos" key="1">
          <ProductsCarousel products={products} myLoader={myLoader} />
          {groups.map((group) => (
            <SearchContainer>
              <SearchContainer.Row>
                <Title>{group.name}</Title>
                <SearchContainer.Col>
                  {group.product_groups.map((product) => (
                    <SearchCards product={product} key={product.product_id} />
                  ))}
                </SearchContainer.Col>
              </SearchContainer.Row>
            </SearchContainer>
          ))}
        </TabPane>
        <TabPane tab="Serviços" key="2">
          <StoreServices store={store} />
        </TabPane>
      </Tabs>
    </Container>
  );
}
