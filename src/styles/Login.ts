import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Img = styled.img`
  height: 81px;
  width: 150px;
  align-self: center;
  margin-bottom: 39px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Input = styled.input<{ hasError: boolean; hasText: boolean }>`
  width: 515px;
  height: 60px;
  border-radius: 10px;
  font-size: 16px;
  color: ${(props) => (props.hasText ? "#272726" : "#afafb6")};
  border: solid 1px ${(props) => (props.hasError ? "red" : "#dfdfe5")};
  margin-bottom: 5px;
  padding-left: 19px;
`;

export const Button = styled.button<{ disabled: boolean }>`
  width: 534px;
  height: 65px;
  background-color: ${(props) => (props.disabled ? "#F4F4F7" : "#e5efff")};
  color: ${(props) => (props.disabled ? "#AFAFB6" : "#463efb")};
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const ErrorMessage = styled.div`
  color: #f44;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const BottomText = styled.div`
  font-size: 16px;
  margin-top: 20px;
  font-weight: 500;
`;

export const SignupText = styled(Link)`
  font-size: 20px;
  color: #463efb;
  font-weight: 600;
  text-decoration: none;
  margin-top: 12px;
`;
