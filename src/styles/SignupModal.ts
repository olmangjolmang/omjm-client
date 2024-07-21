import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 88px 132px;
  border-radius: 8px;
  position: relative;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Message = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  letter-spacing: -0.12px;
`;

export const Img = styled.img`
  margin: 38px 0;
  width: 192px;
  height: 160px;
`;

export const SubMessage = styled.p`
  margin-bottom: 2rem;
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.1px;
`;

export const HighlightText = styled.span`
  color: #463efb;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: -0.1px;
`;

export const ProfileButton = styled.button`
  background: #e5efff;
  color: #463efb;
  border: none;
  width: 515px;
  height: 65px;
  padding: 10px;
  font-weight: 600;
  font-size: 20px;
  border-radius: 20px;
  cursor: pointer;
`;
