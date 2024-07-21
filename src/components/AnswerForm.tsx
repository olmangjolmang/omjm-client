import React, { useState } from "react";
import styled from "styled-components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/AxiosInstance"; // Axios 인스턴스 가져오기

interface AnswerFormProps {
  opinionId: number;
}

const AnswerForm = ({ opinionId }: AnswerFormProps) => {
  const [content, setContent] = useState("");
  const [charCount, setCharCount] = useState(0);
  const queryClient = useQueryClient();
  const token = localStorage.getItem("token");
  console.log(token);

  const mutation = useMutation({
    mutationFn: (newComment: { content: string }) =>
      axiosInstance.post(`/opinion/${opinionId}/comment`, newComment),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["opinionDetails", opinionId],
      });
      window.location.reload();
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setCharCount(e.target.value.length);
  };

  const handleSubmit = () => {
    mutation.mutate({ content });
    console.log("댓글 등록:", content);
  };

  return (
    <FormContainer>
      <Textarea
        placeholder="질문에 대한 나만의 답을 작성해주세요! (답변 등록은 한 번만 가능합니다)."
        value={content}
        onChange={handleChange}
        maxLength={500}
      />
      <BottomContainer>
        <CharCount>{charCount}/500</CharCount>
        <SubmitButton onClick={handleSubmit}>등록</SubmitButton>
      </BottomContainer>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f7;
  padding: 20px;
  border-radius: 10px;
  min-width: 1100px;
  box-sizing: border-box;
  margin-bottom: 80px;
`;

const Textarea = styled.textarea`
  height: 100px;
  padding: 10px;
  background-color: #f4f4f7;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-family: Pretendard;
  resize: none;
  outline: none;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
`;

const CharCount = styled.div`
  font-size: 16px;
  color: #afafb6;
  margin-right: 32px;
`;

const SubmitButton = styled.button`
  background-color: #463efb;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-family: Pretendard;

  &:hover {
    background-color: #362eda;
  }
`;

export default AnswerForm;
