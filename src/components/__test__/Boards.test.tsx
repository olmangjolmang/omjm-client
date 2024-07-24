import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation, useSearchParams, MemoryRouter } from "react-router-dom";
import Boards from "../Boards";
import { useArticles } from "../../hooks/useArticles";
import "@testing-library/jest-dom/";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
  useSearchParams: jest.fn(),
}));

jest.mock("../../hooks/useArticles");

const queryClient = new QueryClient();

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    </MemoryRouter>
  );
};

const mockUseLocation = useLocation as jest.Mock;
const mockUseSearchParams = useSearchParams as jest.Mock;
const mockUseArticles = useArticles as jest.Mock;

const mockArticlesData = {
  results: {
    empty: false,
    content: [
      {
        postId: 1,
        postCategory: "TECH",
        title: "Test Article",
        image: { imageUrl: "testImageUrl1" },
      },
    ],
    totalPages: 2,
  },
};

describe("Boards component", () => {
  beforeEach(() => {
    mockUseLocation.mockReturnValue({ state: null });
    const searchParamsMock = new URLSearchParams();
    searchParamsMock.set("page", "1");
    mockUseSearchParams.mockReturnValue([searchParamsMock, jest.fn()]);
    mockUseArticles.mockReturnValue({
      data: mockArticlesData,
      isLoading: false,
      isError: false,
    });

    // 모킹 window.scrollTo
    Object.defineProperty(global.window, "scrollTo", {
      value: jest.fn(),
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders Boards component with articles", () => {
    renderWithClient(<Boards />);

    expect(screen.getByText("최신순")).toBeInTheDocument();
    expect(screen.getByText("Test Article")).toBeInTheDocument();
  });

  test("handles pagination click", async () => {
    renderWithClient(<Boards />);

    const nextPageButton = screen.getByRole("button", { name: ">" });
    fireEvent.click(nextPageButton);

    await waitFor(() => {
      const searchParamsSetter = mockUseSearchParams()[1];
      expect(searchParamsSetter).toHaveBeenCalledWith({ page: "2" });
    });
  });

  test("handles category change", async () => {
    renderWithClient(<Boards />);

    const categoryButtons = screen.getAllByRole("button");
    fireEvent.click(categoryButtons[1]); // assuming the second button is a category button

    await waitFor(() => {
      expect(mockUseArticles).toHaveBeenCalledWith(
        1,
        "WEB_FRONT",
        "LATEST",
        undefined
      );
    });
  });

  test("handles order by change", async () => {
    renderWithClient(<Boards />);

    const orderBySelector = screen.getByRole("combobox");
    fireEvent.change(orderBySelector, { target: { value: "OLDEST" } });

    await waitFor(() => {
      expect(mockUseArticles).toHaveBeenCalledWith(
        1,
        undefined,
        "OLDEST",
        undefined
      );
    });
  });

  test("shows loading state", () => {
    mockUseArticles.mockReturnValueOnce({
      data: null,
      isLoading: true,
      isError: false,
    });

    renderWithClient(<Boards />);

    expect(screen.getByText("아티클을 불러오는 중입니다.")).toBeInTheDocument();
  });

  test("shows error state", () => {
    mockUseArticles.mockReturnValueOnce({
      data: null,
      isLoading: false,
      isError: true,
    });

    renderWithClient(<Boards />);

    expect(screen.getByText("잘못된 접근입니다.")).toBeInTheDocument();
  });

  test("shows no content message when there are no articles", () => {
    mockUseArticles.mockReturnValueOnce({
      data: { results: { empty: true } },
      isLoading: false,
      isError: false,
    });

    renderWithClient(<Boards />);

    expect(
      screen.getByText("조건에 맞는 아티클이 없습니다.")
    ).toBeInTheDocument();
  });
});
