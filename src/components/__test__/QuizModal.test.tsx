import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import QuizModal from "../QuizModal";
import { useQuiz } from "../../hooks/useQuiz";

jest.mock("../../hooks/useQuiz");

const mockQuizData = [
  {
    quizTitle: "Question 1",
    multipleChoice: {
      A: "Answer 1",
      B: "Answer 2",
      C: "Answer 3",
      D: "Answer 4",
    },
    answer: "A",
  },
  {
    quizTitle: "Question 2",
    multipleChoice: {
      A: "Answer 1",
      B: "Answer 2",
      C: "Answer 3",
      D: "Answer 4",
    },
    answer: "B",
  },
];

describe("QuizModal", () => {
  beforeEach(() => {
    (useQuiz as jest.Mock).mockReturnValue({
      data: mockQuizData,
      isLoading: false,
      error: null,
    });
  });

  test("renders QuizModal component correctly", () => {
    render(<QuizModal onClose={jest.fn()} title="Test Quiz" id={1} />);
    expect(screen.getByText("Test Quiz")).toBeInTheDocument();
    expect(screen.getByText("Question 1")).toBeInTheDocument();
  });

  test("updates state correctly when an answer is clicked", async () => {
    render(<QuizModal onClose={jest.fn()} title="Test Quiz" id={1} />);

    fireEvent.click(screen.getByText("Answer 1"));
    await waitFor(
      () => {
        expect(screen.getByText("Question 2")).toBeInTheDocument();
      },
      { timeout: 3000 }
    );

    fireEvent.click(screen.getByText("Answer 2"));
    await waitFor(
      () => {
        expect(
          screen.getByText("와우! 아주 잘 이해하셨네요!")
        ).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
