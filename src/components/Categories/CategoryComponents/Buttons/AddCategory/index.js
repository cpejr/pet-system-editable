import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {
  Button,
} from 'react-bootstrap';
import { PlusOutlined } from '@ant-design/icons';
import ModalAddCategory from '../../Modals/ModalAddCategory';

const ButtonAdd = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  cursor:pointer;
  border: none;
  margin-left: 20%;
`;

const nameButton = styled.p`
  align-items: center;
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
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #609694',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 2),
    overflow: 'auto',

  },

}));

export default function AddCategory({ addCategory }) {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleState = () => {
    handleClose();
  };
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <ModalAddCategory addCategory={addCategory} closeModal={handleState} />
    </div>
  );

  return (
    <div>
      <ButtonAdd onClick={handleOpen}>
        <PlusOutlined />
        <nameButton>Adicionar Categoria</nameButton>
      </ButtonAdd>
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
