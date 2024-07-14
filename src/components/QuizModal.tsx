import React, { useState } from "react";
import styled from "styled-components";
import StopConfirmationModal from "./StopConfirmationModal";
import quizimg5 from "../assets/quizimg5.png";
import quizimg4 from "../assets/quizimg4.png";
import quizimg3 from "../assets/quizimg3.png";
import quizimg2 from "../assets/quizimg2.png";
import quizimg1 from "../assets/quizimg1.png";
import quizimg0 from "../assets/quizimg0.png";

const ModalContainer = styled.div`
  width: 800px;
  height: 680px;
  border-radius: 40px;
  background: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  margin-bottom: 56px;
  color: var(--Blue-300, #463efb);
  font-size: 24px;
  font-weight: 700;
  margin-top: 30px;
  text-align: center;
`;

const ProgressBarContainer = styled.div`
  width: 700px;
  height: 20px;
  background: #e0e0e0;
  border-radius: 30px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const ProgressBar = styled.div<{ progress: number; total: number }>`
  height: 100%;
  background: var(
    --Gradients-100,
    linear-gradient(180deg, #4f80fd 0%, #6041ff 100%)
  );
  width: ${(props) => (props.progress / props.total) * 100}%;
  transition: width 0.3s;
`;

const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 42px;
  align-self: flex-start;
  margin-left: 50px;
`;

const QuestionNumber = styled.div`
  width: 50px;
  height: 50px;
  background: #e5efff;
  color: #463efb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-right: 28px;
`;

const Question = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Answer = styled.div<{
  selected: boolean;
  correct: boolean;
  isCorrectAnswer: boolean;
}>`
  display: flex;
  width: 650px;
  padding: 20px 10px 30px 35px;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid var(--Gray-300, #afafb6);
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;

  ${(props) =>
    props.selected &&
    `
    border: 2px solid ${
      props.correct ? "var(--Green-200, #09D535)" : "var(--Red-200, #F44)"
    };
    background: ${
      props.correct ? "var(--Green-100, #E7FFE8)" : "var(--Red-100, #FFE4E4)"
    };

    & > div {
      background: ${
        props.correct ? "var(--Green-200, #09D535)" : "var(--Red-200, #F44)"
      };
      color: white;
    }
  `}

  ${(props) =>
    !props.selected &&
    props.isCorrectAnswer &&
    `
    border: 2px solid var(--Green-200, #09D535);
    background: var(--Green-100, #E7FFE8);

    & > div {
      background: var(--Green-200, #09D535);
      color: white;
    }
  `}
`;

const AnswerNumber = styled.div`
  width: 50px;
  height: 50px;
  background: #f4f4f7;
  color: #272726;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  margin-right: 16px;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultImage = styled.img`
  width: 315px;
  height: 305px;
  margin-bottom: 56px;
`;

const ResultText = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #463efb;
  margin-bottom: 36px;
`;

const HomeButton = styled.button`
  width: 515px;
  height: 65px;
  padding: 10px;
  background: #e5efff;
  color: #463efb;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #d0e0ff;
  }
`;

interface QuizModalProps {
  onClose: () => void;
}

interface QuestionData {
  question: string;
  answers: string[];
  correctAnswer: number;
}

const quizData: QuestionData[] = [
  {
    question: "우리팀 이름은?",
    answers: ["올망", "졸망", "올망졸망", "옹졸"],
    correctAnswer: 3,
  },
  {
    question: "다음 중 프로그래밍 언어가 아닌 것은?",
    answers: ["Python", "JavaScript", "HTML", "Java"],
    correctAnswer: 3,
  },
  {
    question: "CSS에서 글꼴 크기를 지정하는 단위가 아닌 것은?",
    answers: ["em", "px", "pt", "kg"],
    correctAnswer: 4,
  },
  {
    question: "React에서 상태(state)를 관리하기 위한 훅은?",
    answers: ["useEffect", "useState", "useReducer", "useContext"],
    correctAnswer: 2,
  },
  {
    question: "JavaScript의 데이터 타입이 아닌 것은?",
    answers: ["string", "number", "boolean", "character"],
    correctAnswer: 4,
  },
];

const QuizModal: React.FC<QuizModalProps> = ({ onClose }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isStopConfirmationOpen, setIsStopConfirmationOpen] =
    useState<boolean>(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);

  const currentQuestion = quizData[currentStep - 1];

  const handleAnswerClick = (answerIndex: number) => {
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    if (isCorrect) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }

    setSelectedAnswer(answerIndex);
    setShowCorrectAnswer(true);
    setTimeout(() => {
      setShowCorrectAnswer(false);
      if (currentStep < quizData.length) {
        setCurrentStep(currentStep + 1);
        setSelectedAnswer(null);
      } else {
        setCurrentStep(currentStep + 1);
      }
    }, 2000); // 2초 후 다음 질문 또는 결과 화면으로
  };

  const handleConfirmStop = () => {
    setIsStopConfirmationOpen(false);
    onClose();
  };

  const renderResult = () => {
    let resultText = "";
    let imageSrc = "";

    if (correctAnswersCount === quizData.length) {
      resultText = "와우! 아주 잘 이해하셨네요!";
      imageSrc = quizimg5;
    } else if (correctAnswersCount === quizData.length - 1) {
      resultText = "훌륭해요!";
      imageSrc = quizimg4;
    } else if (correctAnswersCount === quizData.length - 2) {
      resultText = "걱정마세요, 더 나아질 거에요!";
      imageSrc = quizimg3;
    } else if (correctAnswersCount === quizData.length - 3) {
      resultText = "다시 한 번 읽어보시겠어요?";
      imageSrc = quizimg2;
    } else if (correctAnswersCount === quizData.length - 4) {
      resultText = "다시 한 번 읽어보시겠어요?";
      imageSrc = quizimg1;
    } else if (correctAnswersCount === quizData.length - 5) {
      resultText = "다시 한 번 읽어보시겠어요?";
      imageSrc = quizimg0;
    }

    return (
      <ResultContainer>
        <ResultImage src={imageSrc} alt="Result" />
        <ResultText>{resultText}</ResultText>
        <HomeButton onClick={onClose}>홈으로 가기</HomeButton>
      </ResultContainer>
    );
  };

  return (
    <>
      <ModalContainer>
        <Title>AI 시대에 화웨이가 주목받는다?</Title>
        {currentStep <= quizData.length ? (
          <>
            <ProgressBarContainer>
              <ProgressBar progress={currentStep} total={quizData.length} />
            </ProgressBarContainer>
            <QuestionContainer>
              <QuestionNumber>{currentStep}</QuestionNumber>
              <Question>{currentQuestion.question}</Question>
            </QuestionContainer>
            <AnswersContainer>
              {currentQuestion.answers.map((answer, index) => (
                <Answer
                  key={index}
                  correct={
                    selectedAnswer === index + 1 &&
                    index + 1 === currentQuestion.correctAnswer
                  }
                  selected={selectedAnswer === index + 1}
                  isCorrectAnswer={
                    showCorrectAnswer &&
                    index + 1 === currentQuestion.correctAnswer
                  }
                  onClick={() => handleAnswerClick(index + 1)}
                >
                  <AnswerNumber>{String.fromCharCode(65 + index)}</AnswerNumber>
                  {answer}
                </Answer>
              ))}
            </AnswersContainer>
          </>
        ) : (
          renderResult()
        )}
      </ModalContainer>
      {isStopConfirmationOpen && (
        <StopConfirmationModal
          onConfirm={handleConfirmStop}
          onCancel={() => setIsStopConfirmationOpen(false)}
          headerText="퀴즈를 중단하시겠습니까?"
          messageText="퀴즈를 중단하면 진행 상황이 저장되지 않습니다."
          confirmButtonText="중단하기"
          cancelButtonText="계속하기"
        />
      )}
    </>
  );
};

export default QuizModal;
