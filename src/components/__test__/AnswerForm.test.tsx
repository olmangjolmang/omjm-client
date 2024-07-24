import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AnswerForm from "../AnswerForm";

const queryClient = new QueryClient();

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

const mockOpinionId = 1;

test("renders AnswerForm component", () => {
  renderWithClient(<AnswerForm opinionId={mockOpinionId} />);

  expect(
    screen.getByPlaceholderText(
      "질문에 대한 나만의 답을 작성해주세요! (답변 등록은 한 번만 가능합니다)."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("0/500")).toBeInTheDocument();
  expect(screen.getByText("등록")).toBeInTheDocument();
});

test("handles text input and character count", () => {
  renderWithClient(<AnswerForm opinionId={mockOpinionId} />);

  const textarea = screen.getByPlaceholderText(
    "질문에 대한 나만의 답을 작성해주세요! (답변 등록은 한 번만 가능합니다)."
  );

  fireEvent.change(textarea, { target: { value: "테스트 답변" } });
  expect(textarea).toHaveValue("테스트 답변");
  expect(screen.getByText("6/500")).toBeInTheDocument(); // "테스트 답변"의 길이는 6입니다.
});

test("submits the form", () => {
  renderWithClient(<AnswerForm opinionId={mockOpinionId} />);

  const textarea = screen.getByPlaceholderText(
    "질문에 대한 나만의 답을 작성해주세요! (답변 등록은 한 번만 가능합니다)."
  );
  const submitButton = screen.getByText("등록");

  fireEvent.change(textarea, { target: { value: "테스트 답변" } });
  fireEvent.click(submitButton);

  expect(screen.getByText("등록")).toBeInTheDocument();
});
