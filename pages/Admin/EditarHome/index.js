import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import api from '../../../src/utils/api'
import AdminCardsFix from '../../../src/components/AdminCardsFix';
import WindowDividerAdmin from '../../../src/components/WindowDividerAdmin';
import { toast } from 'react-toastify';

// const api = axios.create({ baseURL: 'http://localhost:3000/' });

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
  font-size: 16px;
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
  width: 30%;
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
  const [type, setType] = useState('Principais Marcas');
  const [imageId, setImageId] = useState();

  function handleChange(event) {
    setImage_img({
      file: event.target.files[0],
      url: URL.createObjectURL(event.target.files[0]),
    });
  }

  function handleType(e) {
    setType(e.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append('type', type);
    formData.append('img', image_img.file);

    try {
      await api.post('/image', formData);
      notification.open({
        message: 'Sucesso!',
        description:
          'Imagem alterada com sucesso',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    } catch (error) {
      console.error(error);
    }
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
            <Title>Editar imagens da home:</Title>
            <Text>Selecione o tipo de imagem que você irá editar: </Text>
            <Select
              id="select"
              required
              value={type}
              onChange={(e) => handleType(e)}>
              <option
                // key={image.image_id}
                value="Principais Marcas"
              >Principais Marcas</option>
              <option
                // key={image.image_id}
                value="Banner"
              >Banner</option></Select>

            <UploadContainer>
              <ImageSelected type="file" required id="image" hidden onChange={handleChange} />
              <Label for="image">Escolha a imagem</Label>
              <Img alt="" src={image_img.url} />
            </UploadContainer>
            <Button onClick={handleSubmit} >Confirmar</Button>
          </ContainerComission>
        </Container.Col2>
      </Container>
    </div>
  );
}