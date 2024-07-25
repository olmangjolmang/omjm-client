import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 76px;
`;

export const ProfileImage = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 50%;
  margin-bottom: 48px;
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  width: 515px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #dfdfe5;
  font-size: 16px;
  padding-left: 20px;
  color: #272726;
  margin-bottom: 16px;
`;



export const Button = styled.button`
  width: 515px;
  height: 65px;
  border-radius: 10px;
  border: none;
  background-color: #f4f4f7;
  color: #afafb6;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 52px;
`;
export const Divider = styled.div`
  width: 515px;
  height: 1px;
  background-color: #dfdfe5;
  margin-bottom: 27px;
`;

export const DeleteButton = styled.div`
  color: red;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  border-bottom: 1px solid red;
  padding-bottom: 5px;
`;
export const DeleteButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 515px;
`;
