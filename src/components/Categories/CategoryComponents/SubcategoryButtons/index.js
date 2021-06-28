import React from 'react';
import styled from 'styled-components';
import EditSubcategory from '../Buttons/EditSubcategory';
import DeleteSubcategory from '../Buttons/DeleteSubcategory';

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60px;
`;

export default function SubcategoryButtons({ subcategory }) {
  return (
    <div>
      <Line>
        <EditSubcategory subcategory={subcategory} />
        <DeleteSubcategory subcategory={subcategory} />
      </Line>
    </div>
  );
}
