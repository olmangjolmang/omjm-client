import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 스타일 컴포넌트 정의
const Title = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: row;
  font-weight: 600;
  margin-bottom: 38px;
`;
const Ticle = styled.div`
  color: #463efb;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 45px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const Input = styled.input<{ hasError: boolean }>`
  width: 515px;
  height: 60px;
  border-radius: 10px;
  font-size: 16px;
  color: #afafb6;
  border: solid 1px ${(props) => (props.hasError ? "red" : "#dfdfe5")};
  margin-bottom: 5px;
  padding-left: 19px;
`;

const Button = styled.button<{ disabled: boolean }>`
  width: 534px;
  height: 65px;
  background-color: ${(props) => (props.disabled ? "#dfdfe5" : "#e5efff")};
  color: ${(props) => (props.disabled ? "#afafb6" : "#463efb")};
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const ErrorMessage = styled.div`
  color: #f44;
  font-size: 14px;
  margin-bottom: 20px;
`;

// 타입 정의
interface Errors {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

interface Touched {
  email: boolean;
  nickname: boolean;
  password: boolean;
  passwordConfirm: boolean;
}

// 컴포넌트 정의
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

  useEffect(() => {
    const validateEmail = (): string => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        return "이메일을 입력해 주세요.";
      } else if (!re.test(email)) {
        return "올바르지 않은 이메일 형식입니다.";
      }
      return "";
    };

    const validateNickname = (): string => {
      if (!nickname.trim()) {
        return "닉네임을 입력해 주세요.";
      }
      return "";
    };

    const validatePassword = (): string => {
      if (!password) {
        return "비밀번호를 입력해 주세요.";
      }
      if (password.length < 8) {
        return "8자리 이상 입력해 주세요.";
      }
      if (password.length > 16) {
        return "16자리 이하로 입력해 주세요.";
      }
      const re =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
      if (!re.test(password)) {
        return "영문 대소문자, 숫자, 특수문자로 조합되어야 합니다.";
      }

      return "";
    };

    const validatePasswordConfirm = (): string => {
      if (!passwordConfirm) {
        return "비밀번호 확인을 입력해 주세요.";
      }
      if (password !== passwordConfirm) {
        return "비밀번호가 일치하지 않습니다.";
      }
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
        !!passwordConfirmError
    );
  }, [email, nickname, password, passwordConfirm]);

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
      // 회원가입 로직 추가
      console.log("회원가입 성공!");
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>
          <Ticle>티클</Ticle>로 취준 준비 더욱 완벽하게!
        </Title>
        <Box>
          <Label>이메일</Label>
          <Input
            type="email"
            placeholder="amjm@naver.com"
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
          <Label>닉네임</Label>
          <Input
            type="text"
            placeholder="닉네임을 입력해 주세요."
            value={nickname}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNickname(e.target.value)
            }
            onBlur={handleBlur("nickname")}
            hasError={touched.nickname && !!errors.nickname}
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
        <Box>
          <Label>비밀번호 확인</Label>
          <Input
            type="password"
            placeholder="동일한 비밀번호를 입력해 주세요."
            value={passwordConfirm}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPasswordConfirm(e.target.value)
            }
            onBlur={handleBlur("passwordConfirm")}
            hasError={touched.passwordConfirm && !!errors.passwordConfirm}
          />
          {touched.passwordConfirm && errors.passwordConfirm && (
            <ErrorMessage>{errors.passwordConfirm}</ErrorMessage>
          )}
        </Box>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button type="submit" disabled={isButtonDisabled}>
            확인
          </Button>
        </Link>
      </form>
    </Container>
  );
};
