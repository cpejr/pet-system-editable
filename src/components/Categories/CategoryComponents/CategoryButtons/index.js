import React from 'react';
import styled from 'styled-components';
import EditCategory from '../Buttons/EditCategory';
import DeleteCategory from '../Buttons/DeleteCategory';

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 400px;
  margin-left: 10px;
`;

export default function CategoryButtons({
  category, catIndex, editCategory, deleteCategory,
}) {
  return (
    <div>
      <Line>
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
