import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {
  Button,
} from 'react-bootstrap';
import React, { useState } from 'react';
import styled from 'styled-components';
import AddProducts from '../AddProducts';

const ButtonAdd = styled(Button)`
display:flex;
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
margin-top:2%;
margin-botton:2%;
transform: translate(0%,-50%);
justify-content: center;
text-align: center;
cursor: pointer;
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
    width: '65vw',
    height: '80vh',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #609694',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'auto',

  },

}));
/*eslint-disable*/
export default function ModalAddProducts() {
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
      <AddProducts closeModal = {handleState}/>
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
