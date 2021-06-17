import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const ContainerModal = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
flex-direction:column;
`;

const TitleModal = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
font-family:Roboto;
font-size:24px;
margin-bottom:5%;
@media(max-width:860px){
        width:100%;
        font-size:16px;
        margin-bottom:20%;
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

Ajust.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:50%;
font-family:Roboto;
@media(max-width:860px){
        width:100%;
        font-size:14px;
    } 
`;

Ajust.Col2 = styled.input`
display:flex;
align-items:center;
justify-content:center;
width:50%;
font-family:Roboto;
height:40px;
border-radius:10px;
border-color:${({ theme }) => theme.colors.borderBoxColor};
@media(max-width:860px){
        width:100%;
        margin-top:2%;
        font-size:12px;
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
    text-align: center;
    transform: translate(0%,-50%);
    justify-content: center;
    text-align: center;
    cursor: pointer;
    margin-top:5%;
    :hover{
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.background};
    border: solid;
    border-color: ${({ theme }) => theme.colors.darkGreen};
    }
    @media(max-width:860px){
        width:150px;
        margin-top:30%;
    } 
`;

const AddGroup = styled.button`
    font-family: Roboto;
    font-size: 100%;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.mediumGreen};
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
    width: '30vw',
    height: '30vh',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #609694',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

  },

}));

export default function ModalGroup() {
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
    <div style={modalStyle} className={classes.paper}>
      <ContainerModal>
        <TitleModal>Adicione um grupo</TitleModal>
        <Ajust>
          <Ajust.Col1>
            Nome do grupo:
          </Ajust.Col1>
          <Ajust.Col2 placeholder="" require />
        </Ajust>
        <ButtonConfirm>Confirmar grupo</ButtonConfirm>
      </ContainerModal>
    </div>
  );
  return (
    <div>
      <AddGroup onClick={handleOpen}>
        Adicionar Grupo
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
