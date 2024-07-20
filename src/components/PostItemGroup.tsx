import React from "react";

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
    postId: 1,
    image: {
      imageFileName: "TOP9_1.png",
      imageFolderName: "home/TOP9",
      imageUrl: articleImg,
    },
    postCategory: "카테고리고리고리",
    title: "이것은 예제 제목입니다. 제목이 길어질 경우에 대해 처리합니다.",
    author: "작성자 이름",
    content:
      "텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트",
    createdDate: "2000-01-01",
    isSaved: true,
    isSavedIconLoad: true,
  },
  {
    postId: 2,
    image: {
      imageFileName: "TOP9_2.png",
      imageFolderName: "home/TOP9",
      imageUrl: articleImg,
    },
    postCategory: "카테고리고리고리",
    title: "이것은 예제 제목입니다. 제목이 길어질 경우에 대해 처리합니다.",
    author: "작성자 이름",
    content:
      "텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트",
    createdDate: "2000-01-02",
    isSaved: true,
    isSavedIconLoad: true,
  },
  {
    postId: 3,
    image: {
      imageFileName: "TOP9_3.png",
      imageFolderName: "home/TOP9",
      imageUrl: articleImg,
    },
    postCategory: "카테고리고리고리",
    title: "이것은 예제 제목입니다. 제목이 길어질 경우에 대해 처리합니다.",
    author: "작성자 이름",
    content:
      "텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트",
    createdDate: "2000-01-03",
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
              key={post.postId}
              postId={post.postId}
              image={post.image}
              postCategory={post.postCategory}
              title={post.title}
              author={post.author}
              content={post.content}
              createdDate={post.createdDate}
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
