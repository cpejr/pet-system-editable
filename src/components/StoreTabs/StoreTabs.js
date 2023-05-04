import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Container, SearchContainer } from './styles';
import Title from '../Title';
import {
  SearchCardsClosed,
  SearchCards,
} from '../index';
import StoreServices from '../StoreServices';
import ProductsCarousel from '../Carousels/ProductsCarousel';
import StoreIsOpen from '../StoreIsOpen';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function StoreTabs({
  store, products, groups, myLoader,
}) {
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
                  {StoreIsOpen(store.opening_time, store.closing_time) ? (
                    group.product_groups.map((product) => (
                      <SearchCards product={product} store={store} key={product.product_id} />
                    ))
                  ) : (
                    group.product_groups.map((product) => (
                      <SearchCardsClosed product={product} store={store} key={product.product_id} />
                    ))
                  )}
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

export default StoreTabs;
