import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import api from '../../utils/api';
import 'antd/dist/antd.css';
import {
  Title, SearchCards, StoreServices, ProductsCarousel,
} from '../index';
import { Container, SearchContainer } from './styles';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

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
