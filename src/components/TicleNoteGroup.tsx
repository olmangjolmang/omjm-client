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

export interface Note {
  noteId: number;
  content: string;
  memoDate: number[];
  postId: number;
  postTitle: string;
  targetText: string;
}

const TicleNoteGroup = () => {
  const [page, setPage] = useState(0);

  const { data, isLoading, isError } = useMyNotes();
  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 변경될 때마다 화면을 상단으로 스크롤합니다.
  }, [page]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading articles</div>;
  console.log(data);
  return (
    <Container>
      {data && data.results.map((note: any) => <TicleNote {...note} />)}

      {/* <Pagination
        currentPage={page}
        totalPages={data.results.totalPages}
        onPageChange={setPage}
      /> */}
    </Container>
  );
};

export default TicleNoteGroup;
