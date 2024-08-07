import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  Title,
  Ticle,
  Container,
  Box,
  Label,
  Input,
  Button,
  ErrorMessage,
} from "../styles/Signup";
import { Errors, Touched, SignupPayload } from "../types/SignupTypes";
import SignupModal from "../components/SignupModal";
import useSignup from "../hooks/useSignup";

export const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({
    email: "",
    nickname: "",
    password: "",
    passwordConfirm: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [touched, setTouched] = useState<Touched>({
    email: false,
    nickname: false,
    password: false,
    passwordConfirm: false,
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const mutation = useSignup();

  useEffect(() => {
    const validateEmail = (): string => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) return "이메일을 입력해 주세요.";
      if (!re.test(email)) return "올바르지 않은 이메일 형식입니다.";
      return "";
    };

    const validateNickname = (): string => {
      if (!nickname.trim()) return "닉네임을 입력해 주세요.";
      return "";
    };

    const validatePassword = (): string => {
      const re =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
      if (!password) return "비밀번호를 입력해 주세요.";
      if (password.length < 8) return "8자리 이상 입력해 주세요.";
      if (password.length > 16) return "16자리 이하로 입력해 주세요.";
      if (!re.test(password)) return "영문 대소문자, 숫자, 특수문자로 조합되어야 합니다.";
      return "";
    };

    const validatePasswordConfirm = (): string => {
      if (!passwordConfirm) return "비밀번호 확인을 입력해 주세요.";
      if (password !== passwordConfirm) return "비밀번호가 일치하지 않습니다.";
      return "";
    };

    const emailError = validateEmail();
    const nicknameError = validateNickname();
    const passwordError = validatePassword();
    const passwordConfirmError = validatePasswordConfirm();

    setErrors({
      email: emailError,
      nickname: nicknameError,
      password: passwordError,
      passwordConfirm: passwordConfirmError,
    });

    setIsButtonDisabled(
      !!emailError ||
      !!nicknameError ||
      !!passwordError ||
      !!passwordConfirmError ||
      mutation.status === "pending"
    );
  }, [email, nickname, password, passwordConfirm, mutation.status]);

  const handleBlur = (field: keyof Touched) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !errors.email &&
      !errors.nickname &&
      !errors.password &&
      !errors.passwordConfirm
    ) {
      const payload: SignupPayload = { email, password, nickname };
      localStorage.setItem("signupData", JSON.stringify(payload));
      setIsModalOpen(true);
      console.log("회원가입 1차 완료");
    }
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      setIsModalOpen(true);
    }
  }, [mutation.isSuccess]);

  return (
    <Container>
      {isModalOpen && <SignupModal setIsModalOpen={setIsModalOpen} />}
      <form onSubmit={handleSubmit}>
        <Title>
          <Ticle>티클</Ticle>로 취준 준비 더욱 완벽하게!
        </Title>
        <Box>
          <Label>이메일</Label>
          <Input
            type="email"
            placeholder="omjm@naver.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            onBlur={handleBlur("email")}
            hasError={touched.email && !!errors.email}
            hasText={email.length > 0}
          />
          {touched.email && errors.email && (
            <ErrorMessage>{errors.email}</ErrorMessage>
          )}
        </Box>
        <Box>
          <Label>닉네임</Label>
          <Input
            type="text"
            placeholder="닉네임을 입력해 주세요."
            value={nickname}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}
            onBlur={handleBlur("nickname")}
            hasError={touched.nickname && !!errors.nickname}
            hasText={nickname.length > 0}
          />
          {touched.nickname && errors.nickname && (
            <ErrorMessage>{errors.nickname}</ErrorMessage>
          )}
        </Box>
        <Box>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="8~16자리/영문 대소문자, 숫자, 특수문자 조합"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            onBlur={handleBlur("password")}
            hasError={touched.password && !!errors.password}
            hasText={password.length > 0}
          />
          {touched.password && errors.password && (
            <ErrorMessage>{errors.password}</ErrorMessage>
          )}
        </Box>
        <Box>
          <Label>비밀번호 확인</Label>
          <Input
            type="password"
            placeholder="동일한 비밀번호를 입력해 주세요."
            value={passwordConfirm}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPasswordConfirm(e.target.value)}
            onBlur={handleBlur("passwordConfirm")}
            hasError={touched.passwordConfirm && !!errors.passwordConfirm}
            hasText={passwordConfirm.length > 0}
          />
          {touched.passwordConfirm && errors.passwordConfirm && (
            <ErrorMessage>{errors.passwordConfirm}</ErrorMessage>
          )}
        </Box>
        <Button
          type="submit"
          disabled={isButtonDisabled || mutation.status === "pending"}
        >
          {mutation.status === "pending" ? "처리 중..." : "확인"}
        </Button>
      </form>
    </Container>
  );
};
