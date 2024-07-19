import React from "react";
import { PaginationContainer, PageButton } from "../styles/ArticleBoards";
import { PaginationProps } from "../types/ArticleBoards";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const maxPageButtons = 10;
  const currentRange =
    Math.floor((currentPage - 1) / maxPageButtons) * maxPageButtons;
  const startPage = currentRange + 1;
  const endPage = Math.min(currentRange + maxPageButtons, totalPages);

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </PageButton>
      {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
        <PageButton
          key={startPage + i}
          $active={startPage + i === currentPage}
          onClick={() => onPageChange(startPage + i)}
        >
          {startPage + i}
        </PageButton>
      ))}
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
