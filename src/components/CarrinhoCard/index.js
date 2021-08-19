import React, { useState } from 'react';
import { IoTrashOutline } from "react-icons/io5"
import { FaRegMinusSquare, FaRegPlusSquare } from "react-icons/fa"
import Image from 'next/image';
import styled from "styled-components";
import { CarrinhoText } from "../CarrinhoComponents";

const CarrinhoCardWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 65%;
margin-bottom: 1em;
margin-left: 0.3em;
border: 1px solid rgba(0, 0, 0, 0.6);
box-sizing: border-box;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
height: 100px;
padding: 5px;
`;

const CarrinhoCardInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100%;
width: 100%;
`;

const CarrinhoCardInfoBottom = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`;
const CarrinhoCardText = styled.p`
font-family: Roboto;
font-size: 1.1em;
text-align: center;
margin: 0;
  @media screen and (max-width: 900px) {
    font-size: 1em;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.6em;
  }
`;
const CarrinhoCardInfoQuantity = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 55px;
`;

const CarrinhoCardIcon = styled.div`
display: flex;
justify-content: flex-start;
height: 100%;
`;

export default function CarrinhoCard(props) {
    const { product } = props;
    const [quantity, setQuantity] = useState(0);
    function handlePlus(){
        setQuantity(quantity+1);
    }
    function handleMinus(){
        if (quantity > 0)
            setQuantity(quantity-1);
        else
            setQuantity(0);
    }
    return (
        <CarrinhoCardWrapper>
            {/* <Image src="" alt="racao" width="95px" height="95px" /> */}
            <CarrinhoCardInfo>
                <CarrinhoText>{ product.product_name }</CarrinhoText>
                <CarrinhoCardInfoBottom>
                    <CarrinhoCardText>R${product.price}</CarrinhoCardText>
                    <CarrinhoCardInfoQuantity>
                        <FaRegMinusSquare size="18px" onClick={() => handleMinus()}/>
                        <CarrinhoCardText>{quantity}</CarrinhoCardText>
                        <FaRegPlusSquare size="18px" onClick={() => handlePlus()}/>
                    </CarrinhoCardInfoQuantity>
                </CarrinhoCardInfoBottom>
            </CarrinhoCardInfo>
            <CarrinhoCardIcon>
                <IoTrashOutline size="25px" cursor="pointer"/>
            </CarrinhoCardIcon>
        </CarrinhoCardWrapper>
    )
}