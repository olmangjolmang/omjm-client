// StopConfirmationModal.tsx
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
  width: 500px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const ModalMessage = styled.div`
  font-size: 16px;
  margin-bottom: 40px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  width: 45%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
`;

const CancelButton = styled(Button)`
  background-color: #e0e0e0;
  color: #000;
`;

const ConfirmButton = styled(Button)`
  background-color: #463efb;
  color: white;
`;

interface StopConfirmationModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  headerText: string;
  messageText: string;
  confirmButtonText: string;
  cancelButtonText: string;
}

const StopConfirmationModal: React.FC<StopConfirmationModalProps> = ({
  onConfirm,
  onCancel,
  headerText,
  messageText,
  confirmButtonText,
  cancelButtonText,
}) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>{headerText}</ModalHeader>
        <ModalMessage>{messageText}</ModalMessage>
        <ButtonContainer>
          <ConfirmButton onClick={onConfirm}>{confirmButtonText}</ConfirmButton>
          <CancelButton onClick={onCancel}>{cancelButtonText}</CancelButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default StopConfirmationModal;
