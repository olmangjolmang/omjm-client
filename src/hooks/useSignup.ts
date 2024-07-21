import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { SignupResponse, SignupErrorResponse, SignupPayload } from "../types/SignupTypes";

const signup = async (payload: SignupPayload): Promise<SignupResponse> => {
  const { data } = await axios.post<SignupResponse>("/users/sign-up", {
    ...payload,
    category: "AI",
    agreeTerms: true,
    roles: ["user"],
  });
  return data;
};

const useSignup = (): UseMutationResult<SignupResponse, AxiosError<SignupErrorResponse>, SignupPayload> => {
  return useMutation<SignupResponse, AxiosError<SignupErrorResponse>, SignupPayload>({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log("회원가입 성공!");
      localStorage.setItem("token", data.token);
    },
    // onError: (error) => {
    //   console.error(
    //     error.response?.data?.message || "회원가입에 실패했습니다."
    //   );
    // },
    onError(error, variables, context) {
        console.log(error);
    },
  });
};

export default useSignup;
