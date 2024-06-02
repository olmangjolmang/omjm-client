import React from "react";
import { useState } from "react";
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
  border: solid 1px #dfdfe5;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 515px;
  height: 65px;
  background-color: #e5efff;
  color: #463efb;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  margin-top: 8px;
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
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직 추가
    console.log("로그인 성공!");
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
            onChange={handleEmailChange}
            required
          />
        </Box>
        <Box>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="8~16자리/영문 대소문자, 숫자, 특수문자 조합"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </Box>
        <Button type="submit">로그인</Button>
      </form>
      <BottomText>계정이 없으신가요?</BottomText>
      <SignupText to="/signupagree">이메일로 회원가입</SignupText>
    </Container>
  );
};
