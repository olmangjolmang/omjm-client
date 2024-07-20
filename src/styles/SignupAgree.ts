import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.div`
  font-size: 24px;
  display: flex;
  font-weight: 600;
`;

export const Ticle = styled.div`
  color: #463efb;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 45px;
`;

export const Box = styled.div`
  width: 475px;
  background-color: #f4f4f7;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  padding: 25px 0px 25px 40px;
  align-items: center;
  margin-bottom: 32px;
  cursor: pointer;
`;

export const Svg = styled.svg`
  margin-right: 16px;
`;

export const AgreeContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  margin-left: 40px;
`;

export const AgreeBox = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const AgreeText = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export const Span = styled.span`
  color: #afafb6;
  font-size: 20px;
  font-weight: 500;
`;

export const Button = styled(Link)<{ disabled: boolean }>`
  width: 515px;
  height: 65px;
  background-color: ${(props) => (props.disabled ? "#F4F4F7" : "#e5efff")};
  color: ${(props) => (props.disabled ? "#AFAFB6" : "#463efb")};
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;
