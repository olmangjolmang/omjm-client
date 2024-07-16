import React from "react";
import styled from "styled-components";
import img from "../assets/signupmodalimg.png";

interface ModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupModal: React.FC<ModalProps> = ({ setIsModalOpen }) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={handleClose}>
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
        <ProfileButton onClick={handleClose}>
          프로필 완성하러 가기
        </ProfileButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SignupModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 88px 132px;
  border-radius: 8px;
  position: relative;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 31px;
  right: 57px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Message = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.12px;
`;

const Img = styled.img`
  margin: 38px 0;
  width: 192px;
  height: 160px;
`;

const SubMessage = styled.p`
  margin-bottom: 2rem;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.1px;
`;

const HighlightText = styled.span`
  color: #463efb;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.1px;
`;

const ProfileButton = styled.button`
  background: #e5efff;
  color: #463efb;
  border: none;
  width: 515px;
  height: 65px;
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
  border-radius: 20px;
  cursor: pointer;
`;
