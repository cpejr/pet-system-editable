import React, { useState } from 'react';
import styled from 'styled-components';
import { CgTikcode, CgShoppingCart, CgDollar } from 'react-icons/cg';
import { HiOutlineHome } from 'react-icons/hi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FiUserPlus } from 'react-icons/fi';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:row;
width:100%;
`;

Container.Col1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:33,33%;
margin-right:7%;
 `;
Container.Col2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:33,33%;
margin-right:7%;
   `;
Container.Col3 = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:33,33%;
`;

const Card = styled.button`
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
cursor: pointer;
background-color:${({ theme }) => theme.colors.background};
border-width:1px;
border-radius:10px;
border-color:${({ theme }) => theme.colors.borderBoxColor};
width:100px;
height:140px;
`;
Card.Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;
Card.Row2 = styled.p`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;

const Row1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
margin-bottom:30%;
`;
const Row2 = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`;
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
    font-weight: 300;
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: white;
    border: 0;
    border-radius: 5px;
    align-items: center;
    text-align: center;
    transform: translate(0%,-50%);
    justify-content: center;
    text-align: center;
    cursor: pointer;
    margin-top:5%;
    @media(max-width:860px){
        width:150px;
        margin-top:30%;
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
    width: '35vw',
    height: '25vh',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #609694',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

  },

}));

export default function AdminCards() {
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
        <TitleModal>Ajustar Comissão</TitleModal>
        <Ajust>
          <Ajust.Col1>
            Porcentagem:
          </Ajust.Col1>
          <Ajust.Col2 placeholder="% 00,0" />
        </Ajust>
        <ButtonConfirm>Confirmar ajuste</ButtonConfirm>
      </ContainerModal>
    </div>
  );
  return (
    <div>
      <Container>
        <Container.Col1>
          <Row1>
            <Card>
              <Card.Row1>
                <CgTikcode size={50} style={{ color: '#609694' }} />
              </Card.Row1>
              <Card.Row2>
                Perfil de controle
              </Card.Row2>
            </Card>
          </Row1>
          <Row2>
            <Card>
              <Card.Row1>
                <IoMdNotificationsOutline size={50} style={{ color: '#609694' }} />
              </Card.Row1>
              <Card.Row2>
                Notificações
              </Card.Row2>
            </Card>
          </Row2>
        </Container.Col1>
        <Container.Col2>
          <Row1>
            <Card>
              <Card.Row1>
                <HiOutlineHome size={50} style={{ color: '#609694' }} />
              </Card.Row1>
              <Card.Row2>
                Lojas cadastradas
              </Card.Row2>
            </Card>
          </Row1>
          <Row2>
            <Card>
              <Card.Row1>
                <CgShoppingCart size={50} style={{ color: '#609694' }} />
              </Card.Row1>
              <Card.Row2>
                Vendas
              </Card.Row2>
            </Card>
          </Row2>
        </Container.Col2>

        <Container.Col3>
          <Row1>
            <Card onClick={handleOpen}>
              <Card.Row1>
                <CgDollar size={50} style={{ color: '#609694' }} />
              </Card.Row1>
              <Card.Row2>
                Comissões
              </Card.Row2>
            </Card>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </Row1>
          <Row2>
            <Card>
              <Card.Row1>
                <FiUserPlus size={50} style={{ color: '#609694' }} />
              </Card.Row1>
              <Card.Row2>
                Solicitação de lojas
              </Card.Row2>
            </Card>
          </Row2>
        </Container.Col3>
      </Container>

    </div>
  );
}
