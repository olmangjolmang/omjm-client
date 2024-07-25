import React, { useState, useEffect } from "react";
import axiosInstance from "../api/AxiosInstance"; 
import profileImg from "../assets/headerprofile.png";
import Header from "./Header";
import {
  Container,
  ProfileImage,
  Label,
  InputContainer,
  Input,
  Button,
  Divider,
  DeleteButton,
  DeleteButtonContainer,
} from "../styles/ProfileEdit";

const ProfileEdit: React.FC = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axiosInstance.get("/users/profile");
        const { nickname, email } = response.data.results; 
        setNickname(nickname);
        setEmail(email);
      } catch (error) {
        console.error("프로필 정보를 가져오는 중 오류 발생:", error);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    setIsButtonEnabled(nickname.trim().length > 0);
  }, [nickname]);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleSaveChanges = async () => {
    try {
      await axiosInstance.put(
        "/users/profile",
        {
          nickName: nickname,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("변경사항 저장");
    } catch (error) {
      console.error("프로필 업데이트 중 오류 발생:", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await axiosInstance.delete("/users/profile", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("계정 탈퇴");
    } catch (error) {
      console.error("계정 탈퇴 중 오류 발생:", error);
    }
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
          <Input
            id="email"
            type="email"
            value={email}
            style={{
              width: "515px",
              height: "60px",
              color: "#272726",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              paddingLeft: "20px",
              borderRadius: "10px",
              border: "1px solid #dfdfe5",
              background: "#f4f4f7",
              fontSize: "16px",
              marginBottom: "36px",
            }}
            readOnly
          />
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
