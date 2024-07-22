import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import {
  Container,
  Img,
  Box,
  Label,
  Input,
  Button,
  ErrorMessage,
  BottomText,
  SignupText,
} from "../styles/Login";
import { Errors, Touched } from "../types/LoginTypes";
import axiosInstance from "../api/AxiosInstance";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [errors, setErrors] = useState<Errors>({
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState<Touched>({
    email: false,
    password: false,
  });
  const navigate = useNavigate();

  const validateEmail = useCallback((): string => {
    if (!email) {
      return "이메일을 입력해 주세요.";
    }
    return "";
  }, [email]);

  const validatePassword = useCallback((): string => {
    if (!password) {
      return "비밀번호를 입력해 주세요.";
    }
    return "";
  }, [password]);

  useEffect(() => {
    const emailError = validateEmail();
    const passwordError = validatePassword();

    setErrors({
      email: emailError,
      password: passwordError,
    });

    setIsButtonDisabled(!!emailError || !!passwordError);
  }, [email, password, validateEmail, validatePassword]);

  const handleBlur = (field: keyof Touched) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!errors.email && !errors.password) {
      try {
        console.log("로그인 요청", { email, password });
        const response = await axiosInstance.post("/users/sign-in", {
          email,
          password,
        });

        console.log("로그인 성공", response.data);

        const token = response.data.results.accessToken;
        localStorage.setItem("token", token);
        console.log(token);
        console.log(localStorage.getItem("token"));

        navigate("/");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("로그인 실패", error.response?.data || error.message);
        } else {
          console.error("로그인 실패", error);
        }
      }
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Box>
          <Img src={logo} alt="logo" />
          <Label>이메일</Label>
          <Input
            type="email"
            placeholder="omjm@naver.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            onBlur={handleBlur("email")}
            hasError={touched.email && !!errors.email}
          />
          {touched.email && errors.email && (
            <ErrorMessage>{errors.email}</ErrorMessage>
          )}
        </Box>
        <Box>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="8~16자리/영문 대소문자, 숫자, 특수문자 조합"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            onBlur={handleBlur("password")}
            hasError={touched.password && !!errors.password}
          />
          {touched.password && errors.password && (
            <ErrorMessage>{errors.password}</ErrorMessage>
          )}
        </Box>

        <Button type="submit" disabled={isButtonDisabled}>
          로그인
        </Button>
      </form>
      <BottomText>계정이 없으신가요?</BottomText>
      <SignupText to="/signupagree">이메일로 회원가입</SignupText>
    </Container>
  );
};
