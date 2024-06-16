import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 120px;
  display: flex;
  padding: 0 120px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  margin-right: 99px;
  color: #463efb;
  font-weight: 600;
  font-family: Montserrat;
  font-size: 33.082px;
`;

const MenuContainer = styled.div`
  gap: 74px;
  display: flex;
`;

const Menu = styled.div`
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    color: #463efb;
  }
  &:active {
    color: #463efb;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 18px;
  margin-left: 124px;
`;

const SearchIcon = styled.svg`
  position: absolute;
  right: 18px;
  width: 20px;
  height: 20px;
`;

const SearchInput = styled.input`
  width: 350px;
  height: 55px;
  padding: 0 40px 0 18px;
  background-color: #f4f4f7;
  color: var(--Gray-300, #afafb6);
  font-weight: 500;
  line-height: 32px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
`;

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

const Header = () => {
  return (
    <>
      <Container>
        <Logo>ticle</Logo>
        <MenuContainer>
          <Menu>홈</Menu>
          <Menu>아티클</Menu>
          <Menu>물어봥</Menu>
          <Menu>마이페이지</Menu>
        </MenuContainer>
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
        <Button to="/login">로그인</Button>
      </Container>
    </>
  );
};

export default Header;
