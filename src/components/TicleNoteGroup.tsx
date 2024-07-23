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
import { useMyNotes } from "../hooks/useMyNotes";
import TicleNote from "./TicleNote";

interface Page {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export interface Note {
  noteId: number;
  content: string;
  memoDate: string;
  postId: number;
  postTitle: string;
  targetText: string;
  pageInfo: Page;
}

const TicleNoteGroup = () => {
  const [page, setPage] = useState(1);

  const { data, isError } = useMyNotes();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 변경될 때마다 화면을 상단으로 스크롤합니다.
  }, [page]);

  if (isError) return <div>로그인 정보를 확인해주세요.</div>;
  console.log(data);
  return (
    <Container>
      {data && data.results.map((note: any) => <TicleNote {...note} />)}

      {data && (
        <Pagination
          currentPage={page}
          totalPages={data.results[0].pageInfo.totalPages}
          onPageChange={setPage}
        />
      )}
    </Container>
  );
};

export default TicleNoteGroup;
