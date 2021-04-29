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
  const UploadConatiner = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

  const ImageSelected = styled.input`
display:flex;
align-items:center;
justify-content:center;
cursor: pointer;
`;

  return (
    <div>
      <UploadConatiner>
        <ImageSelected id="rbga" type="file" onChange={handleChange} />
        <Img alt="" src={photo.file} />

      </UploadConatiner>
    </div>
  );
}

export default Upload;
