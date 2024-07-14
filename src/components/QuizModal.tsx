import React, { useState } from "react";
import {
  ModalContainer,
  Title,
  ProgressBarContainer,
  ProgressBar,
  QuestionContainer,
  QuestionNumber,
  Question,
  AnswersContainer,
  Answer,
  AnswerNumber,
  ResultContainer,
  ResultImage,
  ResultText,
  HomeButton,
} from "../styles/QuizModal";
import StopConfirmationModal from "./StopConfirmationModal";
import quizimg5 from "../assets/quizimg5.png";
import quizimg4 from "../assets/quizimg4.png";
import quizimg3 from "../assets/quizimg3.png";
import quizimg2 from "../assets/quizimg2.png";
import quizimg1 from "../assets/quizimg1.png";
import quizimg0 from "../assets/quizimg0.png";

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
