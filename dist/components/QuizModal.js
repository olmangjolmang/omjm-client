"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const ModalContainer = styled_components_1.default.div `
  width: 1000px;
  height: 750px;
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
const Title = styled_components_1.default.h1 `
  margin-bottom: 43px;
  color: var(--Blue-300, #463efb);
  font-size: 40px;
  font-weight: 600;
  margin-top: 30px;
`;
const StepContainer = styled_components_1.default.div `
  display: flex;
  gap: 10px;
  margin-bottom: 43px;
`;
const StepBox = styled_components_1.default.div `
  width: 64px;
  height: 64px;
  padding: 4px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  border-radius: 10px;
  background: ${(props) => props.active ? "var(--Blue-200, #4F80FD)" : "var(--Gray-100, #F4F4F7)"};
  color: ${(props) => (props.active ? "white" : "black")};
`;
const Question = styled_components_1.default.p `
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 52px;
  align-self: flex-start;
  margin-left: 95px;
`;
const AnswersContainer = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Answer = styled_components_1.default.div `
  display: flex;
  width: 750px;
  padding: 30px 10px 30px 35px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid var(--Gray-300, #afafb6);
  cursor: pointer;
  color: var(--Gray-300, #afafb6);
  font-weight: 500;
  font-size: 25px;

  ${(props) => props.selected &&
    `
    border: 2px solid ${props.correct ? "var(--Green-200, #09D535)" : "var(--Red-200, #F44)"};
    background: ${props.correct ? "var(--Green-100, #E7FFE8)" : "var(--Red-100, #FFE4E4)"};
  `}
`;
const CloseButton = styled_components_1.default.button `
  position: absolute;
  top: 40px;
  right: 40px;
  width: 45px;
  height: 45px;
  background: none;
  border: none;
  cursor: pointer;
`;
const QuizModal = ({ onClose }) => {
    const [selectedAnswer, setSelectedAnswer] = (0, react_1.useState)(null);
    const [currentStep, setCurrentStep] = (0, react_1.useState)(1);
    const correctAnswer = 1; // 임시 정답
    const handleAnswerClick = (answerIndex) => {
        setSelectedAnswer(answerIndex);
    };
    return onClick = { onClose } >
        xmlns;
    "http://www.w3.org/2000/svg";
    width = "46";
    height = "46";
    viewBox = "0 0 46 46";
    fill = "none"
        >
            d;
    "M44.5519 40.0057C45.1555 40.6093 45.4946 41.4279 45.4946 42.2815C45.4946 43.1351 45.1555 43.9537 44.5519 44.5573C43.9483 45.1609 43.1296 45.5 42.276 45.5C41.4223 45.5 40.6036 45.1609 40 44.5573L23 27.553L5.99463 44.552C5.39101 45.1556 4.57233 45.4946 3.71868 45.4946C2.86503 45.4946 2.04635 45.1556 1.44273 44.552C0.83911 43.9484 0.5 43.1297 0.5 42.2762C0.5 41.4226 0.83911 40.6039 1.44273 40.0003L18.4481 23.0013L1.44808 5.99698C0.844465 5.3934 0.505355 4.57476 0.505355 3.72117C0.505355 2.86757 0.844465 2.04893 1.44808 1.44535C2.0517 0.841767 2.87039 0.502677 3.72404 0.502677C4.57768 0.502677 5.39637 0.841767 5.99999 1.44535L23 18.4497L40.0054 1.44267C40.609 0.839089 41.4277 0.5 42.2813 0.5C43.135 0.5 43.9536 0.839089 44.5573 1.44267C45.1609 2.04626 45.5 2.86489 45.5 3.71849C45.5 4.57208 45.1609 5.39072 44.5573 5.9943L27.5519 23.0013L44.5519 40.0057Z";
    fill = "#7F7F86"
        /  >
        /svg>
        < /CloseButton>
        < Title > AI;
    시대에;
    화웨이가;
    주목받는다 ? /Title>
        :
    ;
    {
        [1, 2, 3, 4, 5].map((step) => key = { step }, active = { currentStep } === step);
    }
     >
        { step }
        < /StepBox>;
};
/StepContainer>
    < Question > 아티클에;
관한;
질문 < (/Question>);
{
    [1, 2, 3, 4].map((answer) => key = { answer }, correct = { selectedAnswer } === answer && answer === correctAnswer);
}
selected = { selectedAnswer } === answer;
onClick = {}();
handleAnswerClick(answer);
    >
        답변;
{
    answer;
}
/Answer>;
/AnswersContainer>
    < /ModalContainer>;
;
;
exports.default = QuizModal;
