import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axiosInstance from "../api/AxiosInstance";

// Note 타입 정의
interface Note {
  noteId: number;
  content: string;
  memoDate: number[];
  postId: number;
  postTitle: string;
  targetText: string;
}

interface ApiResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  results: Note[];
}

// API 호출 함수 정의
const fetchMyNotes = async (): Promise<ApiResponse> => {
  const { data } = await axiosInstance.get("/mypage/my-note");
  return data;
};

// useMyNotes 훅 정의
const useMyNotes = (options?: UseQueryOptions<ApiResponse, Error>) => {
  return useQuery<ApiResponse, Error>({
    queryKey: ["myNotes"],
    queryFn: fetchMyNotes,
    ...options,
  });
};

export { useMyNotes };
