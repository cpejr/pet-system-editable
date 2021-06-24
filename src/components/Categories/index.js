import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Line = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: yellow;
`;

Line.items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-space-between;
`;

const Editar = styled.button`
  margin-top: 1%;
  margin-bottom: 1%;
  align-items: flex-end;
  cursor: pointer;
  height: 30px;
  width: 200px;
  border-radius: 5px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: white;
`;

const api = axios.create({ baseURL: 'http://localhost:3000/' });

export default function Categories() {
  const [CategoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await api.get('api/category/all');
      console.log(response.data);
      const { data } = response;
      setCategoriesData(data);
    }
    fetchData();
    console.log(fetchData());
  }, []);

  return (
    <Line>
      <div>
        {CategoriesData.map((category) => (
          <p key={category.id}>{category.name}</p>
        ))}
      </div>

    </Line>
  );
}
