import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axiosInstance from "../api/AxiosInstance";

interface ArticleData {
  postId: number;
  title: string;
  content: string;
  author: string;
  createdDate: number;
  postCategory: string;
  originalUrl: string;
  image: {
    imageFileName: string;
    imageFolderName: string;
    imageUrl: string;
  };
  recommendPost: RecommendPost[];
}

interface RecommendPost {
  postId: number;
  postTitle: string;
}

const fetchArticle = async (id: string): Promise<ArticleData> => {
  const { data } = await axiosInstance.get(`/post/${id}`);
  return data.results;
};

const useArticle = (
  id: string,
  options?: Omit<UseQueryOptions<ArticleData, Error>, "queryKey" | "queryFn">
) => {
  return useQuery<ArticleData, Error>({
    queryKey: ["article", id],
    queryFn: () => fetchArticle(id),
    ...options,
  });
};

export { useArticle };
