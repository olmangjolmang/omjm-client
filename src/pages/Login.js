import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #161620;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  overflow: hidden; 
`;
const BackgroundCircle = styled.div`
  position: absolute;
  width: 775.366px;
  height: 775.366px;
  border-radius: 775.366px;
  background: rgba(40, 54, 252, 0.3);
  filter: blur(100px);
  left: -200px;
  top: 0px; 
  z-index: 1;
`;

const BackgroundCircleRight = styled.div`
  position: absolute;
  width: 775.366px;
  height: 775.366px;
  border-radius: 775.366px;
  background: rgba(40, 54, 252, 0.3);
  filter: blur(100px);
  right: -200px;
  bottom: -200px;
  z-index: 1;
`;

const FormContainer = styled.div`
  background-color: #fff;
  width: 650px;
  height: 699.117px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 80px;
  z-index: 2;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 500px;
  height: 55px;
  border-radius: 10px;
  font-size: 16px;
  color: #000000;
  border: solid 1px ${(props) => (props.hasError ? "red" : "#dfdfe5")};
  margin-bottom: 16px;
  padding-left: 19px;
`;

const Button = styled.button`
  width: 519px;
  height: 55px;
  /* background-color: ${(props) => (props.disabled ? "#dfdfe5" : "#e5efff")};
  color: ${(props) => (props.disabled ? "#afafb6" : "#463efb")}; */
  border: none;
  border-radius: 9px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 32px;
  background-color: #2836fc;
  color: #fff;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const FindContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 45px;
`;

const Divider = styled.span`
  margin: 0 45px;
`;

const Icon = styled.div`
  font-size: 70px;
  font-weight: 400;
  margin-bottom: 56px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  z-index: 2;
`;

const RightTitle = styled.div`
  color: #fff;
  font-size: 50px;
  font-weight: 700;
`;

const SignupBtn = styled(Link)`
  display: inline-flex;
  background-color: #fff;
  border-radius: 10px;
  padding: 14px 158px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  gap: 10px;
  color: #2836fc;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  margin-top: 86px;
  position: relative;
  z-index: 2;
`;

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!(email && password));
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 로그인 로직 추가
  };
  return (
    <Container>
      <BackgroundCircle />
      <BackgroundCircleRight />
      <FormContainer onSubmit={handleSubmit}>
        <Icon>icon</Icon>

        <Box>
          <Input
            type="email"
            placeholder="이메일을 입력해 주세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <Input
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button type="submit" disabled={isButtonDisabled}>
          로그인
        </Button>
        <FindContainer>
          <div>아이디 찾기</div>
          <Divider>|</Divider>
          <div>비밀번호 찾기</div>
        </FindContainer>
      </FormContainer>
      <RightContainer>
        <RightTitle>
          회원가입하고 원하는 요일에 <br />
          00의 아티클을 받아보세요
        </RightTitle>
        <SignupBtn to="/signup">회원가입하기</SignupBtn>
      </RightContainer>
    </Container>
  );
};
