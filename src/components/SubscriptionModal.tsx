import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  CheckboxGroup,
  CheckboxLabel,
  Link,
  ModalTitle,
  ModalTextContainer,
  ModalText,
  Form,
  FormGroup,
  Label,
  Select,
  CustomCheckbox,
  SubmitButton,
  ModalHeader,
  Span,
} from "../styles/MainPage";
import axiosInstance from "../api/AxiosInstance";

interface SubscribtionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
  >
    <circle cx="13" cy="13.4873" r="12.5" fill="#463EFB" />
    <path
      d="M7.16602 13.487L11.3327 16.8203L17.166 9.32031"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const UncheckedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
  >
    <circle cx="13" cy="13.4873" r="11.5" stroke="#AFAFB6" strokeWidth="2" />
    <path
      d="M7.16602 13.487L11.3327 16.8203L17.166 9.32031"
      stroke="#AFAFB6"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="38"
    height="39"
    viewBox="0 0 38 39"
    fill="none"
  >
    <path
      d="M28.0884 28.576L10.4108 10.8983"
      stroke="#7F7F86"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M28.0892 10.8983L10.4116 28.576"
      stroke="#7F7F86"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const SubscribtionModal = ({ isOpen, onClose }: SubscribtionModalProps) => {
  const [isRequiredChecked, setIsRequiredChecked] = useState<boolean>(false);
  const [isOptionalChecked, setIsOptionalChecked] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<string>("");

  const isSubmitEnabled = selectedDay !== "" && isRequiredChecked;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSubmitEnabled) return;

    const params = {
      subsDay: selectedDay,
      agreeInfo: isRequiredChecked,
      agreeMarketing: isOptionalChecked,
    };

    try {
      const response = await axiosInstance.post("/home/subscription", params);
      alert("구독 성공!");
      console.log("Subscription successful:", response.data);

      onClose();
    } catch (error) {
      alert("이미 구독중이거나, 서버에 문제가 발생했습니다.");
      console.error("Subscription failed:", error);
      onClose();
    }
  };

  return (
    <ModalOverlay data-testid="modal-overlay" $isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>구독하기</ModalTitle>
          <CloseButton data-testid="close-button" onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </ModalHeader>
        <ModalTextContainer>
          <ModalText>
            <Span>티클</Span>은 개발자들을 위한 다양한 아티클을 제공합니다.
          </ModalText>
          <ModalText>
            매주 원하는 요일,여러분에게 새로운 아<Span>티클</Span>을
            가져다드립니다!
          </ModalText>
        </ModalTextContainer>
        <Form>
          <FormGroup>
            <Label htmlFor="select-day">요일</Label>
            <Select
              id="select-day"
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
            >
              <option value="" disabled hidden>
                아티클을 받을 요일을 선택해주세요.
              </option>
              <option value="MONDAY">월요일</option>
              <option value="TUESDAY">화요일</option>
              <option value="WEDNESDAY">수요일</option>
              <option value="THURSDAY">목요일</option>
              <option value="FRIDAY">금요일</option>
              <option value="SATURDAY">토요일</option>
              <option value="SUNDAY">일요일</option>
            </Select>
          </FormGroup>
          <CheckboxGroup>
            <CustomCheckbox
              data-testid="required-checkbox"
              onClick={() => setIsRequiredChecked(!isRequiredChecked)}
            >
              {isRequiredChecked ? <CheckedIcon /> : <UncheckedIcon />}
            </CustomCheckbox>
            <CheckboxLabel>
              (필수) 개인정보 수집 및 이용에 동의
              <Link href="#">약관 상세보기</Link>
            </CheckboxLabel>
          </CheckboxGroup>
          <CheckboxGroup>
            <CustomCheckbox
              data-testid="optional-checkbox"
              onClick={() => setIsOptionalChecked(!isOptionalChecked)}
            >
              {isOptionalChecked ? <CheckedIcon /> : <UncheckedIcon />}
            </CustomCheckbox>
            <CheckboxLabel>
              (선택) 마케팅 정보 수신 동의 - 이메일
              <Link href="#">약관 상세보기</Link>
            </CheckboxLabel>
          </CheckboxGroup>
          <SubmitButton
            data-testid="submit-button"
            $isSubmitEnabled={isSubmitEnabled}
            onClick={handleSubmit}
          >
            구독하기
          </SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SubscribtionModal;
