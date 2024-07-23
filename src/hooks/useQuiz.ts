import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axiosInstance from "../api/AxiosInstance"; // axiosInstance를 가져옵니다.
import { QuizApiResponse, QuestionData } from "../types/Quiz";

const fetchQuizData = async (id: number): Promise<QuestionData[]> => {
  const { data } = await axiosInstance.get<QuizApiResponse>(`/post/quiz/${id}`);
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
