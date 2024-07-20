import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
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
import { QuizApiResponse, QuestionData } from "../types/Quiz";

interface QuizModalProps {
  onClose: () => void;
  title: string;
  id: number; // Add id to props
}

const QuizModal: React.FC<QuizModalProps> = ({ onClose, title, id }) => {
  const [quizData, setQuizData] = useState<QuestionData[] | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isStopConfirmationOpen, setIsStopConfirmationOpen] = useState<boolean>(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState<boolean>(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const { data } = await axios.get<QuizApiResponse>(`http://3.36.247.28/post/quiz/${id}`);
        if (!data.isSuccess) {
          throw new Error(data.message);
        }
        setQuizData(data.results);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchQuizData();
  }, [id]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!quizData) {
    return <div>No quiz data available.</div>;
  }

  const currentQuestion: QuestionData = quizData[currentStep - 1];

  const handleAnswerClick = (answer: string) => {
    if (!currentQuestion) return;

    const isCorrect = answer === currentQuestion.answer;
    if (isCorrect) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }

    setSelectedAnswer(answer);
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
      <ModalContainer ref={modalRef}>
        <Title>{title}</Title>
        {currentStep <= quizData.length ? (
          <>
            <ProgressBarContainer>
              <ProgressBar progress={currentStep} total={quizData.length} />
            </ProgressBarContainer>
            <QuestionContainer>
              <QuestionNumber>{currentStep}</QuestionNumber>
              <Question>{currentQuestion.quizTitle}</Question>
            </QuestionContainer>
            <AnswersContainer>
              {Object.entries(currentQuestion.multipleChoice).map(([key, answer]) => (
                <Answer
                  key={key}
                  correct={
                    selectedAnswer === key &&
                    key === currentQuestion.answer
                  }
                  selected={selectedAnswer === key}
                  isCorrectAnswer={
                    showCorrectAnswer &&
                    key === currentQuestion.answer
                  }
                  onClick={() => handleAnswerClick(key)}
                >
                  <AnswerNumber>{key}</AnswerNumber>
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
