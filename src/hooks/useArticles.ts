import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";
import { Category, OrderBy } from "../types/ArticleBoards";
import axiosInstance from "../api/AxiosInstance";

const fetchArticles = async (
  page?: number,
  category?: Category,
  orderBy?: OrderBy,
  keyword?: string
) => {
  const { data } = await axiosInstance.get(`/post`, {
    params: {
      page,
      category: category !== undefined ? category : undefined,
      orderBy,
      keyword,
    },
  });
  return data;
};

const useArticles = (
  page?: number,
  category?: Category,
  orderBy?: OrderBy,
  keyword?: string,
  options?: UseQueryOptions
) => {
  return useQuery({
    queryKey: ["articles", category, keyword, orderBy, page],
    queryFn: () => fetchArticles(page, category, orderBy, keyword),
    placeholderData: (previousData, previousQuery) => previousData,
  });
};

export { useArticles };
