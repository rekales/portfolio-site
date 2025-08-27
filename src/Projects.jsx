/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import {motion} from "framer-motion";
import { div, li, ul } from "framer-motion/client";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import "./Projects.css"
import "./ProjectsMarkdown.css"
import ProjectsCategories from "./assets/project_categories.json"

function Projects ({skipAnimation = false}) {

  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  // Todo: remove state because url is the state
  const [descriptionFile, setDescriptionFile] = useState("/markdown/projects_intro.md")
  const [descriptionContent, setDescriptionContent] = useState("")


  useEffect(() => {
  if (!descriptionFile) return;
  fetch(descriptionFile)
    .then((res) => res.text())
    .then((text) => setDescriptionContent(text));
  }, [descriptionFile]);

  useEffect(() => {
    if (paths[0] == "projects" && paths[1] && paths[1] in ProjectsCategories) {
        const projects = ProjectsCategories[paths[1]].projects
      if (paths[2] && paths[2] in projects)
        setDescriptionFile(projects[paths[2]].content)
      else 
        setDescriptionFile(ProjectsCategories[paths[1]].content)
    }
  }, [paths])

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
            {Object.entries(ProjectsCategories).map(([key, p], index) => {
              return (
                <li key={index} data-key={key}>

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
              <div className="projects-description-markdown-container">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{descriptionContent}</ReactMarkdown>;
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