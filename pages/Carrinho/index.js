import React from 'react';
import Header from "../../src/components/Header"
import {
    CarrinhoIcon, CarrinhoText, CarrinhoTitle
} from "../../src/components/CarrinhoComponents"
import CarrinhoCard from "../../src/components/CarrinhoCard";
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
            {products.map((p) => (
                <CarrinhoCard product={p} key={p.product_id} />
            ))}
        </>
    )
}