import React, { useState, useEffect } from 'react';
import api from "../../utils/api";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { notification } from 'antd';
import { MdEdit } from 'react-icons/md';
import { useRouter } from "next/router";

const AddressModal = styled.div`
position: fixed;
top: 0;
bottom:0;
right:0;
left: 0;
z-index: 99;
@media(max-width:1190px){
    flex-direction:column;
    overflow:auto;
  }
`;

// AddProductsContainer.Col1 = styled.div`
// display:flex;
// align-items:center;
// justify-content:center;
// width:70%;
// flex-direction:column;
// @media(max-width:1190px){
//   width:100%;
// }
// `;

const DivInput = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 100%;
`;

const TitleModal = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
font-family:Roboto;
font-weight: bold;
font-size:24px;
margin-bottom:5%;
@media(max-width:860px){
        width:100%;
        font-size:18px;
    } 
`;

const Espaçamento = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
margin-bottom:1%;
@media(max-width:860px){
        flex-direction:column;
    } 
`;

Espaçamento.Col1 = styled.h3`
display:flex;
align-items:center;
justify-content:center;
width:30%;
font-family:Roboto;
@media(max-width:860px){
        width:100%;
        font-size:16px;
    } 
`;

const InputNameGroup = styled.input`
display:flex;
align-items:center;
justify-content:center;
width:40%;
font-family:Roboto;
height:40px;
border-radius:10px;
border-color:${({ theme }) => theme.colors.borderBoxColor};
@media(max-width:860px){
        width:100%;
        font-size:12px;
    } 
`;

const ButtonConfirm = styled.button`
display:flex;
margin-top: 50px;
height: 55px;
width: 200px;
font-family: Roboto;
font-size: 18px;
font-weight: 300;
background-color: ${({ theme }) => theme.colors.darkGreen};
color: white;
border: 0;
border-radius: 5px;
align-items: center;
text-align: center;
transform: translate(0%,-50%);
justify-content: center;
text-align: center;
margin-top:10%;
cursor: pointer;
    }
    @media(max-width:860px){
        width:150px;
    } 
`;

const AddGroup = styled.button`
  display:flex;
    align-items:center;
    justify-content:center;
    font-family: Roboto;
    font-size: 100%;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.mediumGreen};
    border: 0;
    cursor:pointer;
    outline:none;    
    margin-top: 5%;
    margin-bottom: 2%;
    @media(max-width:1000px){
      display:flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
}
`;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: '65vw',
    height: '60%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #609694',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

  },

}));

export default function ModalEditAddresses(addressId) {
    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
     const [group, setGroup] = useState('');
     const [modalStyle] = useState(getModalStyle);
     const [open, setOpen] = useState(false);
     const router = useRouter();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleState = () => {
    handleClose()
  }
  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit() {
    if (cep?.length !== 8) {
        alert("CEP inválido");
        return;
      }
      if (number?.length !== 3) {
        alert("Número inválido");
        return;
      }
    const body = {
        address_id: addressId.address_id,
        street: street,
        number: number,
        neighbourhood: neighbourhood,
        city: city,
        state: state,
    };
    try {
      api.put("/address/", body);
      notification.open({
        message: "Sucesso!",
        description: "Alteraçao realizada com sucesso.",
        className: "ant-notification",
        top: "100px",
        style: {
          width: 600,
        },
      }
      );
    } catch (error) {
      console.error(error);
      notification.open({
        message: "Erro!",
        description: "Erro ao atualizar dados.",
        className: "ant-notification",
        top: "100px",
        style: {
          width: 600,
        },
      });
    }
    router.push('/User/Perfil/MyDatas');
  }

  const [street, setStreet] = useState();
  const [number, setNumber] = useState();
  const [neighbourhood, setNeighbourhood] = useState();
  const [city, setCity] = useState();
  const [cep, setCep] = useState();
  const [state, setState] = useState();

  async function loadAddress() {
    try {
      const response = await api.get('/address/'+ addressId.address_id);
      setStreet(response.data.street);
      setNumber(response.data.number);
      setNeighbourhood(response.data.neighbourhood);
      setCity(response.data.city);
      setCep(response.data.cep);
      setState(response.data.state);
    } catch (error) {
      console.error(error); //eslint-disable-line
    }
  }

  useEffect(() => {
    loadAddress();
  }, []);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <AddressModal>
        <DivInput>
          <TitleModal>Edite um endereço</TitleModal>
        </DivInput>
        <DivInput>
          <Espaçamento>
            <Espaçamento.Col1>
              Rua:
            </Espaçamento.Col1>
            <InputNameGroup placeholder="" value={street} onChange={(e) => setStreet(e.target.value)} />
          </Espaçamento>
        </DivInput>
        <DivInput>
          <Espaçamento>
            <Espaçamento.Col1>
              Numero:
            </Espaçamento.Col1>
            <InputNameGroup placeholder="" value={number} onChange={(e) => setNumber(e.target.value)} />
          </Espaçamento>
        </DivInput>
        <DivInput>
          <Espaçamento>
            <Espaçamento.Col1>
              Bairro:
            </Espaçamento.Col1>
            <InputNameGroup placeholder="" value={neighbourhood} onChange={(e) => setNeighbourhood(e.target.value)} />
          </Espaçamento>
        </DivInput>
        <DivInput>
          <Espaçamento>
            <Espaçamento.Col1>
              Cidade
            </Espaçamento.Col1>
            <InputNameGroup placeholder="" value={city} onChange={(e) => setCity(e.target.value)} />
          </Espaçamento>
        </DivInput>
        <DivInput>
          <Espaçamento>
            <Espaçamento.Col1>
              Cep:
            </Espaçamento.Col1>
            <InputNameGroup placeholder="" value={cep} onChange={(e) => setCep(e.target.value)} />
          </Espaçamento>
        </DivInput>
        <DivInput>
          <Espaçamento>
            <Espaçamento.Col1>
              Estado:
            </Espaçamento.Col1>
            <InputNameGroup placeholder="" value={state} onChange={(e) => setState(e.target.value)} />
          </Espaçamento>
        </DivInput>
        <DivInput>
          <ButtonConfirm onClick={
            handleSubmit
          }
          >
            Confirmar edição

          </ButtonConfirm>
        </DivInput>
      </AddressModal>
    </div>
  );
  return (
    <div>
      <AddGroup onClick={handleOpen}>
         <MdEdit />
      </AddGroup>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
