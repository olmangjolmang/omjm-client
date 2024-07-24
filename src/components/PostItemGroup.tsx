import React from "react";

import PostItemHome from "./PostItemHome";
import articleImg from "../assets/dummyArticleImage.jpg";
import {
  PostItemGroupContainer,
  SlideName,
  SlidePrevButton,
  SlideNextButton,
} from "../styles/MainPage";
import LeftArrow from "../assets/leftArrow.png";
import RightArrow from "../assets/rightArrow.png";
import Slider from "react-slick";
import styled from "styled-components";
import { Category, CATEGORY_LABELS } from "../types/ArticleBoards";

interface ResponseItem {
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

const PostItemGroup = ({ topic, responseList }: Result) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,

    spaceBetween: 41,

    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          prevArrow: (
            <SlidePrevButton style={{ backgroundImage: `url(${LeftArrow})` }} />
          ),
          nextArrow: (
            <SlideNextButton
              style={{ backgroundImage: `url(${RightArrow})` }}
            />
          ),
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          prevArrow: (
            <SlidePrevButton style={{ backgroundImage: `url(${LeftArrow})` }} />
          ),
          nextArrow: (
            <SlideNextButton
              style={{ backgroundImage: `url(${RightArrow})` }}
            />
          ),
        },
      },
    ],
  };

  return (
    <PostItemGroupContainer>
      <SlideName>{topic}</SlideName>
      <CarouselContainer>
        <Slider {...settings}>
          {responseList.map((post) => (
            <PostItemHome
              imageUrl={post.imageUrl}
              category={CATEGORY_LABELS[post.category as Category]}
              title={post.title}
              author={post.author}
              createdDate={post.createdDate}
            />
          ))}
        </Slider>
      </CarouselContainer>
    </PostItemGroupContainer>
  );
};

export default PostItemGroup;

const CarouselContainer = styled.div`
  width: 95%;
  position: relative;

  .slick-prev {
    @media (max-width: 1440px) {
      left: -30px;
    }
    @media (max-width: 970px) {
      left: -15px;
    }
  }
  .slick-next {
    @media (max-width: 1440px) {
      right: -30px;
    }
    @media (max-width: 970px) {
      right: -15px;
    }
  }
  .slick-list {
    justify-content: center;
  }
  .slick-slide > div {
    display: flex;
    justify-content: center;
  }
`;
