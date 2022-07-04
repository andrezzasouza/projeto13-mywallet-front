import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/LoginAndSignUp/Login";
import SignUp from "./components/LoginAndSignUp/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}