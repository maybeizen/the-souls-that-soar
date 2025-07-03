import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingRoutes from "../routes/landing.routes";
import Story from "../../pages/Story";
import StoryIndex from "../../pages/StoryIndex";
import "../../assets/css/all.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/story" element={<StoryIndex />} />
          <Route path="/story/:volume/:chapter" element={<Story />} />
          <Route path="/*" element={<LandingRoutes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
