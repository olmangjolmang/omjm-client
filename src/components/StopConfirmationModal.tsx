import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 100px;
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
`;

const ModalMessage = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 40px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 20px;
  width: 170px;
`;

const ConfirmButton = styled(Button)`
  background-color: #f4f4f7;
  color: #463efb;
`;

const CancelButton = styled(Button)`
  background-color: #463efb;
  color: white;
`;

interface StopConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const StopConfirmationModal: React.FC<StopConfirmationModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>메모를 중단하시겠습니까?</ModalHeader>
        <ModalMessage>중단 시 작성 내용이 사라집니다.</ModalMessage>
        <ButtonContainer>
          <ConfirmButton onClick={onConfirm}>중단하기</ConfirmButton>
          <CancelButton onClick={onCancel}>돌아가기</CancelButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default StopConfirmationModal;
