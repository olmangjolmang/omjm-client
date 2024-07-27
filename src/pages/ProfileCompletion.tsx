import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/AxiosInstance";
import {
  Container,
  Title,
  DropdownContainer,
  DropdownButton,
  DropdownIcon,
  JobList,
  JobItem,
  JobItemIcon,
  SubmitButton,
} from "../styles/ProfileCompletion";
import { AxiosError } from "axios";

const ProfileCompletion: React.FC = () => {
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const jobs = [
    "웹 프론트엔드",
    "백 (서버, CI/CD)",
    "네트워크/통신",
    "앱",
    "보안",
    "빅데이터/AI",
    "Vision",
    "인프라",
    "기타",
  ];

  const handleJobSelect = (job: string) => {
    setSelectedJobs((prevSelectedJobs) =>
      prevSelectedJobs.includes(job)
        ? prevSelectedJobs.filter((j) => j !== job)
        : [...prevSelectedJobs, job]
    );
  };

  const handleSubmit = async () => {
    try {
      const signupData = JSON.parse(localStorage.getItem("signupData") || "{}");

      console.log("Signup Data:", signupData);
      console.log("Selected Jobs:", selectedJobs);

      if (!signupData.email || !signupData.password || !signupData.nickname) {
        throw new Error("필수 데이터가 누락되었습니다.");
      }

      const requestData = {
        email: signupData.email,
        password: signupData.password,
        nickName: signupData.nickname,
        category: selectedJobs.map((job) => {
          switch (job) {
            case "웹 프론트엔드":
              return "WEB_FRONT";
            case "백 (서버, CI/CD)":
              return "BACKEND";
            case "네트워크/통신":
              return "NETWORK";
            case "앱":
              return "APP";
            case "보안":
              return "SECURITY";
            case "빅데이터/AI":
              return "AI";
            case "Vision":
              return "VISION";
            case "인프라":
              return "INFRA";
            case "기타":
              return "ETC";
            default:
              return "ETC";
          }
        }),
        agreeTerms: true,
      };

      const response = await axiosInstance.post("/users/sign-up", requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("직무 설정 완료:", response.data);
      localStorage.removeItem("signupData");
      navigate("/");
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.error("직무 설정 전송 실패:", axiosError.response.data);
      } else {
        console.error("직무 설정 전송 실패:", axiosError.message);
      }
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Container>
      <Title>관심있는 직무를 알려주세요!</Title>
      <DropdownContainer>
        <DropdownButton onClick={toggleDropdown}>
          관심있는 직무를 알려주세요. (중복 선택 가능)
          <DropdownIcon
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
          >
            <path
              d="M8 13.8333L16 21.8333L24 13.8333"
              stroke="#AFAFB6"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </DropdownIcon>
        </DropdownButton>
        {isDropdownOpen && (
          <JobList>
            {jobs.map((job) => (
              <JobItem
                key={job}
                onClick={() => handleJobSelect(job)}
                isSelected={selectedJobs.includes(job)}
              >
                <JobItemIcon
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  {selectedJobs.includes(job) ? (
                    <>
                      <circle cx="12.5" cy="12.5" r="12.5" fill="#463EFB" />
                      <path
                        d="M6.66602 12.4999L10.8327 15.8333L16.666 8.33325"
                        stroke="#E5EFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </>
                  ) : (
                    <>
                      <circle
                        cx="12.5"
                        cy="12.5"
                        r="11.5"
                        stroke="#AFAFB6"
                        strokeWidth="2"
                      />
                      <path
                        d="M6.66602 12.4999L10.8327 15.8333L16.666 8.33325"
                        stroke="#AFAFB6"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </>
                  )}
                </JobItemIcon>
                {job}
              </JobItem>
            ))}
          </JobList>
        )}
      </DropdownContainer>
      <SubmitButton
        onClick={handleSubmit}
        disabled={selectedJobs.length === 0}
        isSelected={selectedJobs.length > 0}
      >
        완성하기
      </SubmitButton>
    </Container>
  );
};

export default ProfileCompletion;
