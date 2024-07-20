import React, { useState } from "react";
import QuizModal from "./QuizModal";
import ticlearticle from "../assets/ticlearticle.png";
import {
  QuizContainer,
  QuizContainerRight,
  QuizTitle,
  QuizTime,
  TicleImg,
  QuizBtn,
  Overlay,
} from "../styles/Article";

const QuizSection: React.FC = () => {
  const [isQuizModalOpen, setIsQuizModalOpen] = useState<boolean>(false);

  return (
    <>
      <QuizContainer>
        <TicleImg src={ticlearticle} alt="ticleimg" />
        <QuizContainerRight>
          <QuizTitle>AI 시대에 화웨이가 주목받는다?</QuizTitle>
          <QuizTime>소요시간 5분</QuizTime>
          <QuizBtn onClick={() => setIsQuizModalOpen(true)}>
            간단 퀴즈 풀어보기
          </QuizBtn>
        </QuizContainerRight>
      </QuizContainer>
      {isQuizModalOpen && (
        <Overlay isModalOpen={isQuizModalOpen}>
          <QuizModal onClose={() => setIsQuizModalOpen(false)} />
        </Overlay>
      )}
    </>
  );
};

export default QuizSection;
