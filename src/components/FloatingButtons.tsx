import React from "react";
import styled from "styled-components";
import upArrowIcon from "../assets/up-arrow.png";
import pencilIcon from "../assets/pencil.png";
import bookmarkIcon from "../assets/bookmark.png";

// 스타일 컴포넌트 정의
const FixedButtons = styled.div`
  position: fixed;
  right: 60px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  z-index: 1000;
`;

const Icon = styled.img`
  width: 44px;
  height: 44px;
  cursor: pointer;
  transition: background-color 0.3s;
  background: white;
  border-radius: 50%;

  &:hover {
    background-color: #f0f0f0;
  }
`;

interface FloatingButtonsProps {
  onMenuClick: () => void;
}

// 컴포넌트 정의
const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onMenuClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FixedButtons>
      <Icon src={upArrowIcon} alt="Scroll to top" onClick={scrollToTop} />
      <Icon src={pencilIcon} alt="Edit" onClick={onMenuClick}/>
      <Icon src={bookmarkIcon} alt="Bookmark" />
    </FixedButtons>
  );
};

export default FloatingButtons;
