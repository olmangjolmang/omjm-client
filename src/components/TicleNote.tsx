import React, { useState } from "react";
import styled from "styled-components";
import { useMyQuestion } from "../hooks/useMyQuestion";
import axiosInstance from "../api/AxiosInstance";

export interface Note {
  noteId: number;
  content: string;
  memoDate: string; // [year, month, day, hour, minute, second, nanoseconds]
  postId: number;
  postTitle: string;
  targetText: string;
}

const TicleNote = ({
  noteId,
  content,
  memoDate,
  postId,
  postTitle,
  targetText,
}: Note) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [answer, setAnswer] = useState(content);
  const date = memoDate.split("T")[0];
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
    // Replace with your question ID
    try {
      await axiosInstance.put(`/mypage/my-note/${noteId}`, {
        content: answer,
      });
      // Optionally handle the response or refresh data
    } catch (error) {
      console.error("Failed to save the answer", error);
    }
  };

  const handleDelete = async () => {
    // Replace with your question ID

    try {
      await axiosInstance.delete(`/mypage/my-note/${noteId}`);
      // Optionally handle the response or refresh data
      alert("삭제되었습니다.");
    } catch (error) {
      console.error("Failed to delete the answer", error);
    }
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  const { data, isLoading, isError } = useMyQuestion(1);
  console.log(data);

  return (
    <Container>
      <QuestionSection onClick={toggleOpen}>
        <QnD>
          <Question>{postTitle}</Question>
          <Date>{date}</Date>
        </QnD>
        <ToggleIcon>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M24 21.334L16 13.334L8 21.334"
                stroke="#272726"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M8 13.334L16 21.334L24 13.334"
                stroke="#272726"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </ToggleIcon>
      </QuestionSection>
      <Content>{targetText}</Content>
      {isOpen && (
        <AnswerSection>
          {isEditing ? (
            <TextArea value={answer} onChange={handleAnswerChange} />
          ) : (
            <Answer>{answer}</Answer>
          )}
          <ActionButtons>
            {isEditing ? (
              <ActionButton onClick={handleSave}>완료</ActionButton>
            ) : (
              <>
                <ActionButton onClick={handleEdit}>수정</ActionButton>
                <ActionButton onClick={handleDelete}>삭제</ActionButton>
              </>
            )}
          </ActionButtons>
        </AnswerSection>
      )}
    </Container>
  );
};

export default TicleNote;

const Container = styled.div`
  background-color: #f4f4f7;
  border-radius: 10px;
  padding: 20px;

  min-width: 1000px;
  white-space: nowrap;
  margin: 0 auto;
  margin: 20px 112px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const QuestionSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QnD = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex: 1;
`;

const Question = styled.div`
  color: var(--Blue-300, #463efb);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.1px;
  margin-right: 24px;
`;

const Date = styled.div`
  color: var(--Gray-400, #7f7f86);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.07px;
`;

const Content = styled.div`
  color: var(--Black-100, #000);
  /* Title/3 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  letter-spacing: -0.1px;
`;

const ToggleIcon = styled.div`
  width: 32px;
  height: 32px;
`;

const AnswerSection = styled.div`
  margin-top: 20px;
`;

const Answer = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 1000px;
  font-family: Pretendard;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #463efb;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;
