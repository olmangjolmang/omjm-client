import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import StopConfirmationModal from "./StopConfirmationModal";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  HighlightedTextContainer,
  TextArea,
  Button,
  CloseButton,
} from "../styles/HighlightModal";

interface HighlightModalProps {
  highlightedText: string;
  onClose: () => void;
  onSave: (note: string) => void;
}

const HighlightModal: React.FC<HighlightModalProps> = ({
  highlightedText,
  onClose,
  onSave,
}) => {
  const [note, setNote] = useState<string>("");
  const [isConfirmationOpen, setIsConfirmationOpen] = useState<boolean>(false);
  const [isStopConfirmationOpen, setIsStopConfirmationOpen] =
    useState<boolean>(false);

  const handleSave = () => {
    setIsConfirmationOpen(true);
  };

  const handleConfirmSave = () => {
    onSave(note);
    onClose();
  };

  const handleStop = () => {
    setIsStopConfirmationOpen(true);
  };

  const handleConfirmStop = () => {
    setIsStopConfirmationOpen(false);
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={handleStop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M44.0519 39.5057C44.6555 40.1093 44.9946 40.9279 44.9946 41.7815C44.9946 42.6351 44.6555 43.4537 44.0519 44.0573C43.4483 44.6609 42.6296 45 41.776 45C40.9223 45 40.1036 44.6609 39.5 44.0573L22.5 27.053L5.49463 44.052C4.89101 44.6556 4.07233 44.9946 3.21868 44.9946C2.36503 44.9946 1.54635 44.6556 0.94273 44.052C0.33911 43.4484 8.99463e-09 42.6297 0 41.7762C-8.99463e-09 40.9226 0.33911 40.1039 0.94273 39.5003L17.9481 22.5013L0.948084 5.49698C0.344465 4.8934 0.00535529 4.07476 0.0053553 3.22117C0.00535531 2.36757 0.344465 1.54893 0.948084 0.945351C1.5517 0.341767 2.37039 0.00267699 3.22404 0.00267698C4.07768 0.00267697 4.89637 0.341767 5.49999 0.945351L22.5 17.9497L39.5054 0.942673C40.109 0.339089 40.9277 -1.42209e-08 41.7813 0C42.635 1.42209e-08 43.4537 0.339089 44.0573 0.942673C44.6609 1.54626 45 2.36489 45 3.21849C45 4.07208 44.6609 4.89072 44.0573 5.4943L27.0519 22.5013L44.0519 39.5057Z"
              fill="#7F7F86"
            />
          </svg>
        </CloseButton>
        <ModalHeader>메모</ModalHeader>
        <HighlightedTextContainer>{highlightedText}</HighlightedTextContainer>
        <TextArea
          hasText={note.length > 0}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="메모를 작성해주세요."
        />
        <Button onClick={handleSave}>등록</Button>
      </ModalContainer>
      {isConfirmationOpen && (
        <ConfirmationModal
          onConfirm={handleConfirmSave}
          onCancel={() => setIsConfirmationOpen(false)}
        />
      )}
      {isStopConfirmationOpen && (
        <StopConfirmationModal
          onConfirm={handleConfirmStop}
          onCancel={() => setIsStopConfirmationOpen(false)}
          headerText="메모를 중단하시겠습니까?"
          messageText="중단 시 작성 내용이 사라집니다."
          confirmButtonText="중단하기"
          cancelButtonText="돌아가기"
        />
      )}
    </ModalOverlay>
  );
};

export default HighlightModal;
