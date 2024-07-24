import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SignupModal from "../SignupModal"; // 적절한 경로로 변경
import "@testing-library/jest-dom";

// 모의 navigate 함수
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("SignupModal Component", () => {
  test("renders SignupModal correctly", () => {
    const setIsModalOpen = jest.fn();

    render(
      <Router>
        <SignupModal setIsModalOpen={setIsModalOpen} />
      </Router>
    );

    // 컴포넌트 내 주요 텍스트와 이미지가 올바르게 렌더링되는지 확인
    expect(screen.getByText("회원가입이 완료되었습니다!")).toBeInTheDocument();
    expect(screen.getByText(/30초만에 프로필을 완성하면/)).toBeInTheDocument();
    expect(screen.getByAltText("img")).toBeInTheDocument();
    expect(screen.getByText("프로필 완성하러 가기")).toBeInTheDocument();
  });

  test("closes the modal when close button is clicked", () => {
    const setIsModalOpen = jest.fn();

    render(
      <Router>
        <SignupModal setIsModalOpen={setIsModalOpen} />
      </Router>
    );

    // Close button을 찾을 때, data-testid를 사용하여 특정 버튼을 선택
    const closeButton = screen.getByTestId("close-button");
    fireEvent.click(closeButton);

    // 모달이 닫히도록 setIsModalOpen이 호출되었는지 확인
    expect(setIsModalOpen).toHaveBeenCalledWith(false);
  });

  test("navigates to profile completion page when button is clicked", () => {
    const setIsModalOpen = jest.fn();

    render(
      <Router>
        <SignupModal setIsModalOpen={setIsModalOpen} />
      </Router>
    );

    const profileButton = screen.getByText("프로필 완성하러 가기");
    fireEvent.click(profileButton);

    // 올바른 경로로 navigate가 호출되었는지 확인
    expect(mockNavigate).toHaveBeenCalledWith("/profile-completion");
  });
});
