import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Article from "./Article";

const Main: React.FC = () => {
  return (
    <div>
      <Header />
      <Article />
      <Footer />
    </div>
  );
};

export default Main;
