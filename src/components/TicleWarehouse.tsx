import React, { useState } from "react";
import { useEffect } from "react";
import { useArticles } from "../hooks/useArticles";
import PostItemMain from "./PostItemMain";
import CategorySelector from "./CategorySelector";
import Pagination from "./Pagination";
import Select from "./Select";
import { Category, OrderBy, CATEGORY_LABELS } from "../types/ArticleBoards";
import { Container, GridContainer } from "../styles/ArticleBoards";
import { Option } from "../types/ArticleBoards";
import { useTicleWarehouse } from "../hooks/useTicleWarehouse";

const orderByOptions: Option[] = [
  { value: "LATEST", label: "최신순" },
  { value: "OLDEST", label: "오래된순" },
  { value: "SCRAPPED", label: "스크랩순" },
];

const Boards = () => {
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState<Category | undefined>(undefined);
  const [orderBy, setOrderBy] = useState<OrderBy>("LATEST");

  const { data, isLoading, isError } = useTicleWarehouse(page, category);

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 변경될 때마다 화면을 상단으로 스크롤합니다.
  }, [page]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading articles</div>;
  console.log(data);
  return (
    <Container>
      <div>
        <Select
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value as OrderBy)}
          options={orderByOptions}
        />
      </div>
      <GridContainer>
        {data &&
          data.results.map((article: any) => (
            <PostItemMain
              key={article.postId}
              {...article}
              postCategory={CATEGORY_LABELS[article.postCategory as Category]}
              isSaved={true}
              isSavedIconLoad={true}
            />
          ))}
      </GridContainer>
      <Pagination
        currentPage={page}
        totalPages={data.results.totalPages}
        onPageChange={setPage}
      />
    </Container>
  );
};

export default Boards;
