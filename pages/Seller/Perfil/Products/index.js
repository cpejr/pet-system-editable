import { useState, useEffect } from 'react';
import Order from '../../../../src/components/Filter/Order';
import Category from '../../../../src/components/Filter/Category';
import Products from '../../../../src/components/Products';
import ModalAddProducts from '../../../../src/components/ModalAddProducts';
import EditAddRemoveSection from '../../../../src/components/Mobile/EditAddRemoveSection';
import ModalGroup from '../../../../src/components/ModalGroup';
import ModalGroupEdit from '../../../../src/components/ModalGroupEdit';
import ModalGroupRemove from '../../../../src/components/ModalGroupRemove';
import { Title, PerfilStoreMenu } from '../../../../src/components/index';
import {
  Subtitle, Section, ProductContainer, MarketContainer,
  TitleMarket, EditGroup, RemoveGroup, Group, Groups, Botoes,
} from './styles';
import api from '../../../../src/utils/api';

export default function Perfil({ categories }) {
  const [groups, setGroups] = useState([]);
  const [products, setProducts] = useState([]);
  const [att, setAtt] = useState(false);

  useEffect(() => {
    api.get('group').then((res) => {
      setGroups(res.data);
    });
    api.get('/product').then((res) => {
      setProducts(res.data);
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
        <ProductContainer.Col1>
          <Order />
          <Category />
          <MarketContainer.Col2 />
          <Botoes>
            <ModalAddProducts categories={categories} setAtt={setAtt} att={att} />
            <ModalGroup />
          </Botoes>
        </ProductContainer.Col1>
        <ProductContainer.Col2>
          <Group>
            <PersonalGroups />
          </Group>
        </ProductContainer.Col2>
      </ProductContainer>
    </div>
  );
}

export async function getStaticProps() {
  const { data: categories } = await api.get('category');

  return {
    props: { categories },
    revalidate: 60, // 1 minuto
  };
}
