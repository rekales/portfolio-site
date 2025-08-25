/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import {motion} from "framer-motion";


function Projects ({skipAnimation = false}) {
    return (
        <motion.div
        initial={skipAnimation ? false : { x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
            <h1>Projects</h1>
        </motion.div>
    );
}

Projects.propTypes = {
    skipAnimation: PropTypes.bool,
}
export default Projects;