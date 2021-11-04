import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Cards from '../Cards';

const api = axios.create({ baseURL: 'http://localhost:3000/' });
const CardLine = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: auto;
width: 90%;
flex-direction: row;
flex-wrap: wrap;
@media(max-width:560px){
  display:flex;
  align-items: center;
    width:100%;
    flex-direction:row;
    flex-direction:row;
    flex-wrap: wrap;
}
`;
export default function MyProducts({ group, products }) {
  return (
    group ? (
      <CardLine>
        {group.product_groups.length > 0
        && group.product_groups.map((product) => (<Cards product={product} key={product.product_id} />))}
      </CardLine>
    ) : (
      <CardLine>
        {products.length > 0
        && products.map((product) => (<Cards product={product} key={product.product_id} />))}
      </CardLine>
    )
  );
}
