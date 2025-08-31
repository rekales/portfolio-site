import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./Home.css"

function Home() {
  const navigate = useNavigate();

  const initial = {
    borderRightWidth: "4px",
    borderRightStyle: "solid",
    borderRightColor: 
    "rgba(255,255,255,0)",
    maxWidth: 0,
  }

  const animateName = {
    borderRightColor: [
    "rgba(255,255,255,0)", 
    "rgba(255,255,255,1)", 
    "rgba(255,255,255,1)", 
    "rgba(255,255,255,0)"
    ], // keyframes for border opacity
    maxWidth: ["0px", "0px", "630px", "630px"], // keyframes for width
  }

  const animateSubtext = {
    borderRightColor: [
    "rgba(255,255,255,0)", 
    "rgba(255,255,255,1)", 
    "rgba(255,255,255,1)", 
    "rgba(255,255,255,0)"
    ], // keyframes for border opacity
    maxWidth: ["0px", "0px", "300px", "300px"], // keyframes for width
  }

  const transition = {
    duration: 0.4, // total animation duration
    times: [0, 0.15, 0.85, 1], // map times to keyframes
    ease: "linear",
  }

  return (
    <div className="home-content">
      <div className="centered-content">
        <div className="title-name-container">
          <motion.h1 className="title-name"
          initial={initial}
          animate={animateName}
          transition={transition}
          style={{overflow: "hidden", whiteSpace: "nowrap"}}
          >
            John Portfolio
          </motion.h1>
          <motion.h2 className="title-subtext"
          initial={initial}
          animate={animateSubtext}
          transition={transition}
          style={{overflow: "hidden", whiteSpace: "nowrap"}}
          >
            Doing a li'l bit of everything
          </motion.h2>
        </div>      
      </div>

      <AnimatePresence>
        <motion.button className="projects-button" 
        onClick={() => navigate("/projects")}
        initial={{ x: "-100%", y:"-65%", rotate:"90deg" }}
        animate={{ x: 0, y:"-65%", rotate:"90deg" }}
        exit={{ x: "-100%", y:"-65%", rotate:"90deg" }}
        transition={{ duration: 0.1 }}
        >
          <h3 className="jumper1">▲</h3>
          <h3 className="jumper2">Projects</h3>
        </motion.button>
      </AnimatePresence>
    </div>
  );
}

export default Home;