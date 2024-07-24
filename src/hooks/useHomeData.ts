import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/AxiosInstance";

interface ResponseItem {
  postId: number;
  title: string;
  imageUrl: string;
  category: string;
  author: string;
  createdDate: number;
}

interface Result {
  topic: string;
  responseList: ResponseItem[];
}

interface HomeData {
  isSuccess: boolean;
  code: string;
  message: string;
  results: Result[];
}

const fetchHomeData = async (): Promise<HomeData> => {
  const { data } = await axiosInstance.get("/home");
  return data;
};

const useHomeData = () => {
  return useQuery({
    queryKey: ["homeData"],
    queryFn: fetchHomeData,
  });
};

export { useHomeData };
