import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, MainContent } from "../styles/MainPage";
import Intro from "../components/Intro";
import PostItemGroup from "../components/PostItemGroup";
const MainPage = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <Intro />
        <PostItemGroup />
        <PostItemGroup />
        <PostItemGroup />
      </MainContent>
      <Footer />
    </Container>
  );
};

export default MainPage;
