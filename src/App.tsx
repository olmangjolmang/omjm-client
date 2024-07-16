import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { SignupAgree } from "./pages/SignupAgree";
import ProfileCompletion from "./pages/ProfileCompletion";
import Main from "./pages/Main";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/article" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupagree" element={<SignupAgree />} />
        <Route path="/profile-completion" element={<ProfileCompletion />} />
      </Routes>
    </Router>
  );
};

export default App;
