import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {
  Button,
} from 'react-bootstrap';
import React, { useState } from 'react';
import styled from 'styled-components';
import AddProducts from '../AddProducts';

const ButtonAdd = styled(Button)`
  height: 50px;
  width: 100%;
  font-family: Roboto;
  font-size: 100%;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: white;
  border: 0;
  margin-left: 8%;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  @media (max-width: 1010px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    width: 20%;
    height: 50px;
  }
  @media (max-width: 560px) {
    display: none;
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
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    width: '75vh',
    height: '70vh',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #609694',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'auto',
  },

}));
/*eslint-disable*/
export default function ModalAddProducts({ categories, att, setAtt}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleState = () => {
    handleClose()
  }
  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <AddProducts closeModal = {handleState} categories={categories} setAtt={setAtt} att={att} />
    </div>
  );

  return (
    <div>

      <ButtonAdd onClick={handleOpen}>
        Adicionar produto
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
