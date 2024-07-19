import styled from "styled-components";

export const Title = styled.div`
  font-size: 24px;
  display: flex;
  flex-direction: row;
  font-weight: 600;
  margin-bottom: 45px;
`;

export const Ticle = styled.div`
  color: #463efb;
  font-size: 24px;
  font-weight: 600;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Input = styled.input<{ hasError: boolean }>`
  width: 515px;
  height: 60px;
  border-radius: 10px;
  font-size: 16px;
  color: #afafb6;
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
  border-radius: 20px;
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
