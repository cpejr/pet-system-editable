import React from 'react';
import styled from 'styled-components';
import AddSubcategory from '../Buttons/AddSubcategory';
import EditCategory from '../Buttons/EditCategory';
import DeleteCategory from '../Buttons/DeleteCategory';

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 400px;
`;

export default function CategoryButtons({
  category, catIndex, addSubcategory, editCategory, deleteCategory,
}) {
  return (
    <div>
      <Line>
        <AddSubcategory
          category={category}
          catIndex={catIndex}
          addSubcategory={addSubcategory}
        />
        <EditCategory
          category={category}
          catIndex={catIndex}
          editCategory={editCategory}
        />
        <DeleteCategory
          category={category}
          catIndex={catIndex}
          deleteCategory={deleteCategory}
        />
      </Line>
    </div>
  );
}
