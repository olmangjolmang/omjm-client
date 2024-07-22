import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Category, OrderBy } from "../types/ArticleBoards";
import axiosInstance from "../api/AxiosInstance";

const fetchMyQuestion = async (page?: number) => {
  const { data } = await axiosInstance.get(`/mypage/my-question`, {
    params: {
      page,
    },
  });
  console.log("data는");
  console.log(data);
  return data;
};

const useMyQuestion = (page?: number, options?: UseQueryOptions) => {
  return useQuery({
    queryKey: ["myQuestion", page],
    queryFn: () => fetchMyQuestion(page),
  });
};

export { useMyQuestion };
