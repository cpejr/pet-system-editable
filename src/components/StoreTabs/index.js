import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import { Container, SearchContainer } from './styles';
import Title from '../Title';
import SearchCards from '../SearchCards';
import StoreServices from '../StoreServices';
import ProductsCarousel from '../Carousels/ProductsCarousel';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function StoreTabs({
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
                  {group.product_groups.map((product) => (
                    <SearchCards product={product} store={store} key={product.product_id} />
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
