import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./Home.css"

function Home() {
  const navigate = useNavigate();

  const [showName, setShowName] = useState(true);

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
    ],
    maxWidth: ["0px", "0px", "630px", "630px"],
  }

  const animateSubtext = {
    borderRightColor: [
    "rgba(255,255,255,0)", 
    "rgba(255,255,255,1)", 
    "rgba(255,255,255,1)", 
    "rgba(255,255,255,0)"
    ],
    maxWidth: ["0px", "0px", "300px", "300px"],
  }

  const exit = {
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: "linear",
    }
  }

  const transition = {
    duration: 0.4,
    times: [0, 0.15, 0.85, 1],
    ease: "linear",
  }

  return (
    <div className="home-content">
        <div className="centered-content">
          <div className="title-name-container">
            <AnimatePresence>
              {showName && (<motion.h1 className="title-name"
              initial={initial}
              animate={animateName}
              transition={transition}
              exit={exit}
              key={"name"}
              style={{overflow: "hidden", whiteSpace: "nowrap"}}
              >
                John Portfolio
              </motion.h1>)}
              {showName && (<motion.h2 className="title-subtext"
              initial={initial}
              animate={animateSubtext}
              transition={transition}
              exit={exit}
              key={"header"}
              style={{overflow: "hidden", whiteSpace: "nowrap"}}
              >
                Doing a li'l bit of everything
              </motion.h2>)}
            </AnimatePresence>
          </div>
        </div>

      <AnimatePresence
      onExitComplete={() => {navigate("/projects");}}
      >
        {showName && <motion.button className="projects-button" 
        onClick={() => setShowName(false)}
        initial={{ x: "-100%", y:"-65%", rotate:"90deg" }}
        animate={{ x: 0, y:"-65%", rotate:"90deg" }}
        exit={{ x: "-300%", y:"-65%", rotate:"90deg" }}
        key={"button"}
        transition={{ duration: 0.15 }}
        >
          <h3 className="jumper1">▲</h3>
          <h3 className="jumper2">Projects</h3>
        </motion.button>}
      </AnimatePresence>

      <AnimatePresence>
        
      </AnimatePresence>


    </div>
  );
}

export default Home;