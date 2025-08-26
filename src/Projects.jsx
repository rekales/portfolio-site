/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import {motion} from "framer-motion";
import { useState } from "react";

import "./Projects.css"
import { div, li, ul } from "framer-motion/client";

function Projects ({skipAnimation = false}) {

  const projectsList = [
    {
      "category": "Minecraft",
      "subtext": "Mod Development",
      "icon": "/icons/mmc_logo.png",
      "projects": [
        "Create More: Linked Remote",
        "Create More: Parallel Pipes",
        "Create More: Package Pipebombs",
        "Create More: Package Couriers"
      ]
    },
    {
      "category": "Factorio",
      "subtext": "Mod Development",
      "icon": "/icons/factorio_logo.png",
      "projects": [
        "Spoilage Scanner",
        "Agri No Spoil",
        "Fire Starter",
        "Space Exploration Stuff"
      ]
    },    {
      "category": "RimWorld",
      "subtext": "Mod Development",
      "icon": "/icons/rimworld_logo.png",
      "projects": [
        "Tasks - General Automation Tool",
        "RimScript",
      ]
    },    {
      "category": "Unity",
      "subtext": "Game Dev",
      "icon": "/icons/unity_logo.png",
      "projects": [
        "JARTS",
      ]
    },    {
      "category": "Mechatronics",
      "subtext": "Logs & Designs",
      "icon": "/icons/mechatronics_logo.png",
      "projects": [
        "Bionic Hand",
        "Constant Force Linear Actuator",
      ]
    },
  ]

  const [openIndex, setOpenIndex] = useState(-1);

  const openList = (e) => {
    const index = Number(e.currentTarget.parentElement.dataset.index);
    // console.log(e.currentTarget.parentElement.dataset.index);
    if (index == openIndex) 
      setOpenIndex(-1)
    else
      setOpenIndex(index);
  }

  return (
    <div className="projects-content">
      <motion.div
      className="projects-name-container"
      initial={skipAnimation ? false : { x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.3 }}
      >
        <h1 className="projects-header">Projects</h1>

        <div className="project-category-list-container">
          <ul className="project-category-list">
            {projectsList.map((p, i) => {
              return (
                <li key={i} data-index={i+0}>

                  <button className="project-category-container" onClick={openList}>
                    <div className="project-category-image-container">
                      <img src={p.icon} alt="" />
                    </div>
                    <div className="project-category-text">
                      <h2 className="project-category-name">{p.category}</h2>
                      <h3 className="project-category-subtext">{p.subtext}</h3>
                    </div>
                  </button>

                  <motion.ul 
                  className= "project-name-list"
                  initial={{height: 0, opacity: 0}}
                  animate={{height: openIndex==i ? "auto" : 0, opacity: openIndex==i ? 1 : 0}}
                  transition={{duration: 0.2}}
                  style={{overflow: "hidden"}}>
                    {p.projects.map((n, j) => {
                      return (<li key={j}>{n}</li>);
                    })}
                  </motion.ul>

                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
      <div className="projects-description-container">
          <div className="projects-description-box">
              <svg className="top-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path style={{stroke:"#ffffff",strokeWidth:6,strokeLinecap:"square"}}
                  d="M0 100V0m0 0h100"
                />
              </svg>
              <svg className="bottom-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path style={{stroke:"#ffffff",strokeWidth:6,strokeLinecap:"square"}}
                  d="M0 100h100m0 0V0"
                />
              </svg>
              <div className="projects-description-markdown">
                john
              </div>
          </div>
      </div>
    </div>
  );
}

Projects.propTypes = {
    skipAnimation: PropTypes.bool,
}
export default Projects;