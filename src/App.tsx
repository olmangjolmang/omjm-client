import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainPage from "./pages/MainPage";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { SignupAgree } from "./pages/SignupAgree";
import Article from "./pages/Article";
import ArticleBoards from "./pages/ArticleBoards";
import ProfileCompletion from "./pages/ProfileCompletion";
import ProfileEdit from "./pages/ProfileEdit";
import InterestEdit from "./pages/InterestEdit";
import QnaBoard from "./pages/QnaBoard";
import AnswerList from "./pages/AnswerList";

axios.defaults.baseURL = "http://3.36.247.28";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupagree" element={<SignupAgree />} />
          <Route path="/profile-completion" element={<ProfileCompletion />} />
          <Route path="/profile-edit" element={<ProfileEdit />} />
          <Route path="/edit-interests" element={<InterestEdit />} />
          <Route path="/articles" element={<ArticleBoards />} />
          <Route path="/post/:id" element={<Article />} />
          <Route path="/articles" element={<ArticleBoards />} />
          <Route path="ticleQna" element={<QnaBoard />} />
          <Route path="/ticleQna/:opinionId" element={<AnswerList />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
