import React from "react";
import Board from "../components/Boards";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  max-width: 1440px;
  min-width: 1000px;
`;

const ArticleBoards = () => {
  return (
    <>
      <Header />
      <PageContainer>
        <Board />
      </PageContainer>
      <Footer />
    </>
  );
};

export default ArticleBoards;
