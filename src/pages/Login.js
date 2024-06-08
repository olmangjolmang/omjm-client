import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 515px;
  height: 60px;
  border-radius: 10px;
  font-size: 16px;
  color: #afafb6;
  border: solid 1px ${(props) => (props.hasError ? "red" : "#dfdfe5")};
  margin-bottom: 20px;
  padding-left: 19px;
`;
const Button = styled.button`
  width: 534px;
  height: 65px;
  background-color: ${(props) => (props.disabled ? "#dfdfe5" : "#e5efff")};
  color: ${(props) => (props.disabled ? "#afafb6" : "#463efb")};
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  margin-top: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
const BottomText = styled.div`
  font-size: 16px;
  margin-top: 20px;
  font-weight: 500;
`;
const SignupText = styled(Link)`
  font-size: 20px;
  color: #463efb;
  text-decoration: none;
  margin-top: 12px;
`;

const ErrorMessage = styled.div`
  color: #f44;
  font-size: 14px;
  margin-bottom: 20px;
`;
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    const validateEmail = () => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        return "이메일을 입력해 주세요.";
      } else if (!re.test(email)) {
        return "올바르지 않은 이메일 형식입니다.";
      }
      return "";
    };
    const validatePassword = () => {
      if (!password) {
        return "비밀번호를 입력해 주세요.";
      }

      return "";
    };

    const emailError = validateEmail();
    const passwordError = validatePassword();

    setErrors({
      email: emailError,
      password: passwordError,
    });
    setIsButtonDisabled(emailError || passwordError);
  }, [email, password]);

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.email && !errors.password) {
      // 회원가입 로직 추가
      console.log("회원가입 성공!");
    }
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Box>
          <Label>이메일</Label>
          <Input
            type="email"
            placeholder="amjm@naver.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
