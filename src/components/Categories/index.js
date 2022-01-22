/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
import api from '../../utils/api';
import CategoryButtons from './CategoryComponents/CategoryButtons';
import AddCategory from './CategoryComponents/Buttons/AddCategory';

const { Panel } = Collapse;

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

const ContainerCategories = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 5%;
`;

ContainerCategories.Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5%;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-size: 45px;
  font-weight: 400; 
  margin-top: 0;
  margin-bottom: 0;
  @media(min-width: 800px){
    justify-content:center;
  }
`;


export default function Categories() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api.get('category').then((response) => {
      setCategories(response.data)
    })
  },[]) 
  

  // CATEGORIES:
  function createCategory(category) {
    setCategories([...categories, category]);
  }

  function editCategory(category, categoryIndex) {
    const editedCategories = [...categories];
    editedCategories[categoryIndex] = category;
    setCategories(editedCategories);
  }

  function deleteCategory(categoryIndex) {
    const editedCategories = [...categories];
    editedCategories.splice(categoryIndex, 1);
    setCategories(editedCategories);
  }

  return (
    <ContainerCategories>
      <ContainerCategories.Top>
        <Title>Edição de Categorias</Title>
        <AddCategory addCategory={createCategory} />
      </ContainerCategories.Top>

      <Table>
        <Collapse>
          {categories.map((category, catIndex) => (
            <Panel key={category.id} header={category.name}>
              <CategoryButtons
                key={category.category_id}
                category={category}
                catIndex={catIndex}
                editCategory={editCategory}
                deleteCategory={deleteCategory}
              />
              <Ul>
               
              </Ul>
            </Panel>
          ))}
        </Collapse>
      </Table>
    </ContainerCategories>
  );
}
