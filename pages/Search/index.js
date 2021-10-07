import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import api from '../../src/utils/api';
import HeaderSearch from '../../src/components/HeaderSearch';
import OrderSearch from '../../src/components/Filter/OrderSearch';
import Brands from '../../src/components/Filter/Brands';
import Price from '../../src/components/Filter/Price';
import SearchCards from '../../src/components/SearchCards';
import SearchCardsStore from '../../src/components/SearchCardsStore';
import FooterMobile from '../../src/components/Mobile/FooterMobile';
import SearchHeader from '../../src/components/Mobile/SearchHeader';

const ContainerCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  font-family: Roboto;
  @media (max-width: 700px) {
    display: none;
  }
`;

ContainerCategory.Col = styled.div`
  flex-direction: column;
  margin: 0 1% 0 1%;
`;

ContainerCategory.submitImg = styled.button`
  border: none;
  flex-direction: column;
  padding: 10%;
  border-radius: 10px;
  margin: 0% 1% 0% 0%;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    box-shadow: 0 16px 40px 0px rgba(112, 144, 176, 0.2);
    transform: scale(1.02);
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

ContainerCategory.CategoryName = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  margin-top: 2%;
  margin-bottom: 2%;
`;

SearchContainer.Col = styled.div`
  display: grid;
  margin: 2%;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  @media (max-width: 560px) {
    width: 100%;
  }
`;

SearchContainer.Col1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  min-width: 300px;
  flex-direction: column;
  @media (max-width: 880px) {
    width: 40%;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
SearchContainer.Col2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 75%;
  flex-direction: column;
  @media (max-width: 560px) {
    width: 100%;
  }
`;
const TypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2%;
`;
TypeContainer.Cols = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  border-width: 1px;
`;
TypeContainer.Cols2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 16px;
  border-bottom: solid;
  border-width: 1px;
`;

export default function Search(props) {
  const { keyword, id } = props;

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
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
    api.get('category').then((res) => {
      setCategories(res.data);
    });

    api
      .get('products', { params: { price, category_id: categoria } })
      .then((res) => {
        if (keyword) {
          const FilteredProducts = res.data.filter((item) => item.product_name.toLowerCase().includes(keyword.toLowerCase()));
          setProducts(FilteredProducts);
        } else {
          setProducts(res.data);
        }
      });

    api.get('store').then((res) => {
      if (keyword) {
        const FilteredStores = res.data.filter((item) => item.company_name.toLowerCase().includes(keyword.toLowerCase()));
        setStores(FilteredStores);
      } else {
        setStores(res.data);
      }
    });
  }, [categoria, price, keyword]);

  if (checkedProducts === '#609694') {
    return (
      <div>
        <HeaderSearch keyword={keyword} />
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
          {categories.map((categoria) => (
            <ContainerCategory.Col>
              <ContainerCategory.submitImg
                style={defineBackgroundColor(categoria.category_id)}
                onClick={() => setCategoria(categoria.category_id)}
              >
                <Image
                  loader={myLoader}
                  src={categoria.img}
                  alt=""
                  width="50"
                  height="50"
                />
                <ContainerCategory.CategoryName>
                  {categoria.name}
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
            <OrderSearch />
            <Price setPrice={setPrice} />
            <Brands categories={categories} key={categories.category_id} />
          </SearchContainer.Col1>
          <SearchContainer.Col2>
            {products.map((p) => (
              <SearchCards product={p} key={p.product_id} />
            ))}
          </SearchContainer.Col2>
        </SearchContainer>
        <FooterMobile />
      </div>
    );
  }
  if (checkedProducts === '#AAABB0') {
    return (
      <div>
        <HeaderSearch />
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
            {stores.map((store) => (
              <SearchCardsStore store={store} key={store.firebase_id_store} />
            ))}
          </SearchContainer.Col>
        </SearchContainer>
        <FooterMobile />
      </div>
    );
  }
}

export async function getServerSideProps({ query }) {
  let { keyword, id } = query;
  if (keyword === undefined) {
    keyword = null;
  }
  if (id === undefined) {
    id = null;
  }
  return { props: { keyword, id } };
}
