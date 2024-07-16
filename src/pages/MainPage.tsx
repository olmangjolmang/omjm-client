import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, MainContent } from "../styles/MainPage";
import Intro from "../components/Intro";
import PostItemGroup from "../components/PostItemGroup";
import SubscriptionBanner from "../components/SubscriptionBanner";
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
      <SubscriptionBanner />
      <Footer />
    </Container>
  );
};

export default MainPage;
