import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  max-width: 1440px;
  min-width: 1000px;
  margin: 0 auto;
`;

// boards.tsx
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 41px;
`;

export const SelectContainer = styled.div`
  position: relative;
  display: flex;
  margin: 10px;
  margin-left: 1200px;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.12px;
`;

export const StyledSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 10px 40px 10px 10px;
  font-size: 16px;
  font-weight: 600;
  font-family: Pretendard;
  line-height: 150%;
  letter-spacing: -0.12px;
  border: none;
  background-color: #ffffff;
  border-radius: 10px;
  color: #000000;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const DropdownIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

// CategorySelector.tsx
export const CategoryContainer = styled.div`
  display: flex;
  gap: 17px;
  padding: 10px;
`;

//PageNation.tsx
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  margin: 0 5px;
  padding: 10px 15px;
  border: none;
  background-color: ${({ $active }) => ($active ? "#463EFB" : "#f4f4f7")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};
  cursor: pointer;
  border-radius: 10px;
`;
export const CategoryButton = styled.button<{ selected: boolean }>`
  padding: 15px 19px;
  border: none;
  border-radius: 10px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.08px;
  background-color: ${({ selected }) => (selected ? "#463EFB" : "#f4f4f7")};
  color: ${({ selected }) => (selected ? "#f4f4f4" : "#272726")};
  cursor: pointer;
  &:hover {
    background-color: ${({ selected }) => (selected ? "#463EFB" : "#e0e0e0")};
  }
`;
