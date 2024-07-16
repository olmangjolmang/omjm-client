import React from "react";
import { ModalOverlay, ModalContent, CloseButton } from "../styles/MainPage";

interface SubscribtionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscribtionModal = ({ isOpen, onClose }: SubscribtionModalProps) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>구독하기</h2>
        <p>
          티쿤은 개발자들을 위한 다양한 아티클을 제공합니다. 매주 원하는 요일,
          여러분에게 새로운 아티클을 가져다드립니다!
        </p>
        <form>
          <div>
            <label>이메일</label>
            <input type="email" placeholder="이메일을 입력해주세요." />
          </div>
          <div>
            <label>닉네임</label>
            <input type="text" placeholder="닉네임을 입력해주세요." />
          </div>
          <div>
            <label>요일</label>
            <select>
              <option>아티클을 받을 요일을 선택해주세요.</option>
              {/* 요일 옵션 추가 */}
            </select>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              (필수) 개인정보 수집 및 이용에 동의
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              (선택) 마케팅 정보 수신 동의 - 이메일
            </label>
          </div>
          <button type="submit">구독하고 다양한 개발 아티클 받아보기</button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SubscribtionModal;
