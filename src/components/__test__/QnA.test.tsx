import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate, useLocation, MemoryRouter } from "react-router-dom";
import QnA from "../QnA";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

const mockUseNavigate = useNavigate as jest.Mock;
const mockUseLocation = useLocation as jest.Mock;

const mockQnA = {
  opinionId: 1,
  question: "Test Question",
  viewCount: 100,
  commentCount: 5,
  comments: [
    { nickname: "User1", content: "Comment 1" },
    { nickname: "User2", content: "Comment 2" },
  ],
};

describe("QnA component", () => {
  beforeEach(() => {
    mockUseNavigate.mockReturnValue(jest.fn());
    mockUseLocation.mockReturnValue({ pathname: "/", search: "" });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders QnA component correctly", () => {
    render(
      <MemoryRouter>
        <QnA {...mockQnA} />
      </MemoryRouter>
    );

    expect(screen.getByText("Test Question")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("User1")).toBeInTheDocument();
    expect(screen.getByText("Comment 1")).toBeInTheDocument();
    expect(screen.getByText("User2")).toBeInTheDocument();
    expect(screen.getByText("Comment 2")).toBeInTheDocument();
  });

  test("navigates to correct QnA detail page on click", () => {
    const navigate = jest.fn();
    mockUseNavigate.mockReturnValue(navigate);

    render(
      <MemoryRouter>
        <QnA {...mockQnA} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Test Question"));

    expect(navigate).toHaveBeenCalledWith("/ticleQna/1", {
      state: { from: "/" },
    });
  });

  test("renders without comments when comments are not provided", () => {
    const qnaWithoutComments = {
      ...mockQnA,
      comments: undefined,
    };

    render(
      <MemoryRouter>
        <QnA {...qnaWithoutComments} />
      </MemoryRouter>
    );

    expect(screen.getByText("Test Question")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.queryByText("User1")).not.toBeInTheDocument();
    expect(screen.queryByText("Comment 1")).not.toBeInTheDocument();
    expect(screen.queryByText("User2")).not.toBeInTheDocument();
    expect(screen.queryByText("Comment 2")).not.toBeInTheDocument();
  });
});
