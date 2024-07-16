import React, { useState } from "react";
import {
  Container,
  Title,
  Ticle,
  Box,
  Svg,
  AgreeContainer,
  AgreeBox,
  AgreeText,
  Span,
  Button,
} from "../styles/SignupAgree";
import { IndividualAgreements } from "../types/SignupAgree";

export const SignupAgree: React.FC = () => {
  const [allAgreed, setAllAgreed] = useState(false);
  const [individualAgreements, setIndividualAgreements] =
    useState<IndividualAgreements>({
      terms: false,
      privacy: false,
      location: false,
      marketing: false,
    });

  const handleAllAgreeClick = () => {
    const newAllAgreed = !allAgreed;
    setAllAgreed(newAllAgreed);
    setIndividualAgreements({
      terms: newAllAgreed,
      privacy: newAllAgreed,
      location: newAllAgreed,
      marketing: newAllAgreed,
    });
  };

  const handleIndividualAgreeClick = (
    agreement: keyof IndividualAgreements
  ) => {
    const newAgreements = {
      ...individualAgreements,
      [agreement]: !individualAgreements[agreement],
    };
    setIndividualAgreements(newAgreements);
    const allChecked = Object.values(newAgreements).every((value) => value);
    setAllAgreed(allChecked);
  };

  const isButtonDisabled =
    !individualAgreements.terms || !individualAgreements.privacy;

  return (
    <Container>
      <div>
        <Title>
          <Ticle>티클</Ticle>에 가입하려면 약관 동의가 필요해요.
        </Title>
        <Box onClick={handleAllAgreeClick}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            stroke={allAgreed ? "#463efb" : "#AFAFB6"}
            strokeWidth={2}
            fill="none"
          >
            <circle cx="12.5" cy="12.5" r="11.5" />
            <path
              d="M6.66602 12.4997L10.8327 15.833L16.666 8.33301"
              strokeLinecap="round"
            />
          </Svg>
          약관 전체동의
        </Box>
        <AgreeContainer>
          <AgreeBox onClick={() => handleIndividualAgreeClick("terms")}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke={individualAgreements.terms ? "#463efb" : "#AFAFB6"}
              strokeWidth="2"
            >
              <circle cx="12.5" cy="12.5" r="11.5" />
              <path
                d="M6.66602 12.4997L10.8327 15.833L16.666 8.33301"
                strokeLinecap="round"
              />
            </Svg>
            <AgreeText>
              (필수) 개인회원 약관 <Span>약관 상세보기</Span>
            </AgreeText>
          </AgreeBox>
          <AgreeBox onClick={() => handleIndividualAgreeClick("privacy")}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke={individualAgreements.privacy ? "#463efb" : "#AFAFB6"}
              strokeWidth="2"
            >
              <circle cx="12.5" cy="12.5" r="11.5" />
              <path
                d="M6.66602 12.4997L10.8327 15.833L16.666 8.33301"
                strokeLinecap="round"
              />
            </Svg>
            <AgreeText>
              (필수) 개인정보 수집 및 이용 <Span>약관 상세보기</Span>
            </AgreeText>
          </AgreeBox>
          <AgreeBox onClick={() => handleIndividualAgreeClick("location")}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke={individualAgreements.location ? "#463efb" : "#AFAFB6"}
              strokeWidth="2"
            >
              <circle cx="12.5" cy="12.5" r="11.5" />
              <path
                d="M6.66602 12.4997L10.8327 15.833L16.666 8.33301"
                strokeLinecap="round"
              />
            </Svg>
            <AgreeText>
              (선택) 위치 기반 서비스 이용약관 <Span>약관 상세보기</Span>
            </AgreeText>
          </AgreeBox>
          <AgreeBox onClick={() => handleIndividualAgreeClick("marketing")}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke={individualAgreements.marketing ? "#463efb" : "#AFAFB6"}
              strokeWidth="2"
            >
              <circle cx="12.5" cy="12.5" r="11.5" />
              <path
                d="M6.66602 12.4997L10.8327 15.833L16.666 8.33301"
                strokeLinecap="round"
              />
            </Svg>
            <AgreeText>
              (선택) 마케팅 정보 수신 동의 • 이메일 <Span>약관 상세보기</Span>
            </AgreeText>
          </AgreeBox>
        </AgreeContainer>
        <Button to="/signup" disabled={isButtonDisabled}>
          다음
        </Button>
      </div>
    </Container>
  );
};
