import React from "react";
import styled from "@emotion/styled";

// 게시물 정보를 나타내는 타입 정의
type PostItemProps = {
  imageUrl: string;
  category: string;
  title: string;
  author: string;
  size: number; // 컴포넌트의 크기 (정사각형)
};

const PostItem: React.FC<PostItemProps> = ({
  imageUrl,
  category,
  title,
  author,
  size,
}) => {
  return (
    <Container size={size}>
      <Image src={imageUrl} alt="미리보기 이미지" />
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Author>{author}</Author>
    </Container>
  );
};

export default PostItem;

// 스타일드 컴포넌트 정의
const Container = styled.div<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #ccc;
  padding: 16px;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Category = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #666;
`;

const Title = styled.div`
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.2;
  height: 2.4em; // 2줄 높이 확보
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Author = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #333;
`;
