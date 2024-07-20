import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Pagination from "../components/Pagination";
import QnA from "../components/QnA";
import { useOpinions } from "../hooks/useOpinions";

interface Opinion {
  opinionId: number;
  question: string;
  viewCount: number;
  commentCount: number;
}

const QnaBoard = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError } = useOpinions(page);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error loading opinions</div>;
  }
  return (
    <>
      <Header />
      <Title>물어봥</Title>
      <PageContainer>
        {data &&
          data.results.opinionResponseList.map((qna: Opinion) => (
            <QnA key={qna.opinionId} {...qna} />
          ))}
        {data && (
          <Pagination
            currentPage={page}
            totalPages={data.results.pageInfo.totalPages}
            onPageChange={setPage}
          />
        )}
      </PageContainer>
      <Footer />
    </>
  );
};

export default QnaBoard;

export const PageContainer = styled.div`
  display: flex;
  min-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 78px;
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
  margin-bottom: 84px;
`;
