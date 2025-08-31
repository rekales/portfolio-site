// Note: Icon standard, 256x256 and 8px empty space per side
// Todo: redo icons
// Todo: Use SVG graphics for logos

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css"

import Header from "./Header.jsx"
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";

function App() {
  return(
    <Router basename="/portfolio-site">
      <Header/>
      <div className="content">
        <AnimatedRoutes/>
      </div>
      <p className="footer">2025© Krei's Shitass Portfolio</p>
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  const topLevelKey = location.pathname.startsWith("/projects")
       ? "projects" : location.pathname;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={topLevelKey}>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects/*" element={<Projects skipAnimation={isFirstLoad}/>}/>
      </Routes>
    </AnimatePresence>
  )
}



export default App
