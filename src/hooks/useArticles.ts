import { useQuery, QueryKey, UseQueryOptions } from "@tanstack/react-query";
import axios from "axios";
import { Category, OrderBy } from "../types/ArticleBoards";

const fetchArticles = async (
  page?: number,
  category?: Category,
  orderBy?: OrderBy
) => {
  const { data } = await axios.get(`/post`, {
    params: {
      category: category !== undefined ? category : undefined,
      orderBy,
      page,
    },
  });
  return data;
};

const useArticles = (
  page?: number,
  category?: Category,
  orderBy?: OrderBy,
  options?: UseQueryOptions
) => {
  return useQuery({
    queryKey: ["articles", page, category, orderBy],
    queryFn: () => fetchArticles(page, category, orderBy),
    placeholderData: (previousData, previousQuery) => previousData,
  });
};

export { useArticles };
