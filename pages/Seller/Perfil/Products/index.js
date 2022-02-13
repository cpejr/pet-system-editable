import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Products from '../../../../src/components/Products';
import ModalAddProducts from '../../../../src/components/ModalAddProducts';
import EditAddRemoveSection from '../../../../src/components/Mobile/EditAddRemoveSection';
import ModalGroup from '../../../../src/components/ModalGroup';
import ModalGroupEdit from '../../../../src/components/ModalGroupEdit';
import ModalGroupRemove from '../../../../src/components/ModalGroupRemove';
import { Title, PerfilStoreMenu } from '../../../../src/components/index';
import {
  ProductContainer, MarketContainer,
  EditGroup, RemoveGroup, Group, Groups, Botoes,
} from './styles';
import api from '../../../../src/utils/api';
import withAuthStore from '../../../../src/components/WithAuth/WithAuthStore';

toast.configure();

const Perfil = () => {
  const [categories, setCategories] = useState([]);
  const [groups, setGroups] = useState([]);
  const [products, setProducts] = useState([]);
  const [att, setAtt] = useState(false);

  useEffect(() => {
    api.get('group').then((res) => {
      setGroups(res.data);
    }).catch(() => {
      toast('Erro ao obter grupos', { position: toast.POSITION.BOTTOM_RIGHT });
    });
    api.get('/product').then((res) => {
      setProducts(res.data);
    }).catch(() => {
      toast('Erro ao obter produtos', { position: toast.POSITION.BOTTOM_RIGHT });
    });
    api.get('/category').then((res) => {
      setCategories(res.data);
    }).catch(() => {
      toast('Erro ao obter cateogrias', { position: toast.POSITION.BOTTOM_RIGHT });
    });
  }, [att]);

  const PersonalGroups = () => (
    <div>
      <Group.Title>
        <Groups>Todos os meus produtos</Groups>
      </Group.Title>
      <Products
        products={products}
        categories={categories}
        setAtt={setAtt}
        att={att}
      />
      {groups?.length > 0
        && groups.map((group) => (
          <div key={group.group_id}>
            <Group.Title>
              <Groups>{group.name}</Groups>
              <EditGroup>
                <ModalGroupEdit group={group} setAtt={setAtt} att={att} />
              </EditGroup>
              <RemoveGroup>
                <ModalGroupRemove group={group} setAtt={setAtt} att={att} />
              </RemoveGroup>
            </Group.Title>
            <Products
              group={group}
              categories={categories}
              setAtt={setAtt}
              att={att}
            />
          </div>
        ))}
    </div>
  );
  return (
    <div>
      <Title>Perfil da loja:</Title>
      <PerfilStoreMenu selectedItem="Meus produtos" />
      <EditAddRemoveSection categories={categories} setAtt={setAtt} att={att} />
      <MarketContainer />
      <ProductContainer>
        <Botoes>
          <ModalAddProducts categories={categories} setAtt={setAtt} att={att} />
          <ModalGroup />
        </Botoes>
        <ProductContainer.Col2>
          <Group>
            <PersonalGroups />
          </Group>
        </ProductContainer.Col2>
      </ProductContainer>
    </div>
  );
};

export default withAuthStore(Perfil);
