import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/AxiosInstance";

interface Comment {
  commentId: number;
  nickname: string;
  content: string;
  heartCount: number;
  isHeart: boolean;
}

interface Result {
  question: string;
  userNickname: string;
  responseList: Comment[];
}

interface OpinionDetails {
  isSuccess: boolean;
  code: string;
  message: string;
  results: Result;
}

const fetchOpinionDetails = async (
  opinionId: number
): Promise<OpinionDetails> => {
  const { data } = await axiosInstance.get(`/opinion/${opinionId}`);
  return data;
};

const useOpinionDetail = (opinionId: number) => {
  return useQuery({
    queryKey: ["opinionDetails", opinionId],
    queryFn: () => fetchOpinionDetails(opinionId),
  });
};

export { useOpinionDetail };
