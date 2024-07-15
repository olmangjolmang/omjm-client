import React from "react";
import { useState } from "react";
import PostItemMain from "./PostItemMain";
import articleImg from "../assets/dummyArticleImage.jpg";
import {
  PostItemGroupContainer,
  GridContainer,
  SlideName,
  SlidePrevButton,
  SlideNextButton,
} from "../styles/MainPage";
import LeftArrow from "../assets/leftArrow.png";
import RightArrow from "../assets/rightArrow.png";
const PostItemGroup: React.FC = () => {
  const [index, setIndex] = useState<number>(2);
  const handleNext = () => {
    setIndex((prevIndex: number) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setIndex((prevIndex: number) => (prevIndex - 1 + 33) % 3);
  };

  return (
    <PostItemGroupContainer>
      <SlideName>최신 글</SlideName>
      <GridContainer>
        <PostItemMain
          id="2"
          imageUrl={articleImg}
          category="카테고리고리고리"
          title="이것은 예제 제목입니다. 제목이 길어질 경우에 대해 처리합니다."
          author="작성자 이름"
          summary="텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
          createdAt="2000"
          isSaved={true}
          isSavedIconLoad={true}
        />
        <PostItemMain
          id="4"
          imageUrl={articleImg}
          category="카테고리고리고리"
          title="이것은 예제 제목입니다. 제목이 길어질 경우에 대해 처리합니다."
          author="작성자 이름"
          summary="텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
          createdAt="2000"
          isSaved={true}
          isSavedIconLoad={true}
        />
        <PostItemMain
          id="3"
          imageUrl={articleImg}
          category="카테고리고리고리"
          title="이것은 예제 제목입니다. 제목이 길어질 경우에 대해 처리합니다."
          author="작성자 이름"
          summary="텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스텍스트텍스트텍스트텍스스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
          createdAt="2000"
          isSaved={true}
          isSavedIconLoad={true}
        />
      </GridContainer>
      {index > 0 && (
        <SlidePrevButton style={{ backgroundImage: `url(${LeftArrow})` }} />
      )}
      {index < 3 && (
        <SlideNextButton style={{ backgroundImage: `url(${RightArrow})` }} />
      )}
    </PostItemGroupContainer>
  );
};

export default PostItemGroup;
