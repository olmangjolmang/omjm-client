import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Category, OrderBy } from "../types/ArticleBoards";
import axiosInstance from "../api/AxiosInstance";

const fetchWarehouse = async (
  page?: number,
  category?: Category,
  orderBy?: OrderBy
) => {
  const { data } = await axiosInstance.get(`/mypage/saved-ticles`, {
    params: {
      category: category !== undefined ? category : undefined,
      page,
    },
  });
  console.log("data는");
  console.log(data);
  return data;
};

const useTicleWarehouse = (
  page?: number,
  category?: Category,
  options?: UseQueryOptions
) => {
  return useQuery({
    queryKey: ["TicleWarehouse", page, category],
    queryFn: () => fetchWarehouse(page, category),
  });
};

export { useTicleWarehouse };
