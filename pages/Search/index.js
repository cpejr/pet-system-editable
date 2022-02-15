/* eslint-disable react/jsx-pascal-case */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import api from '../../src/utils/api';
import { ContainerCategory, SearchContainer, TypeContainer } from './styles';
import {
  OrderSearch,
  Brands,
  Price,
  SearchCardsClosed,
  SearchCards,
  SearchCardsStore,
  SearchCardsStoreClosed,
  SearchHeader,
} from '../../src/components/index';

toast.configure();

export default function Search({ keyword, id, categories }) {
  const [products, setProducts] = useState([]);
  const [address, setAddress] = useState('Usuário não está logado');
  const [allStores, setAllStores] = useState([]);
  const [stores, setStores] = useState([]);
  const [price, setPrice] = useState([0, 5000]);
  const [categoria, setCategoria] = useState(id);
  const [checkedStore, setCheckedStore] = useState('#AAABB0');
  const [checkedProducts, setCheckedProducts] = useState('#609694');

  const handleClickStore = () => {
    setCheckedStore('#609694');
    setCheckedProducts('#AAABB0');
  };

  const handleClickProducts = () => {
    setCheckedProducts('#609694');
    setCheckedStore('#AAABB0');
  };

  const defineBackgroundColor = (category_id) => (categoria === category_id
    ? { backgroundColor: '#A6DAD8' }
    : { backgroundColor: '#F8F8F8' });

  const myLoader = ({ src }) => `https://s3-sa-east-1.amazonaws.com/petsystembucket/${src}`;

  useEffect(() => {
    try {
      api.get('address/userMain').then((response) => {
        setAddress(response.data);
      });
    } catch (err) {
      console.error(err);
      toast('Erro', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  }, []);

  useEffect(() => {
    if (Object.keys(allStores).length > 0) {
      try {
        api
          .get('products', { params: { price, category_id: categoria } })
          .then((res) => {
            if (keyword) {
              const FilteredProducts = res.data.filter((item) => item.product_name
                .toLowerCase()
                .includes(keyword.toLowerCase()));
              allStores.forEach((store) => {
                FilteredProducts.forEach((product) => {
                  if (product.firebase_id_store === store.firebase_id_store) {
                    product.shipping_tax = store.shipping_tax;
                    product.opening_time = store.opening_time;
                    product.closing_time = store.closing_time;
                  }
                });
              });
              setProducts(FilteredProducts);
            } else {
              allStores.forEach((store) => {
                res.data.forEach((product) => {
                  if (product.firebase_id_store === store.firebase_id_store) {
                    product.shipping_tax = store.shipping_tax;
                    product.opening_time = store.opening_time;
                    product.closing_time = store.closing_time;
                  }
                });
              });
              setProducts(res.data);
            }
          });
      } catch (err) {
        console.error(err);
        toast('Erro', { position: toast.POSITION.BOTTOM_RIGHT });
      }
    }
  }, [categoria, price, keyword, allStores]);

  useEffect(() => {
    try {
      api.get('store').then((res) => {
        if (Object.keys(res.data).length !== Object.keys(allStores).length
        && Object.keys(res.data).length !== 0) {
          setAllStores(res.data);
        }
        if (keyword) {
          const FilteredStores = res.data.filter((item) => item.company_name
            .toLowerCase()
            .includes(keyword.toLowerCase()));
          setStores(FilteredStores);
        } else {
          setStores(res.data);
        }
      });
    } catch (err) {
      console.error(err);
      toast('Erro', { position: toast.POSITION.BOTTOM_RIGHT });
    }
  }, [keyword]);

  if (checkedProducts === '#609694') {
    return (
      <div>
        <SearchHeader />
        <TypeContainer>
          <TypeContainer.Cols
            onClick={handleClickProducts}
            style={{ color: checkedProducts }}
          >
            Produtos
          </TypeContainer.Cols>
          <TypeContainer.Cols2
            onClick={handleClickStore}
            style={{ color: checkedStore }}
          >
            Lojas
          </TypeContainer.Cols2>
        </TypeContainer>
        <ContainerCategory>
          {categories.map((c) => (
            <ContainerCategory.Col>
              <ContainerCategory.submitImg
                style={defineBackgroundColor(c.category_id)}
                onClick={() => setCategoria(c.category_id)}
              >
                <Image
                  loader={myLoader}
                  src={c.img}
                  alt=""
                  width="50"
                  height="50"
                />
                <ContainerCategory.CategoryName>
                  {c.name}
                </ContainerCategory.CategoryName>
              </ContainerCategory.submitImg>
            </ContainerCategory.Col>
          ))}
          <ContainerCategory.Col>
            <ContainerCategory.submitImg onClick={() => setCategoria()}>
              <Image
                src="/images/Xvermelho.png"
                alt=""
                width="50"
                height="50"
              />
              <ContainerCategory.CategoryName>
                Limpar categoria
              </ContainerCategory.CategoryName>
            </ContainerCategory.submitImg>
          </ContainerCategory.Col>
        </ContainerCategory>
        <SearchContainer>
          <SearchContainer.Col1>
            <Price setPrice={setPrice} />
          </SearchContainer.Col1>
          <SearchContainer.Col2>
            {products.map((p) => (
              <SearchCards address={address} product={p} key={p.product_id} />
            ))}
            {products.map((p) => (
              <SearchCardsClosed product={p} key={p.product_id} />
            ))}
          </SearchContainer.Col2>
        </SearchContainer>
      </div>
    );
  }
  if (checkedProducts === '#AAABB0') {
    return (
      <div>
        <SearchHeader />
        <TypeContainer>
          <TypeContainer.Cols
            onClick={handleClickProducts}
            style={{ color: checkedProducts }}
          >
            Produtos
          </TypeContainer.Cols>
          <TypeContainer.Cols2
            onClick={handleClickStore}
            style={{ color: checkedStore }}
          >
            Lojas
          </TypeContainer.Cols2>
        </TypeContainer>
        <SearchContainer>
          <SearchContainer.Col>
            {stores?.map((store) => (
              (store.status && <SearchCardsStore address={address} store={store} key={store.firebase_id_store} />)
            ))}
            {stores?.map((store) => (
              (store.status && <SearchCardsStoreClosed address={address} store={store} key={store.firebase_id_store} />)
            ))}
          </SearchContainer.Col>
        </SearchContainer>
      </div>
    );
  }
}

export async function getServerSideProps({ query }) {
  const { data: categories } = await api.get('category');
  let { keyword, id } = query;
  if (keyword === undefined) {
    keyword = null;
  }
  if (id === undefined) {
    id = null;
  }
  return { props: { keyword, id, categories } };
}
