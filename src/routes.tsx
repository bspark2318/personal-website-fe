import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "views/Home/index";
import About from "views/About/index";

export default function RouterComponent(): JSX.Element {
  return (
    <div className="flex w-full">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}
