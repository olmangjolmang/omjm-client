import styled from "styled-components";
import LeftArrow from "../assets/leftArrow.png";
import RightArrow from "../assets/rightArrow.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1440px;
  justify-content: center;
  align-items: center; /* 모든 요소를 가운데 정렬 */
  margin: 0 auto; /* 화면 크기에 따라 가운데 정렬 */
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto; /* 가운데 정렬 */
  max-width: 100%;
  white-space: nowrap;
`;

export const Slide = styled.div<{ index: number }>`
  display: flex;
  transform: ${({ index }) => `translateX(${-index * 100}%)`};
  transition: transform 0.5s ease-in-out;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 72px */
  letter-spacing: -0.24px;
`;

export const Description = styled.p`
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -0.12px;
  max-width: 506px;
  white-space: pre-wrap;
`;

export const Button = styled.a`
  display: inline-block;
  width: 500px;
  padding: 21px 176px;
  font-size: 1.25rem;
  color: white;
  background-color: #ffffff;
  border: none;
  border-radius: 20px;
  margin-top: 48px;
  -webkit-box-sizing: border-box;

  color: var(--Blue-300, #463efb);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  background-size: cover;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    opacity: 0.8;
  }
`;

export const PrevButton = styled(NavButton)`
  left: 30px;
`;

export const NextButton = styled(NavButton)`
  right: 30px;
`;

export const PostItemGroupContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 88px;
  position: relative;
  align-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 41px;
  max-width: 1200px; /* 화면 크기에 맞게 조정 */
  margin: 0 auto; /* 가운데 정렬 */
`;

export const SlideName = styled.h2`
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 48px */
  letter-spacing: -0.16px;
  align-self: flex-start; /* 좌측 정렬 */
  margin-left: 50px; /* 좌측 여백 추가 */
  margin-bottom: 24px;
`;

export const SlidePrevButton = styled.button`
  @media (max-width: 1440px) {
    left: -30px;
  }
  @media (max-width: 970px) {
    left: -15px;
  }
  filter: invert(46%) sepia(100%) saturate(7476%) hue-rotate(243deg)
    brightness(100%) contrast(98%);
`;

export const SlideNextButton = styled.button`
  filter: invert(46%) sepia(100%) saturate(7476%) hue-rotate(243deg)
    brightness(100%) contrast(98%);
`;

//하단 구독 배너 스타일
export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
  color: white;
  margin-top: 138px;
  height: 450px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;

  white-space: nowrap;
`;

export const BannerText = styled.div`
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 72px */
  letter-spacing: -0.24px;
  margin-left: 145px;
`;

export const BannerButton = styled.a`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 42px */
  letter-spacing: -0.14px;
  color: #463efb;
  background-color: #f8f8f8;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  display: inline-flex;
  padding: 30px 60px;
  gap: 10px;
  margin-right: 145px;
  margin-left: 138px;
  &:hover {
    background-color: #e8e8e8;
  }
`;
