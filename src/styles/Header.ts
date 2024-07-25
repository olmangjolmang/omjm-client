import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 78px;
  display: flex;
  padding: 0 120px;
  align-items: center;
  justify-content: space-between;
`;
export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 50px;
  width: 143px;
  background-color: #463efb;
  border-radius: 10px;
  border: none;
  color: white;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.img`
  width: 76px;
  height: 40px;
  margin-right: 98px;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  gap: 74px;
  display: flex;
  margin-right: 15px;
`;

export const Menu = styled.div`
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
  color: black;
  font-family: Pretendard;
  line-height: 150%;
  letter-spacing: -0.08px;
  cursor: pointer;
  &:hover {
    color: #463efb;
  }
  &:active {
    color: #463efb;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 20px;
`;

export const SearchIcon = styled.svg`
  position: absolute;
  right: 18px;
  width: 20px;
  height: 20px;
`;

export const SearchInput = styled.input`
  width: 350px;
  height: 50px;
  padding: 0 40px 0 18px;
  background-color: #f4f4f7;
  color: var(--Gray-300, #afafb6);
  font-weight: 500;
  line-height: 32px;
  border: none;
  border-radius: 10px;
  line-height: 150%;
  letter-spacing: -0.08px;
  font-size: 16px;
  font-family: Pretendard;
  outline: none;
  box-sizing: border-box;
`;

export const Profile = styled.div`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
  cursor: pointer;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100px;
  align-self: stretch;

  right: 120px;
  background-color: #f4f4f7;
  border-radius: 20px;
  z-index: 1000;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 32px 0 0 0;
`;

export const DropdownLink = styled(Link)`
  padding: 16px 32px;
  cursor: pointer;
  text-decoration: none;
  align-self: self-start;
  line-height: 150%;
  color: black;
`;

export const DropdownItem = styled.div`
  padding: 16px 32px;
  cursor: pointer;
  align-self: self-start;
  line-height: 150%;
`;
export const ProfileInfo = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 0;
  text-decoration: none;
  color: black;
  align-self: flex-start;
  margin-left: 32px;
`;

export const ProfileImg = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
`;

export const ProfileName = styled.div`
  font-weight: 600;
  margin-left: 16px;
  font-size: 20px;
  margin-bottom: 7px;
`;

export const ProfileEmail = styled.div`
  font-size: 16px;
  margin-left: 16px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #dfdfe5;
  margin-top: 32px;
  width: 300px;
`;
