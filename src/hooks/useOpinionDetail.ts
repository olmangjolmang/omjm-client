import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Comment {
  commentId: number;
  nickname: string;
  content: string;
  heartCount: number;
  isHeart: boolean;
}

interface OpinionDetails {
  isSuccess: boolean;
  code: string;
  message: string;
  results: Comment[];
}

const fetchOpinionDetails = async (
  opinionId: number
): Promise<OpinionDetails> => {
  const { data } = await axios.get(`/opinion/${opinionId}`);
  return data;
};

const useOpinionDetail = (opinionId: number) => {
  return useQuery({
    queryKey: ["opinionDetails", opinionId],
    queryFn: () => fetchOpinionDetails(opinionId),
  });
};

export { useOpinionDetail };
