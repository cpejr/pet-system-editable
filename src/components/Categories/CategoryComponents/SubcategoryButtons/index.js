import React from 'react';
import styled from 'styled-components';
import DeleteSubcategory from '../Buttons/DeleteSubcategory';
import EditSubcategory from '../Buttons/EditSubcategory';

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60px;
`;

export default function SubcategoryButtons({
  subcategory, catIndex, subcatIndex, editSubcategory,
}) {
  return (
    <div>
      <Line>
        <EditSubcategory
          subcategory={subcategory}
          catIndex={catIndex}
          subcatIndex={subcatIndex}
          editSubcategory={editSubcategory}
        />
        <DeleteSubcategory
          subcategory={subcategory}
          catIndex={catIndex}
          subcatIndex={subcatIndex}
        />
      </Line>
    </div>
  );
}
