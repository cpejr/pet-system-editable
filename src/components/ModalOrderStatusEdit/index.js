import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import axios from 'axios';
import { notification } from 'antd';
import { BiEditAlt } from 'react-icons/bi';

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
margin-bottom:5%;
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

const EditGroup = styled.button`
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
    width: '60vw',
    height: '35vh',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #609694',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

  },

}));

export default function ModalGroup({ order, att, setAtt }) {
  const [selectedStatus, setSelectedStatus] = useState(order.status);

  const allStatus = [
    'Enviado',
    'Em andamento',
    'Finalizado',
  ];

  async function handleSubmit() {
    const body = {
      order_id: order.order_id,
      status: selectedStatus,
    };

    try {
      await api.put('/api/order/', body);
      setAtt(!att);
      notification.open({
        message: 'Sucesso!',
        description:
          'O grupo foi modificado com sucesso.',
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
          <TitleModal>Modifique o status do pedido</TitleModal>
        </Row>
        <Row>
          <Ajust>
            <Ajust.Col1>
              Novo status:
            </Ajust.Col1>
            <Select
              labelId="label"
              id="select"
              value={selectedStatus}
              input={<OutlinedInput />}
              style={{ width: '80%', height: '40px' }}
            >
              {allStatus.map((status) => (
                <MenuItem
                  key={status}
                  value={status}
                  onClick={() => setSelectedStatus(status)}
                >
                  {status}
                </MenuItem>
              ))}
            </Select>
          </Ajust>
        </Row>
        <Row>
          <ButtonConfirm onClick={(e) => {
            e.preventDefault();
            handleSubmit();
            handleClose();
          }}
          >
            Confirmar

          </ButtonConfirm>
        </Row>
      </ContainerModal>
    </div>
  );
  return (
    <div>
      <EditGroup onClick={handleOpen}>
        <BiEditAlt size={22} style={{ color: '#AAABB0', cursor: 'pointer' }} />
      </EditGroup>
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
