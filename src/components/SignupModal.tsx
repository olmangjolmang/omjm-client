import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/signupmodalimg.png";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Message,
  Img,
  SubMessage,
  HighlightText,
  ProfileButton,
} from "../styles/SignupModal";

interface ModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupModal: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleProfileComplete = () => {
    navigate("/profile-completion");
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton data-testid="close-button" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
          >
            <path
              d="M24.1441 23.5424L9.05914 8.45746"
              stroke="#7F7F86"
              strokeWidth="2.56"
              strokeLinecap="round"
            />
            <path
              d="M24.144 8.45746L9.05904 23.5424"
              stroke="#7F7F86"
              strokeWidth="2.56"
              strokeLinecap="round"
            />
          </svg>
        </CloseButton>
        <Message>회원가입이 완료되었습니다!</Message>
        <Img src={img} alt="img" />
        <SubMessage>
          <HighlightText>30초만에 프로필을 완성하면</HighlightText>
          <br />
          나만의 맞춤형 아티클을 추천해드려요!
        </SubMessage>
        <ProfileButton onClick={handleProfileComplete}>
          프로필 완성하러 가기
        </ProfileButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SignupModal;
