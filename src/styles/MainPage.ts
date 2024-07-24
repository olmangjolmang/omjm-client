import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1440px;
  justify-content: center;
  align-items: center; /* 모든 요소를 가운데 정렬 */
  margin: 0 auto; /* 화면 크기에 따라 가운데 정렬 */
`;

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto; /* 가운데 정렬 */
  max-width: 100%;
  white-space: nowrap;
`;

export const Slide = styled.div<{ index: number }>`
  display: flex;
  transform: ${({ index }) => `translateX(${-index * 100}%)`};
  transition: transform 0.5s ease-in-out;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 72px */
  letter-spacing: -0.24px;
`;

export const Description = styled.p`
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -0.12px;
  max-width: 506px;
  white-space: pre-wrap;
`;

export const Button = styled.a`
  display: inline-block;
  width: 500px;
  padding: 21px 176px;
  font-size: 1.25rem;
  color: white;
  background-color: #ffffff;
  border: none;
  border-radius: 20px;
  margin-top: 48px;
  -webkit-box-sizing: border-box;

  color: var(--Blue-300, #463efb);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  background-size: cover;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    opacity: 0.8;
  }
`;

export const PrevButton = styled(NavButton)`
  left: 30px;
`;

export const NextButton = styled(NavButton)`
  right: 30px;
`;

export const PostItemGroupContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 88px;
  position: relative;
  align-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 41px;
  max-width: 1200px; /* 화면 크기에 맞게 조정 */
  margin: 0 auto; /* 가운데 정렬 */
`;

export const SlideName = styled.h2`
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 48px */
  letter-spacing: -0.16px;
  align-self: flex-start; /* 좌측 정렬 */
  margin-left: 50px; /* 좌측 여백 추가 */
  margin-bottom: 24px;
`;

export const SlidePrevButton = styled.button`
  @media (max-width: 1440px) {
    left: -30px;
  }
  @media (max-width: 970px) {
    left: -15px;
  }
  filter: invert(46%) sepia(100%) saturate(7476%) hue-rotate(243deg)
    brightness(100%) contrast(98%);
`;

export const SlideNextButton = styled.button`
  filter: invert(46%) sepia(100%) saturate(7476%) hue-rotate(243deg)
    brightness(100%) contrast(98%);
`;

//하단 구독 배너 스타일
export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
  color: white;
  margin-top: 138px;
  height: 330px;

  min-width: 1440px;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 138px;
  white-space: nowrap;
`;

export const BannerText = styled.div`
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 72px */
  letter-spacing: -0.24px;
  margin-left: 145px;
`;

export const BannerButton = styled.a`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 42px */
  letter-spacing: -0.14px;
  color: #463efb;
  background-color: #f8f8f8;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  display: inline-flex;
  padding: 30px 60px;
  gap: 10px;
  margin-right: 145px;
  margin-left: 138px;
  &:hover {
    background-color: #e8e8e8;
  }
`;

// 구독모달

export const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;

  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 912px;
  height: 610px;
  padding: 0 198px;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 38px;
    height: 39px;
  }
  cursor: pointer;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2`
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 36px */
  letter-spacing: -0.12px;
  margin-bottom: 46px;
  margin-top: 56px;
  margin-left: 215px;
  margin-right: 300px;
  min-width: 100px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ModalText = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.09px;
`;

export const ModalTextGrey = styled.p`
  margin-bottom: 10px;
  color: var(--Gray-400, #7f7f86);
  /* Body/2 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  letter-spacing: -0.06px;
`;

export const Span = styled.span`
  color: #463efb;
`;

export const ModalTextContainer = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  margin-top: 22px;
`;

export const Label = styled.label`
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: -0.09px;
  margin-top: 30px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  width: 100%;
  border: 1px solid #afafb6;
  border-radius: 5px;
  font-size: 14px;
  box-sizing: border-box;
  display: flex;
  height: 60px;
  padding: 14px 20px;
  border-radius: 10px;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 32px;
  appearance: none; /* 기본 드롭다운 아이콘 숨기기 */
  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMyIgaGVpZ2h0PSIzMyIgdmlld0JveD0iMCAwIDMzIDMzIiBmaWxsPSJub25lIj4KICA8cGF0aCBkPSJNOC41IDEzLjgyMDhMMTYuNSAyMS44MjA4TDI0LjUgMTMuODIwOCIgc3Ryb2tlPSIjQUZBRkI2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4=")
    no-repeat right 10px center;
  &:focus {
    outline: none;
  }
`;

// SubmitButton
export const SubmitButton = styled.button<{ $isSubmitEnabled: boolean }>`
  display: flex;
  width: 515px;
  height: 65px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ $isSubmitEnabled }) =>
    $isSubmitEnabled ? "#463efb" : "#f4f4f7"};
  color: ${({ $isSubmitEnabled }) =>
    $isSubmitEnabled ? "#f4f4f7" : "#afafb6"};
  font-size: 16px;
  margin-top: 46px;
  border: none;
  cursor: pointer;
`;

export const CustomCheckbox = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

// 구독 모달 체크박스
export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;
`;

export const Link = styled.a`
  font-size: 14px;
  color: #afafb6;
  margin-left: 8px;
  text-decoration: none;
  text-decoration: underline;
`;
