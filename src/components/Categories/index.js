import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
import api from '../../utils/api';

const { Panel } = Collapse;

const Line = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: yellow;
`;

Line.items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-space-between;
`;

const Editar = styled.button`
  margin-top: 1%;
  margin-bottom: 1%;
  align-items: flex-end;
  cursor: pointer;
  height: 30px;
  width: 200px;
  border-radius: 5px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: white;
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
    <Collapse>
      {CategoriesData.map((category, index) => (
        <Panel header={category.name} key={index + 1}>

          {category.subcategories.map((subcategory) => (
            <p key={subcategory.id}>{subcategory.name}</p>
          ))}
        </Panel>
      ))}
    </Collapse>
  );
}
