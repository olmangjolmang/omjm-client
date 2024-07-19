import { CATEGORIES, CATEGORY_LABELS } from "../types/ArticleBoards";
import { CategoryContainer, CategoryButton } from "../styles/ArticleBoards";
import { CategorySelectorProps } from "../types/ArticleBoards";

const CategorySelector = ({
  selectedCategory,
  onSelectCategory,
}: CategorySelectorProps) => {
  return (
    <CategoryContainer>
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
    </CategoryContainer>
  );
};

export default CategorySelector;
