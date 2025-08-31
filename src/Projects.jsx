/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Projects.css"
import ProjectsCategories from "./assets/project_categories.json"

import MotionMarkdown from "./modules/motion-markdown/MotionMarkdown";

function Projects ({skipAnimation = false}) {

  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  const [descriptionFile, setDescriptionFile] = useState("")
  const [descriptionContent, setDescriptionContent] = useState("")
  const [ShowDescription, setShowDescription] = useState(false)


  useEffect(() => {
  if (!descriptionFile) return;
  fetch(descriptionFile)
    .then((res) => res.text())
    .then((text) => setDescriptionContent(text));
  }, [descriptionFile]);

  useEffect(() => {
    if (paths[0] == "projects") {
      if (paths[1] && paths[1] in ProjectsCategories) {
          const projects = ProjectsCategories[paths[1]].projects
        if (paths[2] && paths[2] in projects)
          setDescriptionFile(projects[paths[2]].content)
        else 
          setDescriptionFile(ProjectsCategories[paths[1]].content)
      } else {
        setDescriptionFile("/markdown/projects_intro.md")
      }
    }

    if (paths[1] && paths[1] in ProjectsCategories) {
        const projects = ProjectsCategories[paths[1]].projects
      if (paths[2] && paths[2] in projects)
        setDescriptionFile(projects[paths[2]].content)
      else 
        setDescriptionFile(ProjectsCategories[paths[1]].content)
    }
  }, [paths])

const list = {
  hidden: {
    opacity: 0,
    x: "-100%"
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const listItem = {
  hidden: { opacity: 0, x: "-100%" },
  show: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "-100%" },
};

  return (
    <div className="projects-content">
      <div className="projects-list-container">
        <motion.h1 
        className="projects-header"
        initial={skipAnimation ? false : { x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.2 }}
        >
          Projects
        </motion.h1>

        <div className="project-categories-container">
          <motion.ul
          className="project-categories"
          variants={list}
          initial={skipAnimation ? "show" : "hidden"}
          animate="show" 
          exit="exit"
          style={{ listStyle: "none", padding: 0 }}
          >
            {Object.entries(ProjectsCategories).map(([key, p], index) => {
              return (
                <motion.li
                key={index} 
                data-key={key}
                variants={listItem}
                >
                  <Link to={"/projects/"+key} className="project-category-container">
                    <div className="project-category-image-container">
                      <img src={p.icon} alt="" />
                    </div>
                    <div className="project-category-text">
                      <h2 className="project-category-name">{p.category}</h2>
                      <h3 className="project-category-subtext">{p.subtext}</h3>
                    </div>
                  </Link>

                  <motion.ul 
                  className= "project-name-list"
                  initial={{height: 0, opacity: 0}}
                  animate={{height: paths[1]==key ? "auto" : 0, opacity: paths[1]==key ? 1 : 0}}
                  transition={{duration: 0.2}}
                  style={{overflow: "hidden"}}>
                    {Object.entries(p.projects).map(([ikey, j], n) => {
                      return (
                      <li key={n}>
                        <Link to={"/projects/"+key+"/"+ikey}>{j.name}</Link>
                      </li>);
                    })}
                  </motion.ul>

                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>

      <div className="projects-description-container">
          <motion.div className="projects-description-box"
          initial={{ opacity: 0, scaleX: 0.25, scaleY: 0}}
          animate={{ opacity: 1, scaleX: 1, scaleY: 1}}
          exit={{ opacity: 0 , scaleX: 0.25, scaleY: 0, transition: {when: "afterChildren",staggerChildren: 0.2}}}
          onAnimationComplete={() => setShowDescription(true)}
          transition={{ duration: 0.3 }}
          >
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

            {ShowDescription && (<div>
              <MotionMarkdown content={descriptionContent}/>
            </div>)}
          </motion.div>
      </div>
    </div>
  );
}

Projects.propTypes = {
    skipAnimation: PropTypes.bool,
}
export default Projects;