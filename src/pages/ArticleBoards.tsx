import React from "react";
import PostBoard from "../components/Boards";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ArticleBoards: React.FC = () => {
  return (
    <PageContainer>
      <PostBoard />
    </PageContainer>
  );
};

export default ArticleBoards;
