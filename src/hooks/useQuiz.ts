import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";
import { QuizApiResponse, QuestionData } from "../types/Quiz";

const fetchQuizData = async (id: number): Promise<QuestionData[]> => {
  const { data } = await axios.get<QuizApiResponse>(`http://3.36.247.28/post/quiz/${id}`);
  if (!data.isSuccess) {
    throw new Error(data.message);
  }
  return data.results;
};

const useQuiz = (
  id: number,
  options?: Omit<UseQueryOptions<QuestionData[], Error>, "queryKey" | "queryFn">
) => {
  return useQuery<QuestionData[], Error>({
    queryKey: ["quiz", id],
    queryFn: () => fetchQuizData(id),
    ...options,
  });
};

export { useQuiz };
