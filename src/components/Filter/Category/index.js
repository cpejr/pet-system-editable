import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background-color:${({ theme }) => theme.colors.mediumGray};
width:200px;
border-radius:5px;
margin-bottom:10%;
`;
Container.Title = styled.h3`
display:flex;
align-items:center;
justify-content:center;
margin:0;
width:100%;
height:40px;
background-color:${({ theme }) => theme.colors.mediumGreen};
border-top-left-radius:5px;
border-top-right-radius:5px;
`;

const CategoryContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;
`;
CategoryContainer.Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row1.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row1.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;
CategoryContainer.Row2.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row2.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

CategoryContainer.Row3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;
CategoryContainer.Row3.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row3.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

CategoryContainer.Row4 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row4.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row4.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row5 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row5.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row5.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row6 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
cursor: pointer;
`;

CategoryContainer.Row6.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row6.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;
CategoryContainer.Row7 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
margin-top:5%;
margin-bottom:5%;
cursor: pointer;
`;

CategoryContainer.Row7.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:20%;
`;
CategoryContainer.Row7.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:initial;
width:80%;
`;

export default function Category() {
  const [checkedRacao, setCheckedRacao] = useState(false);
  const handleClickRacao = () => setCheckedRacao(!checkedRacao);

  const [checkedBrinquedos, setCheckedBrinquedos] = useState(false);
  const handleClickBrinquedos = () => setCheckedBrinquedos(!checkedBrinquedos);

  const [checkedVasilhas, setCheckedVasilhas] = useState(false);
  const handleClickVasilhas = () => setCheckedVasilhas(!checkedVasilhas);

  const [checkedCasinhas, setCheckedCasinhas] = useState(false);
  const handleClickCasinhas = () => setCheckedCasinhas(!checkedCasinhas);

  const [checkedPetiscos, setCheckedPetiscos] = useState(false);
  const handleClickPetiscos = () => setCheckedPetiscos(!checkedPetiscos);

  const [checkedShampoo, setCheckedShampoo] = useState(false);
  const handleClickShampoo = () => setCheckedShampoo(!checkedShampoo);

  const [checkedPerfumes, setCheckedPerfumes] = useState(false);
  const handleClickPerfumes = () => setCheckedPerfumes(!checkedPerfumes);

  return (
    <div>
      <Container>
        <Container.Title>Categorias</Container.Title>
        <CategoryContainer>

          <CategoryContainer.Row1>
            <CategoryContainer.Row1.Col1>
              <input onClick={handleClickRacao} checked={checkedRacao} type="checkbox" />
            </CategoryContainer.Row1.Col1>
            <CategoryContainer.Row1.Col2>
              Ração
            </CategoryContainer.Row1.Col2>
          </CategoryContainer.Row1>

          <CategoryContainer.Row2>
            <CategoryContainer.Row2.Col1>
              <input onClick={handleClickBrinquedos} checked={checkedBrinquedos} type="checkbox" />
            </CategoryContainer.Row2.Col1>
            <CategoryContainer.Row2.Col2>
              Brinquedos
            </CategoryContainer.Row2.Col2>
          </CategoryContainer.Row2>

          <CategoryContainer.Row3>
            <CategoryContainer.Row3.Col1>
              <input onClick={handleClickVasilhas} checked={checkedVasilhas} type="checkbox" />
            </CategoryContainer.Row3.Col1>
            <CategoryContainer.Row3.Col2>
              Vasilhas
            </CategoryContainer.Row3.Col2>
          </CategoryContainer.Row3>

          <CategoryContainer.Row4>
            <CategoryContainer.Row4.Col1>
              <input onClick={handleClickCasinhas} checked={checkedCasinhas} type="checkbox" />
            </CategoryContainer.Row4.Col1>
            <CategoryContainer.Row4.Col2>
              Casinhas
            </CategoryContainer.Row4.Col2>
          </CategoryContainer.Row4>

          <CategoryContainer.Row5>
            <CategoryContainer.Row5.Col1>
              <input onClick={handleClickPetiscos} checked={checkedPetiscos} type="checkbox" />
            </CategoryContainer.Row5.Col1>
            <CategoryContainer.Row5.Col2>
              Petiscos
            </CategoryContainer.Row5.Col2>
          </CategoryContainer.Row5>

          <CategoryContainer.Row6>
            <CategoryContainer.Row6.Col1>
              <input onClick={handleClickShampoo} checked={checkedShampoo} type="checkbox" />
            </CategoryContainer.Row6.Col1>
            <CategoryContainer.Row6.Col2>
              Shampoo
            </CategoryContainer.Row6.Col2>
          </CategoryContainer.Row6>

          <CategoryContainer.Row7>
            <CategoryContainer.Row7.Col1>
              <input onClick={handleClickPerfumes} checked={checkedPerfumes} type="checkbox" />
            </CategoryContainer.Row7.Col1>
            <CategoryContainer.Row7.Col2>
              Perfumes
            </CategoryContainer.Row7.Col2>
          </CategoryContainer.Row7>

        </CategoryContainer>

      </Container>
    </div>
  );
}
