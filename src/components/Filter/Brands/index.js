import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:250px;
margin-bottom:10%;
font-family:Roboto;
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

export default function Category(props) {
  const { categories } = props;

  const [checkedPedigree, setCheckedPedigree] = useState(false);
  const handleClickPedigree = () => setCheckedPedigree(!checkedPedigree);

  const [checkedQuatree, setCheckedQuatree] = useState(false);
  const handleClickQuatree = () => setCheckedQuatree(!checkedQuatree);

  const [checkedPremier, setCheckedPremier] = useState(false);
  const handleClickPremier = () => setCheckedPremier(!checkedPremier);

  const [checkedMarca4, setCheckedMarca4] = useState(false);
  const handleClickMarca4 = () => setCheckedMarca4(!checkedMarca4);

  const [checkedMarca5, setCheckedMarca5] = useState(false);
  const handleClickMarca5 = () => setCheckedMarca5(!checkedMarca5);

  const [checkedMarca6, setCheckedMarca6] = useState(false);
  const handleClickMarca6 = () => setCheckedMarca6(!checkedMarca6);

  const [checkedMarca7, setCheckedMarca7] = useState(false);
  const handleClickMarca7 = () => setCheckedMarca7(!checkedMarca7);

  return (
    <div>
      <Container>
        <Container.Title>Marcas</Container.Title>
        <CategoryContainer>

          {categories.map((categoria) => (
            <CategoryContainer.Row1>
              <CategoryContainer.Row1.Col1>
                <input onClick={handleClickPedigree} checked={checkedPedigree} type="radio" />
              </CategoryContainer.Row1.Col1>
              <CategoryContainer.Row1.Col2>
                {categoria.name}
              </CategoryContainer.Row1.Col2>
            </CategoryContainer.Row1>
          ))}

          <CategoryContainer.Row1>
            <CategoryContainer.Row1.Col1>
              <input onClick={handleClickPedigree} checked={checkedPedigree} type="radio" />
            </CategoryContainer.Row1.Col1>
            <CategoryContainer.Row1.Col2>
              Pedrigree
            </CategoryContainer.Row1.Col2>
          </CategoryContainer.Row1>

          <CategoryContainer.Row2>
            <CategoryContainer.Row2.Col1>
              <input onClick={handleClickQuatree} checked={checkedQuatree} type="radio" />
            </CategoryContainer.Row2.Col1>
            <CategoryContainer.Row2.Col2>
              Quatree
            </CategoryContainer.Row2.Col2>
          </CategoryContainer.Row2>

          <CategoryContainer.Row3>
            <CategoryContainer.Row3.Col1>
              <input onClick={handleClickPremier} checked={checkedPremier} type="radio" />
            </CategoryContainer.Row3.Col1>
            <CategoryContainer.Row3.Col2>
              Premier
            </CategoryContainer.Row3.Col2>
          </CategoryContainer.Row3>

          <CategoryContainer.Row4>
            <CategoryContainer.Row4.Col1>
              <input onClick={handleClickMarca4} checked={checkedMarca4} type="radio" />
            </CategoryContainer.Row4.Col1>
            <CategoryContainer.Row4.Col2>
              Marca4
            </CategoryContainer.Row4.Col2>
          </CategoryContainer.Row4>

          <CategoryContainer.Row5>
            <CategoryContainer.Row5.Col1>
              <input onClick={handleClickMarca5} checked={checkedMarca5} type="radio" />
            </CategoryContainer.Row5.Col1>
            <CategoryContainer.Row5.Col2>
              Marca5
            </CategoryContainer.Row5.Col2>
          </CategoryContainer.Row5>

          <CategoryContainer.Row6>
            <CategoryContainer.Row6.Col1>
              <input onClick={handleClickMarca6} checked={checkedMarca6} type="radio" />
            </CategoryContainer.Row6.Col1>
            <CategoryContainer.Row6.Col2>
              Marca6
            </CategoryContainer.Row6.Col2>
          </CategoryContainer.Row6>

          <CategoryContainer.Row7>
            <CategoryContainer.Row7.Col1>
              <input onClick={handleClickMarca7} checked={checkedMarca7} type="radio" />
            </CategoryContainer.Row7.Col1>
            <CategoryContainer.Row7.Col2>
              Marca7
            </CategoryContainer.Row7.Col2>
          </CategoryContainer.Row7>

        </CategoryContainer>

      </Container>
    </div>
  );
}
