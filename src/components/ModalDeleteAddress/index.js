import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import { notification } from 'antd';
import { BsTrash } from 'react-icons/bs';
import {
  ContainerModal, Row, TitleModal, Ajust, ButtonConfirm,
  ButtonCancel, GarbageIcon, 
} from './styles';

const api = axios.create({ baseURL: 'http://localhost:3000/' });

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

export default function ModalDeleteAddress({ address_id, loadAddresses }) {
  async function handleSubmit() {
    try {
      await api.delete(`api/address/${address_id}`);
      notification.open({
        message: 'Sucesso!',
        description: 'Endereço deletado com sucesso.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    } catch (error) {
      console.error(error); //eslint-disable-line
      notification.open({
        message: 'Erro!',
        description: 'Tivemos um problema ao apagar o endereço que você deseja!',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    }
    loadAddresses();
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
          <TitleModal>Apagar endereço</TitleModal>
        </Row>
        <Ajust>
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

            <ButtonCancel onClick={handleClose}>Cancelar</ButtonCancel>
          </Row>
        </Ajust>
      </ContainerModal>
    </div>
  );
  return (
    <div>
      <GarbageIcon onClick={handleOpen}>
        <BsTrash />
      </GarbageIcon>
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
