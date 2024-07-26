import React, { useState, useEffect } from "react";
import axiosInstance from "../api/AxiosInstance";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
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
} from "../styles/InterestEdit";

const InterestEdit: React.FC = () => {
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const jobs = [
    { label: "웹 프론트엔드", value: "FRONTEND" },
    { label: "백 (서버, CI/CD)", value: "BACKEND" },
    { label: "네트워크/통신", value: "NETWORK" },
    { label: "앱", value: "APP" },
    { label: "보안", value: "SECURITY" },
    { label: "빅데이터/AI", value: "BIGDATA_AI" },
    { label: "Vision", value: "VISION" },
    { label: "인프라", value: "INFRA" },
    { label: "기타", value: "OTHER" },
  ];
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserCategories = async () => {
      try {
        const response = await axiosInstance.get("/users/profile");
        const userCategories = response.data.results.category;
        setSelectedJobs(userCategories);
      } catch (error) {
        console.error("관심 직무 정보를 가져오는 중 오류 발생:", error);
      }
    };

    fetchUserCategories();
  }, []);

  const handleJobSelect = (job: string) => {
    setSelectedJobs((prevSelectedJobs) =>
      prevSelectedJobs.includes(job)
        ? prevSelectedJobs.filter((j) => j !== job)
        : [...prevSelectedJobs, job]
    );
  };

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.put("/users/category", {
        category: selectedJobs,
      });
      console.log("관심 직무 저장:", response.data);
      navigate("/");
    } catch (error) {
      console.error("관심 직무 저장 중 오류 발생:", error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <Header />
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
                  key={job.value}
                  onClick={() => handleJobSelect(job.value)}
                  isSelected={selectedJobs.includes(job.value)}
                >
                  <JobItemIcon
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    {selectedJobs.includes(job.value) ? (
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
                  {job.label}
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
    </>
  );
};

export default InterestEdit;
