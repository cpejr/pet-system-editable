import App from "next/app";
import api from "../src/utils/api";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import Header from "../src/components/Header";
import { AuthProvider } from "../src/contexts/AuthContext";
import "antd/dist/antd.css";
import Footer from "../src/components/Footer";
import MobileHeader from "../src/components/Mobile/MobileHeader";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
    background-color: #F8F8F8;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
    rose: "#F6C8CA",
    lightGreen: "#A6DAD8",
    mediumGreen: "#609694",
    darkGreen: "#426A69",
    mediumRed: "#AA4545",
    darkRed: "#9C1D1D",
    strongRed: "#BD2B2B",
    baseGray: "#AAABB0",
    mediumGray: "#C4C4C4",
    titleGray: "#E8E8E8",
    background: "#F8F8F8",
    hoverBackground: "rgba(96, 150, 148, 0.3)",
    borderBoxColor: "rgba(0, 0, 0, 0.2)",
    grayIcons: "#AAABB0",
    blueButton: "#1C97B2",
    starYellow: "#FFC700",
  },
};

function MyApp({ Component, pageProps }) {
  const { categories } = pageProps;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poiret+One&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <MobileHeader />
          <Header categories={categories} />
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const { data: categories } = await api.get("category");

  return { ...appProps, pageProps: { categories } };
};

export default MyApp;
