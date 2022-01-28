import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import api from '../../../src/utils/api';
import AdminCardsFix from '../../../src/components/AdminCardsFix';
import WindowDividerAdmin from '../../../src/components/WindowDividerAdmin';
import { toast } from 'react-toastify';
import { imageUpload } from '../../../src/models/AwsModel';

export const Img = styled.img` 
  display:flex;
  align-items:center;
  justify-content:center;
  width: 200px;
  height: 200px;
  margin-bottom:5%;
  margin-top:5%;
  `;
export const Label = styled.label`
  background-color:  ${({ theme }) => theme.colors.mediumGreen};;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
`;
export const UploadContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;
export const ImageSelected = styled.input`
`;


const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
@media(max-width:860px){
    flex-direction:column;
}
`;

Container.Col1 = styled.div`
display:flex;
align-items:center;
margin-top:5%;
margin-bottom:5%;
justify-content:center;
flex-direction:column;
width:40%;
@media(max-width:860px){
    width:100%;
}
`;
Container.Col1.Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-bottom:5%;
`;

Container.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:60%;
@media(max-width:860px){
    width:100%;
    margin-top:4%;
}
`;

const ContainerComission = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:80%;
  margin-bottom: 5%;
`;

ContainerComission.Field = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1%;
  margin-bottom: 1%;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 4%;
`;

const Text = styled.p`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 300;
  margin: 0;

`;

const Input = styled.input`
  height: 25px;
  font-size: 20px;
  margin-left: 2%;
  display: flex;
  justify-content: center;
  width: 25%;
  border-radius: 10px;
  border: solid;
  border-width: thin;
`;

const Button = styled.button`
  cursor: pointer;
  height: 45px;
  width: 150px;
  border-radius: 10px;
  font-family: Roboto;
  font-size: 25px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: white;
  margin-top:5%;
`;
const Select = styled.select`
  width: 90%;
  font-family: Roboto;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.baseGray};
  background: #F2F2F2;
`;

toast.configure();

export default function HomeEdit() {
  const [image_img, setImage_img] = useState({ file: null, url: null });

  function handleImage_img(event) {
    setImage_img({
      file: event.target.files[0],
      url: URL.createObjectURL(event.target.files[0]),
    });
  }

  return (
    <div>
      <Container>
        <Container.Col1>
          <Container.Col1.Row1>
            <FaRegUserCircle size={80} style={{ color: '#609694' }} />
          </Container.Col1.Row1>
          <AdminCardsFix />
        </Container.Col1>
        <WindowDividerAdmin />
        <Container.Col2>
          <ContainerComission>
            <Title>Editar Home:</Title>
            <ContainerComission.Field>
              <Text>Alterar para: </Text>
              <Select>
                <option value="Banner">Editar Banner</option>
                <option value="Brand">Editar Marcas</option></Select>
              <UploadContainer>
                <ImageSelected type="file" id="image" hidden onChange={handleImage_img} />
                <Label for="image">Escolha a imagem</Label>
                <Img alt="" src={image_img.url} />
              </UploadContainer>
            </ContainerComission.Field>
            <Button >Confirmar</Button>
          </ContainerComission>
        </Container.Col2>
      </Container>
    </div>
  );
}