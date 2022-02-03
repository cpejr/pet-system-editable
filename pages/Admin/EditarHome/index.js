import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaRegUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import api from '../../../src/utils/api'
import AdminCardsFix from '../../../src/components/AdminCardsFix';
import WindowDividerAdmin from '../../../src/components/WindowDividerAdmin';
import { toast } from 'react-toastify';
import ModalDeleteImage from '../../../src/components/ModalDeleteImage';

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
align-items:start;
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

const ContainerEditHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width:80%;
  margin-bottom: 5%;
`;

const AlignItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 3%;
  padding: 10px;
`;

const Title = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 4%;
   margin-top:50px;
   text-align:center;
`;

const Text = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 300;
  margin: 0;

`;
const Text2 = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;

`;

const ButtonDelete = styled.button`
    display:flex;
    height: 30px;
    width: 200px;
    margin-top:19px
    font-family: Roboto;
    font-size: 13px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.mediumGreen};
    color: white;
    border: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.darkGreen};
    border-radius: 0 0 5px 5px;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    :hover{
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.mediumGreen};
    border: solid;
    border-color:${({ theme }) => theme.colors.darkGreen};
    }
    @media(max-width:860px){
        width:150px;
    } 
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
  margin-top:3%;
  margin-bottom:5%;
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
  @media(max-width:580px){
    width:150px;
} 
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  margin-left: 10px;
  margin-bottom: 10px;
  flex-basis: 33.333333%
`;

toast.configure();

export default function HomeEdit() {
  const [open, setOpen] = useState(false);
  const [image_img, setImage_img] = useState({ file: null, url: null });
  const [type, setType] = useState('Principais Marcas');
  const [filtros, setFiltros] = useState('Principais Marcas');
  const [allImages, setAllImages] = useState([]);
  const [resolution, setResolution] = useState('Resolução mínima de (300x200)px');
  const myLoader = ({ src }) => {
    return `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;
  };

  function handleChange(event) {
    setImage_img({
      file: event.target.files[0],
      url: URL.createObjectURL(event.target.files[0]),
    });
  }

  function handleType(e) {
    setType(e.target.value);
    setFiltros(e.target.value);
    if (e.target.value === "Banner") {
      setResolution("Resolução mínima de (1000x300)px");
    } else {
      setResolution("Resolução mínima de (300x200)px");
    }
  }
  async function getAllImages() {
    const response = await api.get('image');
    try {
      setAllImages(response.data?.filter(image => image.type === filtros));
    } catch (error) {
      console.warn(error);
    }
  }
  useEffect(() => {
    getAllImages();
  }, [filtros])

  async function deleteImage(id) {
    try {
      await api.delete(`image/${id}`);
      toast('Imagem deletada com sucesso!', { position: toast.POSITION.BOTTOM_RIGHT });
      getAllImages();
    } catch (error) {
      console.warn(error);
      toast('Erro ao deletar a imagem.', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();

    formData.append('type', type);
    formData.append('img', image_img.file);

    try {
      await api.post('/image', formData);
      toast('Imagem adicionada com sucesso!', { position: toast.POSITION.BOTTOM_RIGHT });
      getAllImages();
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
          <ContainerEditHome>
            <Title>Editar imagens da Home</Title>
            <Text>Qual bloco da home você irá editar: </Text>
            <Select
              id="select"
              required
              value={type}
              onChange={(e) => handleType(e)}>
              <option
                value="Principais Marcas"
              >Principais Marcas</option>
              <option
                value="Banner"
              >Banner</option></Select>
            <UploadContainer>
              <ImageSelected type="file" required id="image" hidden placeholder='1200x80' onChange={handleChange} />
              <Label for="image">Escolha a imagem</Label>
              <Img alt="" src={image_img.url} />
            </UploadContainer>
            <Text2> {resolution} </Text2>
            <Button onClick={handleSubmit} >Confirmar</Button>
            <Text> Selecione a imagem a ser excluída: </Text>
            <AlignItem>
              {allImages?.map((img) => (
                <Item>
                  <Image
                    loader={myLoader}
                    src={img.image_id}
                    alt=""
                    width="200"
                    height="100"
                  />
                  <ButtonDelete>
                    <ModalDeleteImage image_id={img.image_id} getAllImages={getAllImages} /></ButtonDelete>
                </Item>
              ))}
            </AlignItem>
          </ContainerEditHome>
        </Container.Col2>
      </Container>
    </div>
  );
}