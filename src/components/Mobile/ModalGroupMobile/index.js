import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { notification } from 'antd';
import { Button } from 'react-bootstrap';
import api from '../../../utils/api';

const AddGroup = styled(Button)`
    background-color: transparent;
    border: 0;
    cursor:pointer;
    outline:none;
`;

const ContainerModal = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height: 100%;
flex-direction:column;  
`;

const Row = styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 100%;
margin: 2.5% 0 2.5%;
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

const Ajust = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
margin-bottom: 10%;
@media(max-width:860px){
        flex-direction:column;
    } 
`;

Ajust.Col1 = styled.h3`
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
    height: 40px;
    width: 200px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.darkGreen};
    border: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.darkGreen};
    border-radius: 5px;
    align-items: center;
    transform: translate(0%,-50%);
    justify-content: center;
    text-align: center;
    cursor: pointer;
    :hover{
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.background};
    border: solid;
    border-color: ${({ theme }) => theme.colors.darkGreen};
    }
    @media(max-width:860px){
        width:150px;
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
    width: '80vw',
    height: '50vh',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #609694',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'auto',

  },

}));

export default function ModalGroup() {
  const [group, setGroup] = useState('');
  async function handleGroupChange(event) {
    setGroup(event.target.value);
  }

  async function handleSubmit() {
    const body = {
      name: group,
    };

    try {
      await api.post('/api/group', body);
      notification.open({
        message: 'Sucesso!',
        description:
          'O grupo foi criado com sucesso.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    } catch (error) {
      notification.open({
        message: 'Sucesso!',
        description:
          'Não foi possível criar o grupo',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    }
  }
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <ContainerModal>
        <Row>
          <TitleModal>Adicione um grupo</TitleModal>
        </Row>
        <Row>
          <Ajust>
            <Ajust.Col1>
              Nome do grupo:
            </Ajust.Col1>
            <InputNameGroup placeholder="" require value={group} onChange={handleGroupChange} />
          </Ajust>
        </Row>
        <Row>
          <ButtonConfirm onClick={(e) => {
            e.preventDefault();
            handleSubmit();
            handleClose();
          }}
          >
            Confirmar grupo

          </ButtonConfirm>
        </Row>
      </ContainerModal>
    </div>
  );
  return (
    <div>
      <AddGroup onClick={handleOpen}>
        Adicionar grupo
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
