/* eslint-disable no-unused-vars */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { AnimatePresence, motion } from "framer-motion";

import "./MotionMarkdown.css"

import CurseForgeDownloadCount from "../download-count/CurseForgeDownloadCount";
import ModrinthDownloadCount from "../download-count/ModrinthDownloadCount";
import FactorioModPortalDownloadCount from "../download-count/FactorioModPortalDownloadCount";

// Variants for container and items
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 }
};

// Wrap custom React components
function WrapCustomComponents(Comp) {
  return (props) => (
    <div>
      <Comp {...props} />
    </div>
  );
}

// Mapping markdown elements to motion wrappers
const components = {
  modrinthdownloadcount: WrapCustomComponents(ModrinthDownloadCount),
  curseforgedownloadcount: WrapCustomComponents(CurseForgeDownloadCount),
  factoriomodportaldownloadcount: WrapCustomComponents(FactorioModPortalDownloadCount),
};

function MarkdownWrapper ({content}) {

  return (
    <AnimatePresence mode="wait">
      <motion.div 
      className="projects-description-markdown-container"
      initial={{ opacity: 0, height:0}}
      animate={{ opacity: 1, height:"auto" }}
      exit={{ opacity: 0, height:0 }}
      transition={{ type: "tween", duration: 0.1, ease: "easeIn" }}
      key={Array.from(content).reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0)}    >
        <ReactMarkdown 
        rehypePlugins={[rehypeRaw]} 
        remarkPlugins={[remarkGfm]}
        components={components}
        >
          {content}
        </ReactMarkdown>
      </motion.div>
    </AnimatePresence>
  );
}

export default MarkdownWrapper;