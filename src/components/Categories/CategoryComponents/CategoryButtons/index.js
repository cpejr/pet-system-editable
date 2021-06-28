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

export default function CategoryButtons({ category }) {
  return (
    <div>
      <Line>
        <AddSubcategory category={category} />
        <EditCategory category={category} />
        <DeleteCategory category={category} />
      </Line>
    </div>
  );
}
