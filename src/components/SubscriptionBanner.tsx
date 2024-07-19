import React from "react";
import { BannerContainer, BannerText, BannerButton } from "../styles/MainPage";

interface BannerProps {
  onSubscribeClick: () => void;
}

const SubscriptionBanner = ({ onSubscribeClick }: BannerProps) => {
  return (
    <BannerContainer>
      <BannerText>
        직접 요일을 설정하고 원하는 날짜에
        <br />
        그간 읽은 아티클들을 다시 읽어보세요!
      </BannerText>
      <BannerButton onClick={onSubscribeClick}>소식 받으러가기</BannerButton>
    </BannerContainer>
  );
};

export default SubscriptionBanner;
