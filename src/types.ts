
// QuizModal

export interface QuizModalProps {
  onClose: () => void;
}

export interface QuestionData {
  question: string;
  answers: string[];
  correctAnswer: number;
}
