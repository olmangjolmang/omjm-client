import React, { useState, ChangeEvent, FormEvent } from "react";
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
  border: solid 1px;
  margin-bottom: 20px;
  padding-left: 19px;
`;

const Button = styled.button<{ disabled: boolean }>`
  width: 534px;
  height: 65px;
  background-color: ${(props) => (props.disabled ? "#F4F4F7" : "#e5efff")};
  color: ${(props) => (props.disabled ? "#AFAFB6" : "#463efb")};
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
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
  font-weight: 600;
  text-decoration: none;
  margin-top: 12px;
`;

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  React.useEffect(() => {
    setIsButtonDisabled(!(email && password));
  }, [email, password]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
    } else {
      // 로그인 로직 추가
      console.log("로그인 성공");
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
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
          />
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
