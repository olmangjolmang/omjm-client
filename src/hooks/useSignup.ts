import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  SignupResponse,
  SignupErrorResponse,
  SignupPayload,
} from "../types/SignupTypes";
import axiosInstance from "../api/AxiosInstance";

// 회원가입 요청 함수
const signup = async (payload: SignupPayload): Promise<SignupResponse> => {
  const { data } = await axiosInstance.post<SignupResponse>("/users/sign-up", {
    ...payload,
    agreeTerms: true,
  });
  return data;
};

// 회원가입 훅
const useSignup = (): UseMutationResult<
  SignupResponse,
  AxiosError<SignupErrorResponse>,
  SignupPayload
> => {
  return useMutation<SignupResponse, AxiosError<SignupErrorResponse>, SignupPayload>({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log("회원가입 성공!");
      localStorage.setItem("token", data.token);
    },
    onError: (error) => {
      console.error(
        error.response?.data?.message || "회원가입에 실패했습니다."
      );
    },
  });
};

export default useSignup;
