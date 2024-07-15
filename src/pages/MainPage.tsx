import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, MainContent } from "../styles/MainPage";
import Intro from "../components/Intro";
const MainPage = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <Intro />
      </MainContent>
      <Footer />
    </Container>
  );
};

export default MainPage;
