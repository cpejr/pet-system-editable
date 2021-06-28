import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {
  Button,
} from 'react-bootstrap';
import { EditOutlined } from '@ant-design/icons';
import ModalEditSubcategory from '../../Modals/ModalEditSubcategory';

const ButtonEdit = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor:pointer;
  border: none;
  background:none;
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
    height: '22vh',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #609694',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 2),
    overflow: 'auto',

  },

}));

/*eslint-disable*/
export default function EditSubcategory( { subcategory }) {
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
    <ModalEditSubcategory closeModal = {handleState} subcategory={subcategory} />
  </div>
  );

  return (
    <div>
      <ButtonEdit onClick={handleOpen}>
        <EditOutlined />
      </ButtonEdit>
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