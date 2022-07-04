import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./components/LoginAndSignUp/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}