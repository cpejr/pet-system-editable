import React, { useState } from 'react';
import styled from 'styled-components';

function Upload() {
  const [photo, setPhoto] = useState({ file: null }); /* Caminho da imagem no lugar de null */

  function handleChange(event) {
    setPhoto({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }
  const Img = styled.img` 
  display:flex;
  align-items:center;
  justify-content:center;
  width: 200px;
  height: 200px;
  margin-bottom:5%;
  margin-top:5%;
  `;
  const UploadContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;

  const ImageSelected = styled.input`
  `;

  const Label = styled.label`
    background-color:  ${({ theme }) => theme.colors.mediumGreen};;
    color: white;
    padding: 0.5rem;
    font-family: sans-serif;
    border-radius: 0.3rem;
    cursor: pointer;
    margin-top: 1rem;
    `;

  return (
    <div>
      <UploadContainer>
        <ImageSelected type="file" id="cover" hidden onChange={handleChange} />
        <Label for="cover">Escolha a imagem</Label>
        <Img alt="" src={photo.file} />

      </UploadContainer>
    </div>
  );
}

export default Upload;
