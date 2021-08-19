import React from 'react';
import Header from "../../src/components/Header"
import {
    CarrinhoBody, CarrinhoFinalButton, CarrinhoFrete, CarrinhoFreteButton, CarrinhoFreteInputFalso, CarrinhoIcon, CarrinhoText,
    CarrinhoTitle, CarrinhoTotal, CarrinhoValor, CarrinhoValorText, CarrinhoValorTitle,
} from "../../src/components/CarrinhoComponents"
import CarrinhoCard from "../../src/components/CarrinhoComponents/CarrinhoCard";
import { MdShoppingCart } from "react-icons/md"
import { useEffect, useState } from "react"
import api from "../../src/utils/api"

export default function Carrinho() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        api.get('products').then((res) => {
            setProducts(res.data);
        })
    }, []);
    return (
        <>
            <Header />
            <CarrinhoTitle>
                <CarrinhoText>Carrinho de Compras</CarrinhoText>
                <CarrinhoIcon>
                    <MdShoppingCart size="100%" color="#609694" />
                </CarrinhoIcon>
            </CarrinhoTitle>
            <CarrinhoBody>
                <div>
                    {products.map((p) => (
                        <CarrinhoCard product={p} key={p.product_id} />
                    ))}
                </div>
                <CarrinhoValor>
                    <CarrinhoValorTitle>Digite o seu CEP</CarrinhoValorTitle>
                    <CarrinhoFrete>
                        <CarrinhoFreteInputFalso>00000-00</CarrinhoFreteInputFalso>
                        <CarrinhoFreteButton>Calcular</CarrinhoFreteButton>
                    </CarrinhoFrete>
                    <CarrinhoTotal>
                        <CarrinhoValorText>SubTotal</CarrinhoValorText>
                        <CarrinhoValorText>R$SubTotal</CarrinhoValorText>
                        <CarrinhoValorText>Frete</CarrinhoValorText>
                        <CarrinhoValorText>R$Frete</CarrinhoValorText>
                        <CarrinhoValorText>Total</CarrinhoValorText>
                        <CarrinhoValorText>R$Total</CarrinhoValorText>
                    </CarrinhoTotal>
                    <CarrinhoFinalButton>Continuar</CarrinhoFinalButton>
                </CarrinhoValor>
            </CarrinhoBody>
        </>
    )
}