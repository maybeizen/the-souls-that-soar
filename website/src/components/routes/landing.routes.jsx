import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../../pages/Landing";
import About from "../../pages/About";
import Characters from "../../pages/Characters";
import ValkyrianWings from "../../pages/ValkyrianWings";
import Nests from "../../pages/Nests";
import World from "../../pages/World";

export default function LandingRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/valkyrian-wings" element={<ValkyrianWings />} />
      <Route path="/nests" element={<Nests />} />
      <Route path="/world" element={<World />} />
    </Routes>
  );
}
