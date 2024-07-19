import React, { useState } from "react";
import styled from "styled-components";
import { useArticles } from "../hooks/useArticles";
import axios from "axios";
import PostItemMain from "./PostItemMain";
import CategorySelector from "./CategorySelector";
import {
  Category,
  OrderBy,
  CATEGORIES,
  ORDER_BY,
} from "../types/ArticleBoards";

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

const Select = styled.select`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
`;

const Boards = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState<Category | undefined>("BACKEND");
  const [orderBy, setOrderBy] = useState<OrderBy | undefined>("LATEST");

  const { data, isLoading, isError } = useArticles(page, category, orderBy);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading articles</div>;
  console.log(data);
  return (
    <Container>
      <h2>최신 글</h2>
      <CategorySelector
        selectedCategory={category}
        onSelectCategory={(categories) => {
          setCategory(categories);
          setPage(1); // 카테고리가 변경되면 첫 페이지로 돌아감
        }}
      />
      {/* <div>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
        >
          <option value="">전체</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
        <Select
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value as OrderBy)}
        >
          {ORDER_BY.map((order) => (
            <option key={order} value={order}>
              {order}
            </option>
          ))}
        </Select>
      </div>
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
      </PaginationContainer> */}
    </Container>
  );
};

export default Boards;
