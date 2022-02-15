import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { notification } from 'antd';
import { BiEditAlt } from 'react-icons/bi';
import { useAuth } from '../../contexts/AuthContext';
import Title from '../Title';
import {
  ContainerModal, Row, Ajust, Ajust2, InputNameGroup, ButtonConfirm, EditGroup,
  CategoryContainer, DivInput,
} from './styles';
import api from '../../utils/api';

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
    width: '60vw',
    height: 'fit-content',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #609694',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

  },
}));

export default function ModalGroup({ group, setAtt, att }) {
  const [groupName, setGroupName] = useState(group.name);
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);

  const { store } = useAuth();

  async function handleGroupChange(event) {
    setGroupName(event.target.value);
  }
  function isChecked(product_id) {
    let auxiliar = 0;
    for (let i = 0; i < currentProducts.length; i++) {
      if (currentProducts[i].product_id === product_id) {
        auxiliar += 1;
      }
    }
    if (auxiliar > 0) {
      return true;
    }
    return false;
  }

  async function handleSubmit() {
    const body = {
      name: groupName,
    };

    try {
      await api.put(`/group/${group.group_id}`, body);
      await api.put('/productsOfGroup', { currentProducts, groupId: group.group_id });
      setAtt(!att);
      notification.open({
        message: 'Sucesso!',
        description:
          'O grupo foi modificado com sucesso.',
        className: 'ant-notification',
        top: '100px',
        style: {
          width: 600,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    api.get(`/productsByStore/${store.firebase_id_store}`).then((res) => {
      setProducts(res.data);
    });
    api.get(`/productsOfGroup/${group.group_id}`).then((res) => {
      setCurrentProducts(res.data);
    });
  }, []);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <ContainerModal>
        <Row>
          <Title>Editar grupo</Title>
        </Row>
        <Row>
          <Ajust>
            <Ajust.Col1>
              Nome:
            </Ajust.Col1>
            <InputNameGroup placeholder="" require value={groupName} onChange={handleGroupChange} />
          </Ajust>
        </Row>
        <Row>
          <Ajust2>
            <Ajust.Col2>
              Produtos do grupo:
            </Ajust.Col2>
            {products?.length > 0
        && products.map((product) => (
          <DivInput>
            <CategoryContainer.Row2.Col1>
              <input
                value={product.product_id}
                onClick={(e) => {
                  if (e.target.checked) {
                    setCurrentProducts([...currentProducts, { product_id: e.target.value }]);
                  } else {
                    const aux = currentProducts;
                    const index = aux.findIndex((x) => x.product_id === e.target.value);
                    if (index !== -1) {
                      aux.splice(index, 1);
                      setCurrentProducts([...aux]);
                    }
                  }
                }}
                defaultChecked={isChecked(product.product_id)}
                type="checkbox"
              />
            </CategoryContainer.Row2.Col1>
            <CategoryContainer.Row2.Col2>
              {product.product_name}
            </CategoryContainer.Row2.Col2>
          </DivInput>
        ))}
          </Ajust2>
        </Row>
        <Row>
          <ButtonConfirm onClick={(e) => {
            e.preventDefault();
            handleSubmit();
            handleClose();
          }}
          >
            Confirmar

          </ButtonConfirm>
        </Row>
      </ContainerModal>
    </div>
  );
  return (
    <div>
      <EditGroup onClick={handleOpen}>
        <BiEditAlt size={22} style={{ color: '#AAABB0', cursor: 'pointer' }} />
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
