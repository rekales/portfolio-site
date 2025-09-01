import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import "./Header.css"

function Header() {
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("rekales");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return(
    <div className="header">
      <button className="header-home-button" onClick={() => navigate("/")}>
        <img className="header-logo" src={import.meta.env.BASE_URL + "logo_v2.png"} alt="" />
        <h2 className="header-text">Krei</h2>
      </button>

      <div className="header-links">
        <a className="header-link-container" href="https://github.com/rekales">
          <svg width="48" height="48" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" 
            d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 
            45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 
            10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 
            44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 
            49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 
            8.834 15.199 23.178 10.803 28.815 8.265"/>
          </svg>
          <h4 className="header-link-text">Github</h4>
        </a>

        <button className="header-link-container" onClick={handleCopy}>
          <svg width="48" height="48" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" 
            d="m68 138-8 16c-10.19-4.246-20.742-8.492-31.96-15.8-3.912-2.549-6.284-6.88-6.378-11.548-.488-23.964 5.134-48.056 
            19.369-73.528 1.863-3.334 4.967-5.778 8.567-7.056C58.186 43.02 64.016 40.664 74 39l6 11s6-2 16-2 16 2 16 2l6-11c9.984 
            1.664 15.814 4.02 24.402 7.068 3.6 1.278 6.704 3.722 8.567 7.056 14.235 25.472 19.857 49.564 19.37 73.528-.095 4.668-2.467 
            8.999-6.379 11.548-11.218 7.308-21.769 11.554-31.96 15.8l-8-16m-68-8s20 10 40 10 40-10 40-10"/>
            <ellipse cx="71" cy="101" fill="currentColor" rx="13" ry="15"/>
            <ellipse cx="121" cy="101" fill="currentColor" rx="13" ry="15"/>
          </svg>
          <h4 className="header-link-text">Discord</h4>
        </button>

        <a className="header-link-container" href="https://ko-fi.com/krei_">
          <svg width="48" height="48" viewBox="0 0 50.8 50.8" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" stroke="currentColor">
              <path d="M4.5 10.853h28.295v19.225a9.07 9.07 0 0 1-9.07 9.07H13.57a9.07 9.07 0 0 1-9.07-9.07z"/>
              <path d="m12.197 26.95 6.45 6.45 6.45-6.45a8.2 8.2 0 0 0 2.402-5.799h0a4.51 4.51 0 0 0-4.212-4.546 
              4.426 4.426 0 0 0-4.64 4.421 4.426 4.426 0 0 0-4.64-4.42 4.51 4.51 0 0 0-4.212 4.545h0a8.2 8.2 0 0 0 2.402 
              5.798m20.598-16.096h2.935a7.77 7.77 0 0 1 0 15.54h-2.935"/>
            </g>
          </svg>
          <h4 className="header-link-text">Ko-fi</h4>
        </a>
      </div>


      <AnimatePresence>
        {showToast && <motion.div className="toast-notif"
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 0, transition: { duration: 0.4 }}}
        transition={{ duration: 0.2 }}
        >
          <p>Copied username: "rekales" to clipboard</p>
        </motion.div>}
      </AnimatePresence>

    </div>
  );
}

export default Header