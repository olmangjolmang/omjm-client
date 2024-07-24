import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import axiosInstance from "../api/AxiosInstance";
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
  Button,
  DropdownMenu,
  DropdownItem,
  DropdownLink,
  ProfileInfo,
  ProfileName,
  ProfileEmail,
  Divider,
} from "../styles/Header";
import profileImg from "../assets/headerprofile.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await axiosInstance.delete("/users/logout");
      setIsLoggedIn(false);
      console.log("로그아웃 성공");
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  const handleSearch = () => {
    if (searchTerm === "") alert("검색어를 입력해주세요.");
    if (searchTerm.trim() !== "") {
      navigate("/articles", { state: { searchTerm } });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleMenuClick = (path: string) => {
    if (location.pathname === path) {
      navigate(path, { replace: true, state: { reload: true } });
    } else {
      navigate(path);
    }
  };

  return (
    <Container>
      <LeftContainer>
        <Logo src={logo} alt="로고" />
        <MenuContainer>
          <Menu onClick={() => handleMenuClick("/")}>홈</Menu>
          <Menu onClick={() => handleMenuClick("/articles")}>아티클</Menu>
          <Menu onClick={() => handleMenuClick("/ticleQna")}>티클 문답</Menu>
          <Menu onClick={() => handleMenuClick("/mypage")}>마이페이지</Menu>
        </MenuContainer>
      </LeftContainer>
      <RightContainer>
        <SearchContainer>
          <SearchInput
            placeholder="궁금한 내용을 검색해 보세요!"
            value={searchTerm}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <SearchIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 23"
            fill="none"
            onClick={handleSearch}
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
