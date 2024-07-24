import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useNavigate, useLocation, MemoryRouter } from "react-router-dom";
import axiosInstance from "../../api/AxiosInstance";
import PostItemMain from "../PostItemMain";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

jest.mock("../../api/AxiosInstance", () => ({
  post: jest.fn(),
  interceptors: {
    request: {
      use: jest.fn(),
    },
  },
}));

const mockUseNavigate = useNavigate as jest.Mock;
const mockUseLocation = useLocation as jest.Mock;

const mockPost = {
  postId: 1,
  image: {
    imageFileName: "test.jpg",
    imageFolderName: "test-folder",
    imageUrl: "https://via.placeholder.com/150",
  },
  postCategory: "Test Category",
  title: "Test Post",
  author: "Test Author",
  createdDate: "2022-01-01",
  content: "Test content",
  isSavedIconLoad: true,
  isSaved: false,
};

describe("PostItemMain component", () => {
  beforeEach(() => {
    mockUseNavigate.mockReturnValue(jest.fn());
    mockUseLocation.mockReturnValue({ pathname: "/", search: "" });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders PostItemMain component correctly", () => {
    render(
      <MemoryRouter>
        <PostItemMain {...mockPost} />
      </MemoryRouter>
    );

    expect(screen.getByAltText("미리보기 이미지")).toBeInTheDocument();
    expect(screen.getByText("Test Post")).toBeInTheDocument();
    expect(screen.getByText("Test Category")).toBeInTheDocument();
    expect(screen.getByText("Test Author | 2022-01-01")).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  test("navigates to correct post detail page on click", () => {
    const navigate = jest.fn();
    mockUseNavigate.mockReturnValue(navigate);

    render(
      <MemoryRouter>
        <PostItemMain {...mockPost} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Test Post"));

    expect(navigate).toHaveBeenCalledWith("/post/1", {
      state: { from: "/" },
    });
  });

  test("handles save icon click and updates state", async () => {
    axiosInstance.post.mockResolvedValue({});

    render(
      <MemoryRouter>
        <PostItemMain {...mockPost} />
      </MemoryRouter>
    );

    const saveIcon = screen.getByRole("button");

    fireEvent.click(saveIcon);

    await waitFor(() => {
      expect(axiosInstance.post).toHaveBeenCalledWith("/post/1/scrap");
      expect(saveIcon.querySelector("svg")).toHaveStyle("fill: #463efb");
    });
  });

  test("handles save icon click and error handling", async () => {
    axiosInstance.post.mockRejectedValue(new Error("Error savehandler"));

    render(
      <MemoryRouter>
        <PostItemMain {...mockPost} />
      </MemoryRouter>
    );

    const saveIcon = screen.getByRole("button");

    fireEvent.click(saveIcon);

    await waitFor(() => {
      expect(axiosInstance.post).toHaveBeenCalledWith("/post/1/scrap");
      expect(saveIcon.querySelector("svg")).not.toHaveStyle("fill: #463efb");
    });
  });
});
