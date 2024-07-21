import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { useOpinionDetail } from "../hooks/useOpinionDetail";
import Answer from "../components/Answer";
import think from "../assets/think.png";
import AnswerForm from "../components/AnswerForm";

interface Opinion {
  commentId: number;
  nickname: string;
  heartCount: number;
  content: string;
  isHeart: boolean;
}

const AnswerList = () => {
  const { opinionId } = useParams<{ opinionId: string }>();
  const { data, isLoading, isError } = useOpinionDetail(Number(opinionId));
  const myNickname = "user5"; // replace with actual user nickname
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading opinion details</div>;
  }

  const myAnswers = data?.results.filter(
    (opinion: Opinion) => opinion.nickname === myNickname
  );
  const otherAnswers = data?.results.filter(
    (opinion: Opinion) => opinion.nickname !== myNickname
  );

  return (
    <>
      <Header />
      <Title>물어봥</Title>
      <QustionSpace>
        <TicleImage src={think} alt="ticleImage" />
        <Question>Q. {data?.message}</Question>
      </QustionSpace>
      <PageContainer>
        {myAnswers?.map((opinion: Opinion) => (
          <MyAnswerContainer key={opinion.commentId}>
            <Answer {...opinion} />
          </MyAnswerContainer>
        ))}
        {otherAnswers?.map((opinion: Opinion) => (
          <Answer key={opinion.commentId} {...opinion} />
        ))}
        <AnswerForm opinionId={Number(opinionId)} />
      </PageContainer>
      <Footer />
    </>
  );
};

export default AnswerList;

export const PageContainer = styled.div`
  display: flex;
  min-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding: 20px 112px;
`;

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 48px */
  letter-spacing: -0.16px;
  margin: 0 auto;
  margin-left: 112px;
  margin-bottom: 31px;
`;

const TicleImage = styled.img`
  width: 186px;
  height: 152px;
  margin-left: 112px;
  margin-right: 20px;
`;

const QustionSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Question = styled.div`
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--Blue-300, #463efb);
`;

const MyAnswerContainer = styled.div`
  background-color: #e5efff; /* 특별한 배경색 */
  margin-bottom: 10px;
  padding: 10px 40px;
`;