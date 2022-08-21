import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Config from "./pages/Config";
import Sorteio from "./pages/Sorteio/Sorteio";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Config />} />
          <Route path="/sorteio" element={<Sorteio />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
