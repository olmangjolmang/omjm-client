import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useArticles } from "../hooks/useArticles";
import PostItemMain from "./PostItemMain";
import CategorySelector from "./CategorySelector";
import Pagination from "./Pagination";
import Select from "./Select";
import { Category, OrderBy, CATEGORY_LABELS } from "../types/ArticleBoards";
import { Container, GridContainer } from "../styles/ArticleBoards";
import { Option } from "../types/ArticleBoards";

const orderByOptions: Option[] = [
  { value: "LATEST", label: "최신순" },
  { value: "OLDEST", label: "오래된순" },
  { value: "SCRAPPED", label: "스크랩순" },
];

const Boards = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10);

  const [page, setPage] = useState<number>(initialPage);
  const [category, setCategory] = useState<Category | undefined>(undefined);
  const [orderBy, setOrderBy] = useState<OrderBy>("LATEST");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    if (location.state && location.state.reload) {
      window.location.reload();
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state && location.state.searchTerm) {
      setSearchTerm(location.state.searchTerm);
    }
  }, [location.state]);

  const { data, isLoading, isError } = useArticles(
    page,
    category,
    orderBy,
    searchTerm ? searchTerm : undefined
  );

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 변경될 때마다 화면을 상단으로 스크롤합니다.
  }, [page]);

  useEffect(() => {
    setSearchParams({ page: String(page) });
  }, [page, setSearchParams]);

  if (isLoading) return <div>아티클을 불러오는 중입니다.</div>;
  if (isError) return <div>잘못된 접근입니다.</div>;
  console.log(data);
  return (
    <Container>
      <CategorySelector
        selectedCategory={category}
        onSelectCategory={(categories) => {
          setCategory(categories);
          setPage(1); // 카테고리가 변경되면 첫 페이지로 돌아감
        }}
      />
      <div>
        <Select
          value={orderBy}
          onChange={(e) => setOrderBy(e.target.value as OrderBy)}
          options={orderByOptions}
        />
      </div>
      <GridContainer>
        {data &&
          data.results.content.map((article: any) => (
            <PostItemMain
              key={article.postId}
              {...article}
              postCategory={CATEGORY_LABELS[article.postCategory as Category]}
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
