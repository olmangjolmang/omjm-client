import React from "react";
import styled from "styled-components";
import { Category, CATEGORIES, CATEGORY_LABELS } from "../types/ArticleBoards";

interface CategorySelectorProps {
  selectedCategory: Category | undefined;
  onSelectCategory: (category: Category | undefined) => void;
}

const Container = styled.div`
  display: flex;
  gap: 17px;
  padding: 10px;
`;

const CategoryButton = styled.button<{ selected: boolean }>`
  padding: 15px 19px;
  border: none;
  border-radius: 10px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.08px;
  background-color: ${({ selected }) => (selected ? "#463EFB" : "#f4f4f7")};
  color: ${({ selected }) => (selected ? "#f4f4f4" : "#272726")};
  cursor: pointer;
  &:hover {
    background-color: ${({ selected }) => (selected ? "#463EFB" : "#e0e0e0")};
  }
`;

const CategorySelector = ({
  selectedCategory,
  onSelectCategory,
}: CategorySelectorProps) => {
  return (
    <Container>
      <CategoryButton
        selected={selectedCategory === undefined}
        onClick={() => onSelectCategory(undefined)}
      >
        {CATEGORY_LABELS.ALL}
      </CategoryButton>
      {CATEGORIES.map((category) => (
        <CategoryButton
          key={category}
          selected={selectedCategory === category}
          onClick={() => onSelectCategory(category)}
        >
          {CATEGORY_LABELS[category]}
        </CategoryButton>
      ))}
    </Container>
  );
};

export default CategorySelector;
