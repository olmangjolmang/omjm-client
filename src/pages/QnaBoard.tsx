import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10);

  const [page, setPage] = useState<number>(initialPage);
  const { data, isLoading, isError } = useOpinions(page);
  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    setSearchParams({ page: String(page) });
  }, [page, setSearchParams]);

  if (isError) {
    return <div>잘못된 접근입니다.</div>;
  }
  return (
    <>
      <Header />
      <Title>티클 문답</Title>
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
