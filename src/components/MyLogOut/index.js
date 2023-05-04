import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useAuth } from '../../contexts/AuthContext';
import Section from './styles';

export default function MyLogOut() {
  const [open, setOpen] = React.useState(false);
  const { logout } = useAuth();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Section variant="outlined" color="primary" onClick={handleClickOpen}>
        Sair
      </Section>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Sair</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Você tem certeza que deseja sair ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Link href="http://localhost:3000/login" rel="login">
            <Button onClick={() => { handleClose(); logout(); }} color="secondary" autoFocus>
              Sair
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
