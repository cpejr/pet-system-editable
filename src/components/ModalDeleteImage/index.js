import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { toast } from 'react-toastify';
import { BsTrash } from 'react-icons/bs';
import api from '../../utils/api';
import {
  ContainerModal, Row, TitleModal, Ajust, ButtonConfirm,
  ButtonCancel, GarbageIcon,
} from './styles';

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

export default function ModalDeleteImage({ image_id, getAllImages }) {
  async function deleteImage() {
    try {
      await api.delete(`/image/${image_id}`);
      toast('Imagem deletada com sucesso!', { position: toast.POSITION.BOTTOM_RIGHT });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(error);
      toast('Erro ao deletar a imagem.', { position: toast.POSITION.BOTTOM_RIGHT });
    }
    getAllImages();
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
          <TitleModal>Apagar Imagem?</TitleModal>
        </Row>
        <Ajust>
          <Row>
            <ButtonCancel onClick={handleClose}>Cancelar</ButtonCancel>
            <ButtonConfirm
              onClick={(e) => {
                e.preventDefault();
                deleteImage();
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
