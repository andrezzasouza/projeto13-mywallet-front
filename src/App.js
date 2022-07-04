import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/LoginAndSignUp/Login";
import SignUp from "./components/LoginAndSignUp/SignUp";
import Income from "./components/IncomeAndExpenses/income";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/income" element={<Income />} />
      </Routes>
    </BrowserRouter>
  );
}