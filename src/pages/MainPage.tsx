import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, MainContent } from "../styles/MainPage";
import Intro from "../components/Intro";
import PostItemGroup from "../components/PostItemGroup";
import SubscriptionBanner from "../components/SubscriptionBanner";
import SubscribtionModal from "../components/SubscriptionModal";
const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubscribeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <Header />
      <MainContent>
        <Intro />
        <PostItemGroup />
        <PostItemGroup />
        <PostItemGroup />
      </MainContent>
      <SubscriptionBanner onSubscribeClick={handleSubscribeClick} />
      <SubscribtionModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <Footer />
    </Container>
  );
};

export default MainPage;
