import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react';
import styled from 'styled-components';
import Filter from '../Filter';

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
    height: '60vh',
    backgroundColor: '#F8F8F8',
    border: '2px solid #609694',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'auto',

  },

}));

const ButtonFilter = styled.button`
display:flex;
align-items:center;
justify-content:center;
background-color:${({ theme }) => theme.colors.mediumGreen};
border:none;
color:${({ theme }) => theme.colors.titleGray};
font-family:Roboto;
font-size:18px;
`;

const Container = styled.div`
display:none;
@media(max-width:560px){
  display:flex;
}
`;

const BodyContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
`;

const ConfirmButton = styled.button`
    height: 30px;
    width: 60%;
    font-family: Roboto;
    font-size: 100%;
    font-weight: 500;
    background-color:${({ theme }) => theme.colors.blueButton};
    border: 1;
    border-radius: 5px;
    cursor:pointer;
    outline:none;
    color:${({ theme }) => theme.colors.titleGray};
    font-size:14px;
    margin-top:5%;
    border:none;


`;
/*eslint-disable*/
export default function ModalAddProducts() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <BodyContainer style={modalStyle} className={classes.paper}>
      <Filter/>
      <ConfirmButton onClick={handleClose} >Confirmar</ConfirmButton>
    </BodyContainer>
  );

  return (
    <div>
      <ButtonFilter type="button" onClick={handleOpen}>
        Filtro
      </ButtonFilter>
      <Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        {body}
      </Modal>
      </Container>
    </div>
  );
}
