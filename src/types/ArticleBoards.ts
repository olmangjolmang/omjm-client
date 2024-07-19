export type Category =
  | "WEB_FRONT"
  | "BACKEND"
  | "NETWORK"
  | "APP"
  | "SECURITY"
  | "AI"
  | "VISION"
  | "INFRA"
  | "ETC";
export const CATEGORIES: Category[] = [
  "WEB_FRONT",
  "BACKEND",
  "NETWORK",
  "APP",
  "SECURITY",
  "AI",
  "VISION",
  "INFRA",
  "ETC",
];

export type OrderBy = "LATEST" | "OLDEST" | "SCRAPPED";
export const ORDER_BY: OrderBy[] = ["LATEST", "OLDEST", "SCRAPPED"];
export const CATEGORY_LABELS: { [key in Category | "ALL"]: string } = {
  ALL: "ALL",
  WEB_FRONT: "웹 프론트",
  BACKEND: "백(서버,CI/CD)",
  NETWORK: "네트워크/통신",
  APP: "앱",
  SECURITY: "보안",
  AI: "빅데이터/AI",
  VISION: "Vision",
  INFRA: "인프라",
  ETC: "기타",
};

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface CategorySelectorProps {
  selectedCategory: Category | undefined;
  onSelectCategory: (category: Category | undefined) => void;
}

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}
