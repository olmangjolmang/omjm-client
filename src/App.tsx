import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainPage from "./pages/MainPage";
import Main from "./pages/Main";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { SignupAgree } from "./pages/SignupAgree";
import ProfileEdit from "./pages/ProfileEdit";
import InterestEdit from "./pages/InterestEdit";
import ArticleBoards from "./pages/ArticleBoards";

axios.defaults.baseURL = "http://3.36.247.28";
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/article" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupagree" element={<SignupAgree />} />
          <Route path="/profile-edit" element={<ProfileEdit />} />
          <Route path="/edit-interests" element={<InterestEdit />} />
          <Route path="articles" element={<ArticleBoards />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
