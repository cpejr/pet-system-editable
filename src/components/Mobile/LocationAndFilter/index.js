import React from 'react';
import styled from 'styled-components';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiToggleLeft } from 'react-icons/bi';

const Container = styled.div`
display:none;
@media(max-width:560px){
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:row;
height:50px;
background-color: ${({ theme }) => theme.colors.mediumGreen};
color:${({ theme }) => theme.colors.titleGray};
}
`;

Container.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:50%;
flex-direction:row;
`;
Container.Col1.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
flex-direction:row;

`;
Container.Col1.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
flex-direction:row;
font-family:Roboto;
font-size:18px;
`;

Container.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
width:50%;
flex-direction:row;
`;
Container.Col2.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:flex-end;
width:60%;
flex-direction:row;

`;
Container.Col2.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:40%;
flex-direction:row;
font-family:Roboto;
font-size:18px;
`;

export default function LocationAndFilter() {
  return (
    <div>
      <Container>
        <Container.Col1>
          <Container.Col1.Col1>
            <HiOutlineLocationMarker style={{ color: '#E8E8E8' }} size="30" />
          </Container.Col1.Col1>
          <Container.Col1.Col2>
            Timóteo,MG
          </Container.Col1.Col2>
        </Container.Col1>
        <Container.Col2>
          <Container.Col2.Col1>
            <BiToggleLeft style={{ color: '#E8E8E8' }} size="30" />
          </Container.Col2.Col1>
          <Container.Col2.Col2>
            Filtros
          </Container.Col2.Col2>
        </Container.Col2>
      </Container>
    </div>
  );
}
