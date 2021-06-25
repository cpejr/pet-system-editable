import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
import { SettingOutlined, EditOutlined } from '@ant-design/icons';
import api from '../../utils/api';
import CategoryButtons from '../CategoryComponents/CategoryButtons';
import SubcategoryButtons from '../CategoryComponents/SubcategoryButtons';

const { Panel } = Collapse;

const MyPanel = styled(Panel)`
  width: 600px;
  background-color: yellow;
  margin-bottom: 5%;
  font-size: 30px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid;
  width: 100%;
`;

const Category = styled.p`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 2%;
  margin: 0px;
  height: 40px;
  font-size: 30px;
   background-color:${({ theme }) => theme.colors.titleGray};
`;

const SubcategoryLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  margin: 0px;
`;

const Ul = styled.ul`
  margin: 0px;
`;

const ListItem = styled.li`
  height: 40px;
  font-size: 25px;
  // list-style: none;
  // background-color:${({ theme }) => theme.colors.grayIcons};
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

  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  return (
    <Table>
      <div>
        {CategoriesData.map((category) => (
          <div>
            <Category key={category.id}>
              {category.name}
              <CategoryButtons category={category} key={category.id} />
            </Category>
            <Ul>
              {category.subcategories.map((subcategory) => (
                <SubcategoryLine>
                  <ListItem key={subcategory.id}>{subcategory.name}</ListItem>
                  <SubcategoryButtons />
                </SubcategoryLine>
              ))}
            </Ul>
          </div>
        ))}

      </div>
    </Table>
  );
}
