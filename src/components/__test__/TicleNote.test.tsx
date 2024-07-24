import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TicleNote, { Note } from "../TicleNote";
import { useMyQuestion } from "../../hooks/useMyQuestion";

// Mock the custom hook
jest.mock("../../hooks/useMyQuestion");

const mockNote: Note = {
  noteId: 1,
  content: "Test content",
  memoDate: [2023, 7, 25, 10, 30, 0, 0],
  postId: 1,
  postTitle: "Test Title",
  targetText: "Test Target Text",
};

describe("TicleNote", () => {
  beforeEach(() => {
    (useMyQuestion as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: false,
    });
  });

  it("renders the note correctly", () => {
    render(<TicleNote {...mockNote} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("2023-7-25")).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("toggles open state when clicked", () => {
    render(<TicleNote {...mockNote} />);

    const container = screen.getByText("Test Title").closest("div");
    fireEvent.click(container!);

    expect(screen.getByText("Test Target Text")).toBeInTheDocument();
  });
});
