import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TicleWarehouse from "../TicleWarehouse";
import { useTicleWarehouse } from "../../hooks/useTicleWarehouse";

jest.mock("../../hooks/useTicleWarehouse");
jest.mock("../PostItemMain", () => () => <div data-testid="post-item" />);
jest.mock("../Pagination", () => () => <div data-testid="pagination" />);

describe("TicleWarehouse", () => {
  const mockData = {
    results: {
      savedTicleResponseList: [{ postId: 1 }, { postId: 2 }],
      pageInfo: { totalPages: 5 },
    },
  };

  it("renders posts and pagination when data is loaded", () => {
    (useTicleWarehouse as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });

    render(<TicleWarehouse />);

    expect(screen.getAllByTestId("post-item")).toHaveLength(2);
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });

  it("displays error message when there is an error", () => {
    (useTicleWarehouse as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    render(<TicleWarehouse />);

    expect(screen.getByText("로그인 정보를 확인해주세요!")).toBeInTheDocument();
  });
});
