/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */

// Note: Icon standard, 256x256 and 8px empty space per side
// Todo: redo icons
// Todo: Use SVG graphics for logos

import { useState } from "react";
import "./App.css"

import Header from "./Header.jsx"
import TitleName from "./TitleName.jsx";

function App() {
  return(
    <>
      <Header/>
      <div className="content">
        <div className="centered-content">
          <TitleName/>
        </div>
        <div className="projects-button">
          <h3 className="jumper1">▲</h3>
          <h3 className="jumper2">Projects</h3>
        </div>
      </div>
    </>
  );
}

export default App
