import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 750px;
  height: 600px;
  border-radius: 40px;
  background: white;
  padding: 40px 40px 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  margin-bottom: 56px;
  color: var(--Blue-300, #463efb);
  font-size: 22px;
  font-weight: 700;
  margin-top: 10px;
  text-align: center;
`;

export const ProgressBarContainer = styled.div`
  width: 700px;
  height: 20px;
  background: #e0e0e0;
  border-radius: 30px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const ProgressBar = styled.div<{ progress: number; total: number }>`
  height: 100%;
  background: var(
    --Gradients-100,
    linear-gradient(180deg, #4f80fd 0%, #6041ff 100%)
  );
  width: ${(props) => (props.progress / props.total) * 100}%;
  transition: width 0.3s ease-in-out;
`;

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: 50px;
  margin-bottom: 20px;
`;

export const QuestionNumber = styled.div`
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

export const Question = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Answer = styled.div<{
  $selected: boolean;
  $correct: boolean;
  $isCorrectAnswer: boolean;
}>`
  display: flex;
  width: 650px;
  padding: 15px 10px 15px 35px;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid var(--Gray-300, #afafb6);
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  ${(props) =>
    props.$selected &&
    `
    border: 2px solid ${
      props.$correct ? "var(--Green-200, #09D535)" : "var(--Red-200, #F44)"
    };
    background: ${
      props.$correct ? "var(--Green-100, #E7FFE8)" : "var(--Red-100, #FFE4E4)"
    };
    & > div {
      background: ${
        props.$correct ? "var(--Green-200, #09D535)" : "var(--Red-200, #F44)"
      };
      color: white;
    }
  `}
  ${(props) =>
    !props.$selected &&
    props.$isCorrectAnswer &&
    `
    border: 2px solid var(--Green-200, #09D535);
    background: var(--Green-100, #E7FFE8);
    & > div {
      background: var(--Green-200, #09D535);
      color: white;
    }
  `}
`;

export const AnswerNumber = styled.div`
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

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultImage = styled.img`
  width: 315px;
  height: 305px;
  margin-bottom: 56px;
`;

export const ResultText = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #463efb;
  margin-bottom: 36px;
`;

export const HomeButton = styled.button`
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

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const LoadingText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #463efb;
`;
