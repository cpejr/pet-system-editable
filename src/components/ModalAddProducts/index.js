import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react';
import AddProducts from '../AddProducts';

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

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <AddProducts/>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Adicionar produto
      </button>
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
