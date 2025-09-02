import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./Home.css"

function Home() {
  const navigate = useNavigate();

  const [showName, setShowName] = useState(true);

  const formatter = new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 2
  });

  function daysUntil(lastDate) {
    const last = new Date(lastDate);
    const target = new Date();
    const diffMs = target - last;
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }

  const newCommitsEstimate = Math.trunc(daysUntil("2025-8-30")*0.7);
  const commitEstimate = 421 + newCommitsEstimate;
  const linesEstimate = 37289 + newCommitsEstimate * 48;

  const initial = {
    borderRightWidth: "4px",
    borderLeftWidth: "4px",
    borderRightStyle: "solid",
    borderRightColor: 
    "rgba(255,255,255,0)",
    borderLeftColor: 
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

    const animateStatistics = {
    borderLeftColor: [
    "rgba(255,255,255,0)", 
    "rgba(255,255,255,1)", 
    "rgba(255,255,255,1)", 
    "rgba(255,255,255,0)"
    ],
    maxWidth: ["0px", "0px", "360px", "360px"],
  }

  const exit = {
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: "linear",
    }
  }

  const transition = {
    duration: 10.4,
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


      {<motion.div className="github-statistic-container"
      initial={initial}
      animate={animateName}
      transition={transition}
      exit={{opacity: 0, y: "100%", transition: {duration: 0.15, ease: "linear"}}}
      key={"statistics"}
      style={{overflow: "hidden", whiteSpace: "nowrap"}}
      >
        <h2>
          Github Statistics*
          <span className="github-statistic-tooltip">
            *private repository stats included
          </span>
        </h2>
        <p>{commitEstimate}&nbsp; Lifetime Commits</p>
        <p>{formatter.format(linesEstimate)}&nbsp; Lines of Code Comitted</p>
        <p>{23}&nbsp; Issues Resolved</p>
      </motion.div>}
    </div>
  );
}

export default Home;