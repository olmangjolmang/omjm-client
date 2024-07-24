import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SubscribtionModal from "../SubscriptionModal";
import axiosInstance from "../../api/AxiosInstance";
import "@testing-library/jest-dom";

jest.mock("../../api/AxiosInstance");
const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;

describe("SubscribtionModal Component", () => {
  const onCloseMock = jest.fn();

  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    render(<SubscribtionModal isOpen={true} onClose={onCloseMock} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders SubscribtionModal correctly", () => {
    expect(screen.getAllByText("구독하기")[0]).toBeInTheDocument();
    expect(screen.getAllByText(/티클/)[0]).toBeInTheDocument();
    expect(
      screen.getByText(/개발자들을 위한 다양한 아티클을 제공합니다./)
    ).toBeInTheDocument();
  });

  test("calls onClose and axiosInstance.post on successful submit", async () => {
    mockedAxios.post.mockResolvedValue({ data: "success" });

    fireEvent.change(screen.getByLabelText("요일"), {
      target: { value: "MONDAY" },
    });
    fireEvent.click(screen.getByTestId("required-checkbox"));
    fireEvent.click(screen.getByTestId("submit-button"));

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith("/home/subscription", {
        subsDay: "MONDAY",
        agreeInfo: true,
        agreeMarketing: false,
      });
      expect(onCloseMock).toHaveBeenCalled();
    });
  });

  test("calls onClose even when axiosInstance.post fails", async () => {
    mockedAxios.post.mockRejectedValue(
      new Error("이미 구독중이거나, 서버에 문제가 발생했습니다.")
    );

    fireEvent.change(screen.getByLabelText("요일"), {
      target: { value: "MONDAY" },
    });
    fireEvent.click(screen.getByTestId("required-checkbox"));
    fireEvent.click(screen.getByTestId("submit-button"));

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith("/home/subscription", {
        subsDay: "MONDAY",
        agreeInfo: true,
        agreeMarketing: false,
      });
      expect(onCloseMock).toHaveBeenCalled();
    });
  });
});
