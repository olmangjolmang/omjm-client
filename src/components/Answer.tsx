import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ticleImg from "../assets/signupmodalimg.png";

interface Props {
  commentId: number;
  nickname: string;
  heartCount: number;
  content: string;
  isHeart: boolean;
}

const Answer = ({
  commentId,
  nickname,
  heartCount,
  content,
  isHeart,
}: Props) => {
  const [likes, setLikes] = useState(heartCount);
  const [liked, setLiked] = useState(isHeart);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => axios.post(`/opinion/comment/${commentId}/heart`),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: ["opinionDetails", commentId],
      });
      const previousData = queryClient.getQueryData([
        "opinionDetails",
        commentId,
      ]);
      queryClient.setQueryData(
        ["opinionDetails", commentId],
        (oldData: Props) => {
          if (!oldData) return oldData;
          const newHeartCount = liked
            ? oldData.heartCount - 1
            : oldData.heartCount + 1;
          return { ...oldData, isHeart: !liked, heartCount: newHeartCount };
        }
      );
      setLiked(!liked);
      setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
      return { previousData };
    },
    onError: (err, variables, context) => {
      queryClient.setQueryData(
        ["opinionDetails", commentId],
        context?.previousData
      );
      alert("로그인 후 서비스를 이용해주세요!");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["opinionDetails", commentId],
      });
    },
  });

  const handleLike = () => {
    mutation.mutate();
  };

  return (
    <AnswerContainer>
      <Container>
        <ProfileSection>
          <ProfileImage src={ticleImg} alt="Profile" />
          <Author>{nickname}</Author>
        </ProfileSection>
        <LikeSection onClick={handleLike}>
          {isHeart === false ? <NonHeartIcon /> : <HeartIcon />}
          <Likes>{heartCount}</Likes>
        </LikeSection>
      </Container>
      <Content>{content}</Content>
    </AnswerContainer>
  );
};

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  margin-bottom: 35px;
  gap: 35px 900px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 56px;
  height: 52px;
  border-radius: 50%;
  margin-right: 20px;
`;

const Author = styled.div`
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  letter-spacing: -0.12px;
`;

const Content = styled.div`
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  text-align: left; /* 좌측 정렬 */
  margin-bottom: 76px;
`;

const LikeSection = styled.div`
  display: flex;
  align-items: center;
`;

const HeartIcon = styled.div`
  width: 41px;
  height: 41px;
  margin-right: 16px;
  background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"%3E%3Cpath d="M20.5007 35.5L18.084 33.342C9.50065 25.7071 3.83398 20.6717 3.83398 14.4918C3.83398 9.4564 7.86732 5.5 13.0007 5.5C15.9007 5.5 18.684 6.82425 20.5007 8.91689C22.3173 6.82425 25.1007 5.5 28.0007 5.5C33.134 5.5 37.1673 9.4564 37.1673 14.4918C37.1673 20.6717 31.5007 25.7071 22.9173 33.3583L20.5007 35.5Z" fill="%23FF4444" stroke="%23FF4444" stroke-width="3"/%3E%3C/svg%3E')
    no-repeat center center;
  background-size: contain;
`;
const NonHeartIcon = styled.div`
  width: 41px;
  height: 41px;
  margin-right: 16px;
  background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"%3E%3Cpath d="M20.0007 35L17.584 32.842C9.00065 25.2071 3.33398 20.1717 3.33398 13.9918C3.33398 8.9564 7.36732 5 12.5007 5C15.4007 5 18.184 6.32425 20.0007 8.41689C21.8173 6.32425 24.6007 5 27.5007 5C32.634 5 36.6673 8.9564 36.6673 13.9918C36.6673 20.1717 31.0007 25.2071 22.4173 32.8583L20.0007 35Z" stroke="%23FF4444" stroke-width="3"/%3E%3C/svg%3E')
    no-repeat center center;
  background-size: contain;
`;

// <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
//   <path d="M20.0007 35L17.584 32.842C9.00065 25.2071 3.33398 20.1717 3.33398 13.9918C3.33398 8.9564 7.36732 5 12.5007 5C15.4007 5 18.184 6.32425 20.0007 8.41689C21.8173 6.32425 24.6007 5 27.5007 5C32.634 5 36.6673 8.9564 36.6673 13.9918C36.6673 20.1717 31.0007 25.2071 22.4173 32.8583L20.0007 35Z" stroke="#FF4444" stroke-width="3"/>
// </svg>

const Likes = styled.div`
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
`;

export default Answer;
