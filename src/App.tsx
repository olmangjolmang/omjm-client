import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { SignupAgree } from "./pages/SignupAgree";
import ProfileEdit from "./pages/ProfileEdit";
import InterestEdit from "./pages/InterestEdit";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupagree" element={<SignupAgree />} />
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="/edit-interests" element={<InterestEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
