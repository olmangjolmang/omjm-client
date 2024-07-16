import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

  const handleSubmit = () => {
    console.log("관심 직무:", selectedJobs);
    navigate("/");
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

const Container = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 165px 350px;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 700;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  margin-bottom: 1rem;
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 60px;
  padding: 14px 20px;
  color: #afafb6;
  font-size: 16px;
  background-color: white;
  border: 1px solid var(--Gray-300, #afafb6);
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownIcon = styled.svg`
  margin-left: 20px;
  margin-right: 16px;
  width: 25px;
  height: 25px;
`;

const JobList = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 4px;
  z-index: 1000;
`;

const JobItem = styled.div<{ isSelected: boolean }>`
  padding: 18px 20px;
  border: 1px solid var(--Gray-100, #f4f4f7);
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? "#e5efff" : "white")};
  &:hover {
    background-color: #f0f0f0;
  }
`;

const JobItemIcon = styled.svg`
  margin-right: 0.5rem;
`;

const SubmitButton = styled.button<{ isSelected: boolean }>`
  margin-top: 40px;
  display: flex;
  width: 515px;
  height: 65px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.isSelected ? "#E5EFFF" : "#F4F4F7")};
  color: ${(props) => (props.isSelected ? "#463EFB" : "#AFAFB6")};
  border: none;
  border-radius: 20px;
  cursor: ${(props) => (props.isSelected ? "pointer" : "not-allowed")};
  line-height: 150%;
  font-size: 20px;
  letter-spacing: -0.1px;
  font-weight: 600;
`;
