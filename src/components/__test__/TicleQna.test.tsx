import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TicleQna from "../TicleQna";

// Mock the axios instance
jest.mock("../../api/AxiosInstance", () => ({
  put: jest.fn(),
  delete: jest.fn(),
}));

describe("TicleQna", () => {
  const mockProps = {
    question: "테스트 질문",
    createdDate: "2023-07-25",
    comment: "테스트 댓글",
  };

  it("renders the question and date correctly", () => {
    render(<TicleQna {...mockProps} />);

    expect(screen.getByText("질문")).toBeInTheDocument();
    expect(screen.getByText("날짜")).toBeInTheDocument();
  });

  it("toggles open state when clicked", () => {
    render(<TicleQna {...mockProps} />);

    const container = screen.getByText("질문").closest("div");
    fireEvent.click(container!);

    expect(screen.getByText("답변")).toBeInTheDocument();
  });

  it("shows edit and delete buttons when opened", () => {
    render(<TicleQna {...mockProps} />);

    const container = screen.getByText("질문").closest("div");
    fireEvent.click(container!);

    expect(screen.getByText("수정")).toBeInTheDocument();
    expect(screen.getByText("삭제")).toBeInTheDocument();
  });
});
