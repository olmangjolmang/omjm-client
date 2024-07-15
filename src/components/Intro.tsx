import React from "react";
import {
  ImageContainer,
  StyledImage,
  Overlay,
  Title,
  Description,
  Button,
  PrevButton,
  NextButton,
} from "../styles/MainPage";
import IntroImg from "../assets/TopImageforMainPage.png";
import LeftArrow from "../assets/leftArrow.png";
import RightArrow from "../assets/rightArrow.png";

const Intro = () => {
  return (
    <ImageContainer>
      <StyledImage src={IntroImg} alt="Background" />
      <Overlay>
        <Title>'일 잘하는' 개발자가 되고 싶다면?</Title>
        <Description>
          개발자를 꿈꾸는 당신을 위한 아티클 모음집. {"\n"}진짜 일 잘하는
          개발자들이 갖춘 역량을 키우고 싶다면?
        </Description>
        <Button>지금 읽으러 가기</Button>
      </Overlay>
      <PrevButton style={{ backgroundImage: `url(${LeftArrow})` }} />
      <NextButton style={{ backgroundImage: `url(${RightArrow})` }} />
    </ImageContainer>
  );
};

export default Intro;
