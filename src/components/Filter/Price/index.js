import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Slider } from '@material-ui/core';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:260px;
font-family:Roboto;
margin-bottom:10%;
`;

Container.Title = styled.p`
display:flex;
align-items:center;
justify-content:center;
margin:0;
width:100%;
font-size:28px;
@media(max-width:310px){
  font-size:25px;
    }
`;

const ContainerSlider = styled.div`
width:100%;
margin-top:10%;
@media(max-width:440px){
  width:80%;
  margin-top:10%;
    }
    @media(max-width:360px){
  width:70%;
  margin-top:10%;
    }
    @media(max-width:311px){
  width:60%;
  margin-top:10%;
    }
`;

export default function Price({ setPrice, maxPrice }) {
  const [localPrice, setLocalPrice] = useState();
  const [val, setVal] = useState([0, maxPrice ?? 1000]);

  const updateVal = (e, data) => setVal(data);

  const handleRange = (e, data) => {
    setLocalPrice(data);
  };

  const getText = (value) => `${value}`;

  useEffect(() => {
    if (localPrice !== undefined) {
      setPrice(localPrice);
    }
  }, [localPrice]);
  return (
    <div>
      <Container>
        <Container.Title>Faixa de preço</Container.Title>
        <ContainerSlider>
          <Slider
            value={val}
            min={0}
            max={maxPrice ?? 1000}
            onChange={updateVal}
            onChangeCommitted={handleRange}
            valueLabelDisplay="auto"
            getAriaValueText={getText}
          />
        </ContainerSlider>
      </Container>
    </div>
  );
}
