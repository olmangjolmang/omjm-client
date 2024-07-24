import React from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, MainContent } from "../styles/MainPage";
import Intro from "../components/Intro";
import PostItemGroup from "../components/PostItemGroup";
import SubscriptionBanner from "../components/SubscriptionBanner";
import SubscribtionModal from "../components/SubscriptionModal";
import { useHomeData } from "../hooks/useHomeData";
import banner from "../assets/banner.svg";

interface ResponseItem {
  postId: number;
  title: string;
  imageUrl: string;
  category: string;
  author: string;
  createdDate: number;
}

interface Result {
  topic: string;
  responseList: ResponseItem[];
}

interface HomeData {
  isSuccess: boolean;
  code: string;
  message: string;
  results: Result[];
}

const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, isError } = useHomeData();

  console.log(data);

  if (isError) {
    return <div>잘못된 접근입니다.</div>;
  }

  const handleSubscribeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Header />
      <Container>
        <MainContent>
          <img src={banner} alt="Banner" />
          {/* <Intro /> */}
          {data?.results?.map((contents: Result) => (
            <PostItemGroup {...contents} />
          ))}
        </MainContent>
        <SubscriptionBanner onSubscribeClick={handleSubscribeClick} />
        <SubscribtionModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </Container>
      <Footer />
    </>
  );
};

export default MainPage;
