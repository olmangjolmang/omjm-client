import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: row;
  font-weight: 400;
`;
const Ticle = styled.div`
  color: #463efb;
  font-size: 24px;
  font-weight: 400;
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
`;
const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 515px;
  height: 60px;
  border-radius: 10px;
  font-size: 16px;
  color: #afafb6;
  border: solid 1px #dfdfe5;
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
`;

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직 추가
    console.log("회원가입 성공!");
  };
  return (
    <Container>
      <Title>
        <Ticle>티클</Ticle>로 취준 준비 더욱 완벽하게!
      </Title>
      <form onSubmit={handleSubmit}>
        <Box>
          <Label>이메일</Label>
          <Input
            type="email"
            placeholder="amjm@naver.com"
            value={email}
            required
          />
        </Box>
        <Box>
          <Label>닉네임</Label>
          <Input
            type="text"
            placeholder="닉네임을 입력해주세요."
            value={nickname}
            required
          />
        </Box>
        <Box>
          <Label>비밀번호</Label>
          <Input
            type="password"
            placeholder="8~16자리/영문 대소문자, 숫자, 특수문자 조합"
            value={password}
            required
          />
        </Box>
        <Box>
          <Label>비밀번호 확인</Label>
          <Input
            type="password"
            placeholder="동일한 비밀번호를 입력해주세요."
            value={passwordConfirm}
            required
          />
        </Box>
        <Button type="submit">확인</Button>
      </form>
    </Container>
  );
};
