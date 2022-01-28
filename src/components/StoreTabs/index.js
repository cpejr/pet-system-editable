import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import { useEffect, useState } from 'react';
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

export default function StoreTabs({
  store, products, groups, myLoader,
}) {
  const openingTime = store.opening_time.split(',');
  const closingTime = store.closing_time.split(',');
  const situation = store.working_days.split(',');
  const [today, setToday] = useState();
  const data = new Date();
  const day = moment(data).format('dddd');
  useEffect(() => {
    if (day) {
      switch (day) {
        case 'Monday':
          setToday(0);
          break;

        case 'Tuesday':
          setToday(1);
          break;

        case 'Wednesday':
          setToday(2);
          break;

        case 'Thursday':
          setToday(3);
          break;

        case 'Friday':
          setToday(4);
          break;

        case 'Saturday':
          setToday(5);
          break;

        default:
          setToday(6);
          break;
      }
    }
  }, [day]);
  return (
    <Container>
          <ProductsCarousel products={products} myLoader={myLoader} />
          {groups.map((group) => (
            <SearchContainer>
              <SearchContainer.Row>
                <Title>{group.name}</Title>
                <SearchContainer.Col>
                  {(StoreIsOpen(openingTime[today], closingTime[today]) && situation[today] === 'Aberto') ? (
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
        <TabPane tab="Serviços" key="2">
          <StoreServices store={store} />
        </TabPane>
    </Container>
  );
}
