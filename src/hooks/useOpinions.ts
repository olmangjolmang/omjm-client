import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";

interface OpinionResponse {
  opinionId: number;
  question: string;
  viewCount: number;
  commentCount: number;
  comments: any[];
}

interface OpinionsResult {
  pageInfo: {
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
  opinionResponseList: OpinionResponse[];
}

interface OpinionsData {
  isSuccess: boolean;
  code: string;
  message: string;
  results: OpinionsResult;
}
const fetchOpinions = async (page: number): Promise<OpinionsData> => {
  const { data } = await axios.get<OpinionsData>("/opinion", {
    params: { page },
  });
  return data;
};

const useOpinions = (page: number, options?: UseQueryOptions) => {
  return useQuery<OpinionsData>({
    queryKey: ["opinions", page],
    queryFn: () => fetchOpinions(page),
    placeholderData: (previousData, previousQuery) => previousData,
  });
};

export { useOpinions };
