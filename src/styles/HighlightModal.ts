import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 100px;
  width: 700px;
  height: 600px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const ModalHeader = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  align-self: flex-start;
`;

export const HighlightedTextContainer = styled.div`
  width: 100%;
  padding: 10px;
  color: #272726;
  font-family: Pretendard;
  margin-bottom: 40px;
  line-height: 24px; 
  font-size: 18px;
  white-space: pre-wrap;
`;

export const TextArea = styled.textarea<{ hasText: boolean }>`
  width: 93%;
  height: 580px;
  padding: 30px;
  background-color: #f4f4f7;
  border-radius: 20px;
  border: none;
  font-family: Pretendard;
  resize: none;
  font-size: 16px;
  color: ${(props) => (props.hasText ? "#272726" : "#afafb6")};
  font-weight: 500;
`;

export const Button = styled.button`
  margin-top: 32px;
  width: 90.75px;
  padding: 7.5px;
  background-color: #463efb;
  color: white;
  font-family: Pretendard;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  align-self: flex-end;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 60px;
  right: 90px;
  width: 15px;
  height: 15px;
  background: none;
  border: none;
  cursor: pointer;
`;
