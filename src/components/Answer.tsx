import React from "react";
import styled from "styled-components";

interface Props {
  profileImage: string;
  author: string;
  likes: number;
  content: string;
}

const Answer: React.FC<Props> = ({ profileImage, author, likes, content }) => {
  return (
    <>
      <Container>
        <ProfileSection>
          <ProfileImage src={profileImage} alt="Profile" />
          <Author>{author}</Author>
        </ProfileSection>
        <LikeSection>
          <HeartIcon />
          <Likes>{likes}</Likes>
        </LikeSection>
      </Container>
      <Content>{content}</Content>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 35px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 52px;
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
  flex: 1;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  margin-left: 10px;
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

const Likes = styled.div`
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
`;

export default Answer;
