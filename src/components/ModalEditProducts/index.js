import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { BiEditAlt } from 'react-icons/bi';
import React, { useState } from 'react';
import styled from 'styled-components';
import EditProducts from '../EditProducts';

const EditGroup = styled.button`
  display: flex;
  align-Self: flex-end;
  background-color: transparent;
  border: 0;
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 1%;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
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
export default function ModalEditProducts({ product, categories, att, setAtt }) {
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
      <EditProducts closeModal={handleState} product={product} categories={categories} setAtt={setAtt} att={att} />
    </div>
  );

  return (
    <div>
      <EditGroup onClick={handleOpen}>
        <BiEditAlt size={22} style={{ color: "#AAABB0", cursor: "pointer" }} />
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
