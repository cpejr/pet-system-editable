import React, { useEffect, useState } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  CarrinhoBody, CarrinhoFinalButton, CarrinhoIcon, CarrinhoText,
  CarrinhoTitle, CarrinhoTotal, CarrinhoValor, CarrinhoValorText, SelectAddressBody, SelectDiv, SelectTitle, SelectedAddressBody,
} from '../../src/components/CarrinhoComponents';
import CarrinhoCard from '../../src/components/CarrinhoComponents/CarrinhoCard';
import { useAuth } from '../../src/contexts/AuthContext';
import SelectAddress from '../../src/components/SelectAddress';
import { ContainerDatas, BoxDatasCart } from '../../src/components/MyAdresses/styles';
import api from '../../src/utils/api';

toast.configure();

export default function Carrinho() {
  const [products, setProducts] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState();
  const [addressId, setAddressId] = useState();
  const [taxByRegion, setTaxByRegion] = useState();
  const [att, setAtt] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [shippingTax, setShippingTax] = useState();
  const { user } = useAuth();
  const router = useRouter();

  const handleChange = (value) => {
    setAddress(addresses?.find((addressFilter) => addressFilter.address_id === value));
    setAddressId(value);
  };

  useEffect(() => {
    if (user && address && taxByRegion) {
      switch (address?.region) {
        case 'Barreiro':
          setShippingTax(taxByRegion[0]);
          break;

        case 'Centro Sul':
          setShippingTax(taxByRegion[1]);
          break;

        case 'Leste':
          setShippingTax(taxByRegion[2]);
          break;

        case 'Nordeste':
          setShippingTax(taxByRegion[3]);
          break;

        case 'Noroeste':
          setShippingTax(taxByRegion[4]);
          break;

        case 'Norte':
          setShippingTax(taxByRegion[5]);
          break;

        case 'Oeste':
          setShippingTax(taxByRegion[6]);
          break;

        case 'Pampulha':
          setShippingTax(taxByRegion[7]);
          break;

        default:
          setShippingTax(taxByRegion[8]); // Venda Nova
          break;
      }
    }
  }, [address]);

  useEffect(() => {
  }, [products]);

  useEffect(() => {
    let somaPrecos = 0;
    if (user) {
      try {
        api.get(`/addresses/${user.firebase_id}`).then((response) => {
          setAddresses(response.data);
        });
      } catch (error) {
        console.error(error);
      }
      try {
        api.get('/cart/firebase').then((res) => {
          if (res?.data?.length > 0) {
            res?.data?.forEach((product) => {
              somaPrecos += product.price * product.amount;
            });
            setSubTotal(parseFloat(somaPrecos.toFixed(2)));
            api.get(`/store/${res.data[0].firebase_id_store}`).then((store) => {
              const regionShippingTax = store?.data?.shipping_tax.split(',');
              setTaxByRegion(regionShippingTax);
              api.get('address/userMain').then((responseMainAddress) => {
                if (regionShippingTax && responseMainAddress?.data !== 'Usuário não está logado' && !shippingTax) {
                  switch (responseMainAddress?.data?.region) {
                    case 'Barreiro':
                      setShippingTax(regionShippingTax[0]);
                      break;

                    case 'Centro Sul':
                      setShippingTax(regionShippingTax[1]);
                      break;

                    case 'Leste':
                      setShippingTax(regionShippingTax[2]);
                      break;

                    case 'Nordeste':
                      setShippingTax(regionShippingTax[3]);
                      break;

                    case 'Noroeste':
                      setShippingTax(regionShippingTax[4]);
                      break;

                    case 'Norte':
                      setShippingTax(regionShippingTax[5]);
                      break;

                    case 'Oeste':
                      setShippingTax(regionShippingTax[6]);
                      break;

                    case 'Pampulha':
                      setShippingTax(regionShippingTax[7]);
                      break;

                    default:
                      setShippingTax(regionShippingTax[8]); // Venda Nova
                      break;
                  }
                  setProducts(res.data);
                }
              });
            });
          } else {
            setProducts(res.data);
          }
        });
      } catch (err) {
        console.error(err);
        toast('Erro', { position: toast.POSITION.BOTTOM_RIGHT });
      }
    }
  }, [user, att]);

  async function handleSubmit() {
    try {
      await api.put(`/address/userMain/${address.address_id}`);
      router.push('/Checkout');
    } catch (error) {
      console.error(error);
    }
  }

  if (!address) {
    return (
      <>
        <CarrinhoTitle>
          <CarrinhoText>Carrinho de Compras</CarrinhoText>
          <CarrinhoIcon>
            <MdShoppingCart size="100%" color="#609694" />
          </CarrinhoIcon>
        </CarrinhoTitle>
        <SelectAddressBody>
          <SelectDiv>
            <SelectTitle>Selecione Seu Endereço: </SelectTitle>
            {addresses && (
              <SelectAddress
                name="Endereco"
                onChange={handleChange}
                value={addressId}
                addresses={addresses}
              />
            )}
          </SelectDiv>
        </SelectAddressBody>
      </>
    );
  }
  if (products.length > 0 && address && shippingTax) {
    return (
      <>
        <CarrinhoTitle>
          <CarrinhoText>Carrinho de Compras</CarrinhoText>
          <CarrinhoIcon>
            <MdShoppingCart size="100%" color="#609694" />
          </CarrinhoIcon>
        </CarrinhoTitle>
        <SelectedAddressBody>
          {addresses && (
          <SelectAddress
            name="Endereco"
            onChange={handleChange}
            value={addressId}
            addresses={addresses}
          />
          )}
        </SelectedAddressBody>

        <CarrinhoBody>
          <div>
            {products.map((p) => (
              <CarrinhoCard product={p} key={p.product_id} setSubTotal={setSubTotal} subTotal={subTotal} att={att} setAtt={setAtt} />
            ))}
          </div>
          <CarrinhoValor>
            <CarrinhoTotal>
              <CarrinhoValorText>SubTotal</CarrinhoValorText>
              <CarrinhoValorText>
                R$
                {subTotal}
              </CarrinhoValorText>
              <CarrinhoValorText>Frete:</CarrinhoValorText>
              <CarrinhoValorText>
                R$
                {shippingTax}
              </CarrinhoValorText>
              <CarrinhoValorText>Total</CarrinhoValorText>
              <CarrinhoValorText>
                R$
                {subTotal + parseFloat(shippingTax)}
              </CarrinhoValorText>
            </CarrinhoTotal>
            <CarrinhoFinalButton onClick={handleSubmit}>Continuar</CarrinhoFinalButton>
          </CarrinhoValor>
        </CarrinhoBody>
      </>
    );
  }

  return (
    <ContainerDatas>
      <BoxDatasCart>
        <p>Nenhum produto em seu carrinho</p>
      </BoxDatasCart>
    </ContainerDatas>
  );
}
