import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { GrLocation } from "react-icons/gr";
import { BsSearch, BsFillPersonFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { CgCloseO } from "react-icons/cg";
import Link from "next/link";
import styled from "styled-components";
import { useAuth } from "../../contexts/AuthContext";
import {
  ImageBox,
  TextBox,
  YourSpace,
  YourSpaceContainer,
  ItemBottomHeader,
  LogOut,
} from "./styles";

Header.Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 25vh;
  flex-direction: column;
  @media (max-width: 800px) {
    display: none;
  }
`;

Header.Top = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  height: 75%;
  background-color: ${({ theme }) => theme.colors.rose};
`;

Header.Bottom = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around; // space evenly
  height: 35%;
  background-color: ${({ theme }) => theme.colors.mediumGreen};
`;

export default function Header({ categories }) {
  const { user, store, logout } = useAuth();

  const [searchText, setSearchText] = useState("");

  const router = useRouter();

  const handleFilterSearchText = (e) => setSearchText(e.target.value);

  const handleSubmit = () =>
    router.push({ pathname: "/Search", query: { keyword: searchText } });

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const PersonalButton = () => {
    if (!user && !store) {
      return (
        <Link href="/login">
          <YourSpace.Word>Login</YourSpace.Word>
        </Link>
      );
    }
    if(user){
      return (
        <Link href="/User/Perfil/MyRequests">
          <YourSpace.Word>{user.name}</YourSpace.Word>
        </Link>
      );
    }
    if(store){
      return (
        <Link href="/Seller/Perfil/Products">
          <YourSpace.Word>{store.company_name}</YourSpace.Word>
        </Link>
      );
    }
  };

  return (
    <Header.Wrapper>
      <Header.Top>
        <ImageBox>
          <Link href="/Home">
            <Image src="/images/LogoWeb.png" alt="" width="250" height="100" />
          </Link>
        </ImageBox>
        <TextBox>
          <TextBox.LocationContainer>
            <GrLocation size="20" />
            <TextBox.Location type="" placeholder="Localização" />
          </TextBox.LocationContainer>
          <TextBox.SearchContainer>
            <Link href={{ pathname: "/Search" }}>
              <CgCloseO onClick={() => setSearchText("")} />
            </Link>
            <TextBox.Search
              value={searchText}
              type="text"
              placeholder="Busque por uma loja, produto, serviço"
              onChange={handleFilterSearchText}
              onKeyPress={handleKeypress}
            />
            <Link
              onKeyPress={handleKeypress}
              href={{ pathname: "/Search", query: { keyword: searchText } }}
            >
              <BsSearch
                size="15"
                type="submit"
                onSubmit={handleSubmit}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </TextBox.SearchContainer>
        </TextBox>
        <YourSpaceContainer>
          <YourSpace>
            <BsFillPersonFill />
            <PersonalButton />
          </YourSpace>
        </YourSpaceContainer>
        <Link href="/Carrinho">
          <MdShoppingCart
            size="30"
            color="#AA4545"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <LogOut onClick={logout}>
          <Link href="/login">
            <FiLogIn size="30" color="#AA4545" style={{ cursor: "pointer" }} />
          </Link>
        </LogOut>
      </Header.Top>
      <Header.Bottom>
        {categories.map((categoria) => (
          <Link
            key={categoria.category_id}
            href={{ pathname: "/Search", query: { id: categoria.category_id } }}
          >
            <ItemBottomHeader>{categoria.name}</ItemBottomHeader>
          </Link>
        ))}
      </Header.Bottom>
    </Header.Wrapper>
  );
}
