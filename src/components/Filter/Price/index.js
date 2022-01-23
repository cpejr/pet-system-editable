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
@media(max-width:560px){
      display:none;
    }
`;
Container.Title = styled.p`
display:flex;
align-items:center;
justify-content:center;
margin:0;
width:100%;
font-size:28px;
`;

const ContainerSlider = styled.div`
width:100%;
margin-top:10%;
`;

export default function Price({ setPrice }) {
  const [localPrice, setLocalPrice] = useState();
  const [val, setVal] = useState([0, 5000]);

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
            max={5000}
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
