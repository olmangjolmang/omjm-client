import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  // 추후 useAuth로 인증 상태 가져오기
  // const { isLoggedIn } = useAuth();

  return (
    <Container>
      <LeftContainer>
        <Logo>ticle</Logo>
        <MenuContainer>
          <Menu>홈</Menu>
          <Menu>아티클</Menu>
          <Menu>물어봥</Menu>
          <Menu>마이페이지</Menu>
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
                <ProfileInfo>
                  <ProfileImg src={profileImg} alt="Profile" />
                  <div>
                    <ProfileName>닉네임</ProfileName>
                    <ProfileEmail>omjm@example.com</ProfileEmail>
                  </div>
                </ProfileInfo>
                <Divider />
                <DropdownItem>관심분야 수정</DropdownItem>
                <DropdownItem onClick={() => setIsLoggedIn(false)}>
                  로그아웃
                </DropdownItem>
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
