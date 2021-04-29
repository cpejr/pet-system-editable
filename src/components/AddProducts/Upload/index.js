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
  width: 250px;
  height: 250px;
  `;
  return (
    <div>
      <form>
        <label id="form1" htmlFor="upload">
          <input id="upload" type="file" onChange={handleChange} />
          Selecionar Imagem
        </label>
        <br />
        <Img alt="" src={photo.file} />
      </form>
    </div>
  );
}

export default Upload;
