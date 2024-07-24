import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Answer from "../Answer";

const queryClient = new QueryClient();

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

const mockProps = {
  commentId: 1,
  nickname: "TestUser",
  heartCount: 5,
  content: "This is a test comment",
  isHeart: false,
};

test("renders Answer component with props", () => {
  renderWithClient(<Answer {...mockProps} />);

  expect(screen.getByText(mockProps.nickname)).toBeInTheDocument();
  expect(screen.getByText(mockProps.content)).toBeInTheDocument();
  expect(screen.getByText(String(mockProps.heartCount))).toBeInTheDocument();
});

test("toggles like state on click", async () => {
  renderWithClient(<Answer {...mockProps} />);

  const likeSection = screen.getByTestId("like-section");

  // Initial state
  expect(screen.getByText(String(mockProps.heartCount))).toBeInTheDocument();
  expect(screen.queryByTestId("heart-icon")).toBeNull();
  expect(screen.getByTestId("non-heart-icon")).toBeInTheDocument();

  // Simulate like button click
  fireEvent.click(likeSection);

  // Wait for the UI to update
  await waitFor(() => {
    expect(
      screen.getByText(String(mockProps.heartCount + 1))
    ).toBeInTheDocument();
    expect(screen.queryByTestId("non-heart-icon")).toBeNull();
    expect(screen.getByTestId("heart-icon")).toBeInTheDocument();
  });

  // Simulate unlike button click
  fireEvent.click(likeSection);

  // Wait for the UI to update
  await waitFor(() => {
    expect(screen.getByText(String(mockProps.heartCount))).toBeInTheDocument();
    expect(screen.queryByTestId("heart-icon")).toBeNull();
    expect(screen.getByTestId("non-heart-icon")).toBeInTheDocument();
  });
});
