import React from "react";
import Board from "../components/Boards";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { PageContainer } from "../styles/ArticleBoards";

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
