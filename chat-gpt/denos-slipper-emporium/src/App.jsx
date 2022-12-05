import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Index from "./pages/Index.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";

export default function App(props) {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/:coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}