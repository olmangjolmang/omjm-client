import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 165px 350px;
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 700;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  margin-bottom: 1rem;
`;

export const DropdownButton = styled.button`
  width: 100%;
  height: 60px;
  padding: 14px 20px;
  color: #afafb6;
  font-size: 16px;
  background-color: white;
  border: 1px solid var(--Gray-300, #afafb6);
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownIcon = styled.svg`
  margin-left: 20px;
  margin-right: 16px;
  width: 25px;
  height: 25px;
`;

export const JobList = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 4px;
  z-index: 1000;
`;

export const JobItem = styled.div<{ isSelected: boolean }>`
  padding: 18px 20px;
  border: 1px solid var(--Gray-100, #f4f4f7);
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? "#e5efff" : "white")};
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const JobItemIcon = styled.svg`
  margin-right: 0.5rem;
`;

export const SubmitButton = styled.button<{ isSelected: boolean }>`
  margin-top: 40px;
  display: flex;
  width: 515px;
  height: 65px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.isSelected ? "#E5EFFF" : "#F4F4F7")};
  color: ${(props) => (props.isSelected ? "#463EFB" : "#AFAFB6")};
  border: none;
  border-radius: 20px;
  cursor: ${(props) => (props.isSelected ? "pointer" : "not-allowed")};
  line-height: 150%;
  font-size: 20px;
  letter-spacing: -0.1px;
  font-weight: 600;
`;
