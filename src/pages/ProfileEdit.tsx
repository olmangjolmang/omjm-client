import React, { useState, useEffect } from "react";
import {
  Container,
  ProfileImage,
  Label,
  InputContainer,
  Input,
  EmailInput,
  Button,
  Divider,
  DeleteButton,
  DeleteButtonContainer,
} from "../styles/ProfileEdit";
import profileImg from "../assets/headerprofile.png";
import Header from "./Header";

const ProfileEdit: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [email] = useState("omjm@example.com");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    setIsButtonEnabled(nickname.trim().length > 0);
  }, [nickname]);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleSaveChanges = () => {
    // 변경사항 저장 로직 추가
    console.log("변경사항 저장");
  };

  const handleDeleteAccount = () => {
    // 탈퇴 로직 추가
    console.log("계정 탈퇴");
  };

  return (
    <>
      <Header />
      <Container>
        <ProfileImage src={profileImg} alt="Profile" />
        <InputContainer>
          <Label htmlFor="nickname">닉네임</Label>
          <Input
            id="nickname"
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="닉네임"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">이메일</Label>
          <EmailInput id="email">{email}</EmailInput>
        </InputContainer>
        <Button
          onClick={handleSaveChanges}
          disabled={!isButtonEnabled}
          style={{
            backgroundColor: isButtonEnabled ? "#E5EFFF" : "#F4F4F7",
            color: isButtonEnabled ? "#463EFB" : "#AFAFB6",
          }}
        >
          변경사항 저장
        </Button>
        <Divider />
        <DeleteButtonContainer>
          <DeleteButton onClick={handleDeleteAccount}>탈퇴하기</DeleteButton>
        </DeleteButtonContainer>{" "}
      </Container>
    </>
  );
};

export default ProfileEdit;
