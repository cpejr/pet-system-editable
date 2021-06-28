/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
import api from '../../utils/api';
import CategoryButtons from './CategoryComponents/CategoryButtons';
import SubcategoryButtons from './CategoryComponents/SubcategoryButtons';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const genExtra = () => {
  <CategoryButtons
    onClick={(event) => {
    // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />;
};

const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Ul = styled.ul`
  margin-top: 5%;
`;

const ListItem = styled.li`
  margin-top: 1%;
  margin-bottom: 1%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default function Categories() {
  const [CategoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/category/all');
      console.log(response.data);
      const { data } = response;
      setCategoriesData(data);
    }
    fetchData();
  }, []);

  return (
    <Table>
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        {CategoriesData.map((category) => (
          <Panel key={category.id} header={category.name} extra={genExtra()}>
            <CategoryButtons key={category.id} category={category} />
            <Ul>
              {category.subcategories.map((subcategory) => (
                <ListItem key={subcategory.id}>
                  {subcategory.name}
                  <SubcategoryButtons key={subcategory.id} subcategory={subcategory} />
                </ListItem>
              ))}
            </Ul>
          </Panel>
        ))}
      </Collapse>
    </Table>
  );
}
