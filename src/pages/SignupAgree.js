import React, { useState } from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Title = styled.div`
  font-size: 24px;
  display: flex;
  font-weight: 600;
`;
const Ticle = styled.div`
  color: #463efb;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 45px;
`;
const Box = styled.div`
  width: 475px;
  background-color: #f4f4f7;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  padding: 25px 0px 25px 40px;
  align-items: center;
  margin-bottom: 32px;
`;
const Svg = styled.svg`
  margin-right: 16px;
`;
const AgreeContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  margin-left: 40px;
`;
const AgreeBox = styled.div`
  display: flex;
  justify-content: center;
`;
const AgreeText = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const Span = styled.span`
  color: #afafb6;
  font-size: 20px;
  font-weight: 500;
`;
const Button = styled(Link)`
  width: 515px;
  height: 65px;
  background-color: #e5efff;
  color: #463efb;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;
export const SignupAgree = () => {
  const [allAgreed, setAllAgreed] = useState(false);
  const [individualAgreements, setIndividualAgreements] = useState({
    terms: false,
    privacy: false,
    location: false,
    marketing: false,
  });

  const handleAllAgreeClick = () => {
    setAllAgreed(!allAgreed);
    setIndividualAgreements({
      terms: !allAgreed,
      privacy: !allAgreed,
      location: !allAgreed,
      marketing: !allAgreed,
    });
  };

  const handleIndividualAgreeClick = (agreement) => {
    setIndividualAgreements({
      ...individualAgreements,
      [agreement]: !individualAgreements[agreement],
    });
    const allChecked = Object.values(individualAgreements).every(
      (value) => value
    );

    setAllAgreed(allChecked);
  };
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
              stroke-linecap="round"
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
                stroke-linecap="round"
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
                stroke-linecap="round"
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
                stroke-linecap="round"
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
                stroke-linecap="round"
              />
            </Svg>
            <AgreeText>
              (선택) 마케팅 정보 수신 동의 • 이메일 <Span>약관 상세보기</Span>
            </AgreeText>
          </AgreeBox>
        </AgreeContainer>
        <Button to="/signup">다음</Button>
      </div>
    </Container>
  );
};
