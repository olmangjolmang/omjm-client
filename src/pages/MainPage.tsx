import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const MainPage = () => {
  return (
    <Container>
      <Header />
      <MainContent>{/* Your main content goes here */}</MainContent>
      <Footer />
    </Container>
  );
};

export default MainPage;
