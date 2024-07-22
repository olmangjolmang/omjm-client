import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axiosInstance from "../api/AxiosInstance";

// Note 타입 정의
export interface Note {
  noteId: number;
  content: string;
  memoDate: number[];
  postId: number;
  postTitle: string;
}

// API 호출 함수 정의
const fetchMyNotes = async (): Promise<Note[]> => {
  const { data } = await axiosInstance.get("/mypage/my-note");
  return data.results;
};

// useMyNotes 훅 정의
const useMyNotes = (options?: UseQueryOptions<Note[], Error>) => {
  return useQuery<Note[], Error>({
    queryKey: ["myNotes"],
    queryFn: fetchMyNotes,
    ...options,
  });
};

export { useMyNotes };
