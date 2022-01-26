import React from 'react';
import styled from 'styled-components';
import EditCategory from '../Buttons/EditCategory';
import DeleteCategory from '../Buttons/DeleteCategory';

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 5px;
  margin-bottom: -15px;
`;

export default function CategoryButtons({
  category, catIndex, editCategory, deleteCategory, att, setAtt
}) {
  return (
    <div>
      <Line>
        <EditCategory
          category={category}
          catIndex={catIndex}
          editCategory={editCategory}
          att={att}
          setAtt={setAtt}
        />
        <DeleteCategory
          category={category}
          catIndex={catIndex}
          deleteCategory={deleteCategory}
          att={att}
          setAtt={setAtt}
        />
      </Line>
    </div>
  );
}
