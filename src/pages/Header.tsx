import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from 'axios';
import styled from "styled-components";
import {
  Container,
  LeftContainer,
  Logo,
  MenuContainer,
  RightContainer,
  Menu,
  SearchContainer,
  SearchIcon,
  SearchInput,
  Profile,
  ProfileImg,
  DropdownMenu,
  DropdownItem,
  DropdownLink,
  ProfileInfo,
  ProfileName,
  ProfileEmail,
  Divider,
} from "../styles/Header";
import profileImg from "../assets/headerprofile.png";

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 55px;
  width: 143px;
  background-color: #463efb;
  border-radius: 10px;
  border: none;
  color: white;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
`;


const Header: React.FC = () => {
  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      // API 호출
      await axios.delete('/users/logout');
      setIsLoggedIn(false);
      // 로그아웃 성공 후 추가 로직 (예: 리디렉션) 가능
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error);
      // 오류 처리 로직 추가 가능
    }
  };

  // 추후 useAuth로 인증 상태 가져오기
  // const { isLoggedIn } = useAuth();

  return (
    <Container>
      <LeftContainer>
        <Logo src={logo} alt="로고" />
        <MenuContainer>
          <Menu to="/">홈</Menu>
          <Menu to="/articles">아티클</Menu>
          <Menu to="/">물어봥</Menu>
          <Menu to="/">마이페이지</Menu>
        </MenuContainer>
      </LeftContainer>
      <RightContainer>
        <SearchContainer>
          <SearchInput placeholder="궁금한 내용을 검색해 보세요!" />
          <SearchIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 23"
            fill="none"
          >
            <path
              d="M9.49985 16.4999C13.6419 16.4999 16.9997 13.1422 16.9997 9.0001C16.9997 4.85804 13.6419 1.50024 9.49985 1.50024C5.3578 1.50024 2 4.85804 2 9.0001C2 13.1422 5.3578 16.4999 9.49985 16.4999Z"
              stroke="#2836FC"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M15.332 14.833L21.999 21.4999"
              stroke="#2836FC"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </SearchIcon>
        </SearchContainer>
        {isLoggedIn ? (
          <Profile onClick={toggleDropdown}>
            <ProfileImg src={profileImg} alt="Profile" />
            {isDropdownOpen && (
              <DropdownMenu>
                <ProfileInfo to="/profile-edit">
                  <ProfileImg src={profileImg} alt="Profile" />
                  <div>
                    <ProfileName>닉네임</ProfileName>
                    <ProfileEmail>omjm@example.com</ProfileEmail>
                  </div>
                </ProfileInfo>
                <Divider />
                <DropdownLink to="/edit-interests">관심분야 수정</DropdownLink>
                <DropdownItem onClick={handleLogout}>로그아웃</DropdownItem>
              </DropdownMenu>
            )}
          </Profile>
        ) : (
          <Button to="/login">로그인</Button>
        )}
      </RightContainer>
    </Container>
  );
};

export default Header;
