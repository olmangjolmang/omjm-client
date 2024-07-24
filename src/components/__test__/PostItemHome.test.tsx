import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useNavigate, useLocation, MemoryRouter } from "react-router-dom";
import PostItemHome from "../PostItemHome";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

const mockUseNavigate = useNavigate as jest.Mock;
const mockUseLocation = useLocation as jest.Mock;

const mockPost = {
  postId: 1,
  title: "Test Post",
  imageUrl: "https://via.placeholder.com/150",
  category: "Test Category",
  author: "Test Author",
  createdDate: 1628475600000, // Example timestamp
};

describe("PostItemHome component", () => {
  beforeEach(() => {
    mockUseNavigate.mockReturnValue(jest.fn());
    mockUseLocation.mockReturnValue({ pathname: "/", search: "" });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders PostItemHome component correctly", () => {
    render(
      <MemoryRouter>
        <PostItemHome {...mockPost} />
      </MemoryRouter>
    );

    expect(screen.getByAltText("미리보기 이미지")).toBeInTheDocument();
    expect(screen.getByText("Test Post")).toBeInTheDocument();
    expect(screen.getByText("Test Category")).toBeInTheDocument();
    expect(screen.getByText("Test Author | 1628475600000")).toBeInTheDocument();
  });

  test("navigates to correct post detail page on click", () => {
    const navigate = jest.fn();
    mockUseNavigate.mockReturnValue(navigate);

    render(
      <MemoryRouter>
        <PostItemHome {...mockPost} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Test Post"));

    expect(navigate).toHaveBeenCalledWith("/post/1", {
      state: { from: "/" },
    });
  });
});
