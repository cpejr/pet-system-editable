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
  width: 100%;
  //margin-top: 1%;
`;

export default function CategoryButtons() {
  return (
    <div>
      <Line>
        <AddSubcategory />
        <EditCategory />
        <DeleteCategory />
      </Line>
    </div>
  );
}
