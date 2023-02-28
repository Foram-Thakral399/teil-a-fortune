import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../controllers/Home";
import Questions from "../controllers/Questions";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions" element={<Questions/>} />
    </Routes>
  </Router>
);