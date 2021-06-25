import React, { useState } from 'react';
import styled from 'styled-components';
import { CloseOutlined, EditOutlined } from '@ant-design/icons';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {
  Button,
} from 'react-bootstrap';
import AddCategory from '../AddCategory';

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  //margin-top: 1%;
`;

const Btn = styled(Button)`
    margin-left: 10px;
    height: 35px;
    width: 35px;
    background-color: ${({ theme }) => theme.colors.darkGreen};
    color: white;
    cursor:pointer;
    outline:none;
    margin-right:2%;
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
    height: '15vh',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #609694',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'auto',
  },

}));

export default function CategoryButtons() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
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
      <AddCategory closeModal={handleState} />
    </div>
  );

  return (
    <div>
      <Line>
        <Btn onClick={handleOpen}><EditOutlined /></Btn>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
        <Btn>
          <CloseOutlined />
        </Btn>
      </Line>
    </div>
  );
}
