import React, { useState } from "react";
import styled from "styled-components";
import { useArticles } from "../hooks/useArticles";
import PostItemMain from "./PostItemMain";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button<{ active?: boolean }>`
  margin: 0 5px;
  padding: 10px 15px;
  border: none;
  background-color: ${({ active }) => (active ? "#463EFB" : "#f4f4f7")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  cursor: pointer;
`;

const Boards = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useArticles(page);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading articles</div>;

  return (
    <Container>
      <h2>최신 글</h2>
      <GridContainer>
        {data.articles.map((article: any) => (
          <PostItemMain key={article.postId} {...article} />
        ))}
      </GridContainer>
      <PaginationContainer>
        <PageButton onClick={() => setPage((old) => Math.max(old - 1, 1))}>
          &lt;
        </PageButton>
        {Array.from({ length: data.totalPages }, (_, i) => (
          <PageButton
            key={i + 1}
            active={i + 1 === page}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </PageButton>
        ))}
        <PageButton
          onClick={() => setPage((old) => Math.min(old + 1, data.totalPages))}
        >
          &gt;
        </PageButton>
      </PaginationContainer>
    </Container>
  );
};

export default Boards;
