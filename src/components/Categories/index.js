/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
import api from '../../utils/api';
import CategoryButtons from './CategoryComponents/CategoryButtons';
import SubcategoryButtons from './CategoryComponents/SubcategoryButtons';
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
  width:80%;
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
`;

export default function Categories() {
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await api.get('/category/all');
      const { data } = response;
      setCategoriesData(data);
    }
    fetchData();
  }, []);

  // CATEGORIES:
  function createCategory(category) {
    category.subcategories = [];
    setCategoriesData([...categoriesData, category]);
  }

  function editCategory(category, categoryIndex) {
    const editedCategories = [...categoriesData];
    editedCategories[categoryIndex] = category;
    setCategoriesData(editedCategories);
  }

  function deleteCategory(categoryIndex) {
    const editedCategories = [...categoriesData];
    editedCategories.splice(categoryIndex, 1);
    setCategoriesData(editedCategories);
  }

  // SUBCATEGORIES:
  function addSubcategory(subcategory, categoryIndex) {
    const editedCategories = [...categoriesData];
    editedCategories[categoryIndex].subcategories.push(subcategory);
    setCategoriesData([...editedCategories]);
  }

  function editSubcategory(subcategory, categoryIndex, subcategoryIndex) {
    const editedCategories = [...categoriesData];
    editedCategories[categoryIndex].subcategories[subcategoryIndex] = subcategory;
    setCategoriesData(editedCategories);
  }

  function deleteSubcategory(categoryIndex, subcategoryIndex) {
    const editedCategories = [...categoriesData];
    editedCategories[categoryIndex].subcategories.splice(subcategoryIndex, 1);
    setCategoriesData(editedCategories);
  }

  return (
    <ContainerCategories>
      <ContainerCategories.Top>
        <Title>Edição de Categorias</Title>
        <AddCategory addCategory={() => createCategory()} />
      </ContainerCategories.Top>
      <Table>
        <Collapse>
          {categoriesData.map((category, catIndex) => (
            <Panel key={category.id} header={category.name}>
              <CategoryButtons
                key={category.id}
                category={category}
                catIndex={catIndex}
                addSubcategory={() => addSubcategory()}
                editCategory={() => editCategory()}
                deleteCategory={() => deleteCategory()}
              />
              <Ul>
                {category.subcategories.map((subcategory, subcatIndex) => (
                  <ListItem key={subcategory.id}>
                    {subcategory.name}
                    <SubcategoryButtons
                      key={subcategory.id}
                      subcategory={subcategory}
                      catIndex={catIndex}
                      subcatIndex={subcatIndex}
                      editSubcategory={() => editSubcategory()}
                      deleteSubcategory={() => deleteSubcategory()}
                    />
                  </ListItem>
                ))}
              </Ul>
            </Panel>
          ))}
        </Collapse>
      </Table>
    </ContainerCategories>
  );
}
