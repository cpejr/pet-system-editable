import React from 'react';
import styled from 'styled-components';
import EditSubcategory from '../Buttons/EditSubcategory';
import DeleteSubcategory from '../Buttons/DeleteSubcategory';

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
        <EditSubcategory />
        <DeleteSubcategory />
      </Line>
    </div>
  );
}
