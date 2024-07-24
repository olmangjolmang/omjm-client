import React from "react";
import styled from "styled-components";
import upArrowIcon from "../assets/up-arrow.png";
import pencilIcon from "../assets/pencil.png";
import bookmarkIcon from "../assets/bookmark.png";
import upArrowIconSelected from "../assets/select-up-arrow.png";
import pencilIconSelected from "../assets/select-pencil.png";
import bookmarkIconSelected from "../assets/select-bookmark.png";

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

const Icon = styled.img<{ hoverSrc: string; activeSrc?: string }>`
  width: 44px;
  height: 44px;
  cursor: pointer;
  transition: background-color 0.3s, content 0.3s;
  background: white;
  border-radius: 50%;

  &:hover {
    background-color: #f0f0f0;
    content: url(${(props) => props.hoverSrc});
  }

  &:active {
    content: url(${(props) => props.activeSrc || props.hoverSrc});
  }
`;

interface FloatingButtonsProps {
  onMenuClick: () => void;
  onSaveClick: () => void;
  isSaved: boolean; // 추가된 prop
}

// 컴포넌트 정의
const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onMenuClick, onSaveClick, isSaved }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FixedButtons>
      <Icon
        src={upArrowIcon}
        hoverSrc={upArrowIconSelected}
        activeSrc={upArrowIconSelected}
        onClick={scrollToTop}
      />
      <Icon
        src={pencilIcon}
        hoverSrc={pencilIconSelected}
        activeSrc={pencilIconSelected}
        onClick={onMenuClick}
      />
      <Icon
        src={isSaved ? bookmarkIconSelected : bookmarkIcon}
        hoverSrc={bookmarkIconSelected}
        activeSrc={bookmarkIconSelected}
        onClick={onSaveClick}
      />
    </FixedButtons>
  );
};

export default FloatingButtons;
