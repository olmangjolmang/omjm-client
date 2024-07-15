import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { Container, IntroLogo, MainContent } from "../styles/MainPage";
const MainPage = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <div>
          <h1>Welcome to My Website</h1>
          <button>Click Me</button>
        </div>
        <IntroLogo>
          <img
            src={require("../assets/TopImageforMainPage.png")}
            alt="Top Image"
          />
        </IntroLogo>
      </MainContent>
      <Footer />
    </Container>
  );
};

export default MainPage;
