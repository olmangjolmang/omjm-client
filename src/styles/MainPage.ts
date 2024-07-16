import styled from "styled-components";
import LeftArrow from "../assets/leftArrow.png";
import RightArrow from "../assets/rightArrow.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 1440px;
  max-width: 100%;
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
  left: 90px;
  background-image: url(LeftArrow);
`;

export const NextButton = styled(NavButton)`
  right: 90px;
  background-image: url(RightArrow);
`;
