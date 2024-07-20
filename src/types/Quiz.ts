// types.ts
export interface QuestionData {
  quizNo: number;
  postTitle: string;
  quizTitle: string;
  multipleChoice: {
    [key: string]: string; // 예: { "A": "클라이언트", "B": "서버", ... }
  };
  answer: string;
}

export interface QuizApiResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  results: QuestionData[];
}
