import React from "react";
import { Container, Text, Company } from "../styles/Footer";
const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <div>
          <Text>이용약관</Text>
          <Text>개인정보 처리방침</Text>
          <Text>저작권 안내</Text>

          <Company>(주)올망졸망</Company>
          <Text>
            대표: 올망 | 사업자등록번호: 010-010-010 | 대표전화: 02-1111-1111 |
            통신판매번호: 2020-서울마포-2938
          </Text>
          <Text>
            개인정보보호책임자: 정다인 | 담당자메일주소: omjm@naver.com
          </Text>
          <Text>서울특별시 마포구 올망졸망로 35, 5층(04048)</Text>
        </div>
        <div>
          <Text>문의하기</Text>
        </div>
      </Container>
    </>
  );
};

export default Footer;
