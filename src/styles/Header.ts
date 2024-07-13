import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 120px;
  display: flex;
  padding: 0 120px;
  align-items: center;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  margin-right: 99px;
  color: #463efb;
  font-weight: 600;
  font-family: Montserrat;
  font-size: 33.082px;
`;

export const MenuContainer = styled.div`
  gap: 74px;
  display: flex;
`;

export const Menu = styled.div`
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

export const ProfileLink = styled(Link)`
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
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
