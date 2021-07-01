import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import { notification } from 'antd';
import { BsTrash } from 'react-icons/bs';

const api = axios.create({ baseURL: 'http://localhost:3000/' });

const ContainerModal = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
height: 100%;
flex-direction:column;
`;
const Row = styled.div`
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
flex-direction: column;
`;

const ButtonConfirm = styled.button`
    display:flex;
    height: 55px;
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

const ButtonCancel = styled.button`
    display:flex;
    height: 55px;
    width: 200px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.darkRed};
    border: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.darkRed};
    border-radius: 5px;
    align-items: center;
    transform: translate(0%,-50%);
    justify-content: center;
    text-align: center;
    cursor: pointer;
    margin-top: 5%;
    margin-bottom: 5%;
    :hover{
    background-color: ${({ theme }) => theme.colors.darkRed};
    color: ${({ theme }) => theme.colors.background};
    border: solid;
    border-color: ${({ theme }) => theme.colors.darkRed};
    }
    @media(max-width:860px){
        width:150px;
    } 
`;

const RemoveGroup = styled.button`
  display:flex;
    align-items:center;
    justify-content:center;
    font-family: Roboto;
    font-size: 100%;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.background};
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
    width: '50vw',
    height: '35vh',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #609694',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

  },

}));

export default function ModalGroup(context) {
  const { group_id } = context;

  async function handleSubmit() {
    try {
      const Validate = await api.delete(`api/group/${group_id}`);
      console.log(Validate.data);
      notification.open({
        message: 'Sucesso!',
        description:
          'O grupo removido com sucesso.',
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
          <TitleModal>Apagar grupo</TitleModal>
        </Row>
        <Ajust>
          <Row>
            <ButtonCancel onClick={handleClose}>Cancelar</ButtonCancel>
          </Row>
          <Row>
            <ButtonConfirm
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
                handleClose();
              }}
            >
              Confirmar
            </ButtonConfirm>
          </Row>
        </Ajust>
      </ContainerModal>
    </div>
  );
  return (
    <div>
      <RemoveGroup onClick={handleOpen}>
        <BsTrash size={22} style={{ color: '#AA4545', cursor: 'pointer' }} />
      </RemoveGroup>
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
