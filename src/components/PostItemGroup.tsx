import React from "react";
import { useState } from "react";
import PostItemMain from "./PostItemMain";
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

const postData = [
  {
    id: "2",
    imageUrl: articleImg,
    category: "카테고리고리고리",
    title: "이것은 예제 제목입니다. 제목이 길어질 경우에 대해 처리합니다.",
    author: "작성자 이름",
    summary:
      "텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트",
    createdAt: "2000",
    isSaved: true,
    isSavedIconLoad: true,
  },
  {
    id: "4",
    imageUrl: articleImg,
    category: "카테고리고리고리",
    title: "이것은 예제 제목입니다. 제목이 길어질 경우에 대해 처리합니다.",
    author: "작성자 이름",
    summary:
      "텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트",
    createdAt: "2000",
    isSaved: true,
    isSavedIconLoad: true,
  },
  {
    id: "3",
    imageUrl: articleImg,
    category: "카테고리고리고리",
    title: "이것은 예제 제목입니다. 제목이 길어질 경우에 대해 처리합니다.",
    author: "작성자 이름",
    summary:
      "텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트",
    createdAt: "2000",
    isSaved: true,
    isSavedIconLoad: true,
  },
];

const PostItemGroup = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    spaceBetween: 41,
    prevArrow: (
      <SlidePrevButton style={{ backgroundImage: `url(${LeftArrow})` }} />
    ),
    nextArrow: (
      <SlideNextButton style={{ backgroundImage: `url(${RightArrow})` }} />
    ),
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <PostItemGroupContainer>
      <SlideName>최신 글</SlideName>
      <CarouselContainer>
        <Slider {...settings}>
          {postData.map((post) => (
            <PostItemMain
              id={post.id}
              imageUrl={post.imageUrl}
              category={post.category}
              title={post.title}
              author={post.author}
              summary={post.summary}
              createdAt={post.createdAt}
              isSaved={post.isSaved}
              isSavedIconLoad={post.isSavedIconLoad}
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
