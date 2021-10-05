import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { notification } from 'antd';
import { useAuth } from '../../contexts/AuthContext';
import Title from '../Title';
import {
  Container, ConfirmButton, Submit, Caixa,
} from './styles';

export default function MyDatasMobile() {
  // const [checkedCredito, setCheckedCredito] = useState(false);
  // const handleClickCredito = () => setCheckedCredito(!checkedCredito);

  // const [checkedDebito, setCheckedDebito] = useState(false);
  // const handleClickDebito = () => setCheckedDebito(!checkedDebito);

  // const [checkedBoleto, setCheckedBoleto] = useState(false);
  // const handleClickBoleto = () => setCheckedBoleto(!checkedBoleto);

  const { user, forgottenPassword } = useAuth();

  const [Open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function sendResetEmail(event) {
    event.preventDefault();
    try {
      await forgottenPassword(user.email);
      setOpen(false);
      notification.open({
        message: 'Sucesso!',
        description:
            'Email enviado com sucesso.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    } catch (error) {
      console.log(error);
      notification.open({
        message: 'Erro!',
        description:
            'Erro ao cadastrar usuário.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    }
  }

  return (
    <Caixa>
      <Container>
        <Title>Alterar Senha</Title>
        <DialogContent>Clique no botão abaixo para que um link seja enviado para seu email com os dados de alteração de senha.</DialogContent>
        <Dialog
          open={Open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Recuperação de senha</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Você tem certeza que deseja enviar um email para recuperação de senha ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancelar
            </Button>
            <Button onClick={sendResetEmail} color="primary" autoFocus>
              Enviar
            </Button>
          </DialogActions>
        </Dialog>
        <ConfirmButton onClick={handleClickOpen}>
          <Submit>Confirmar</Submit>
        </ConfirmButton>
      </Container>
    </Caixa>
  );
}
