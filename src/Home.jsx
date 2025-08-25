import { useNavigate } from "react-router-dom";

import "./Home.css"

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="centered-content">
        <div className="title-name-container">
        <h1 className="title-name">John Portfolio</h1>
        <h2 className="title-subtext">Doing a li'l bit of everything</h2>
    </div>      </div>
      <button className="projects-button" onClick={() => navigate("/projects")}>
        <h3 className="jumper1">▲</h3>
        <h3 className="jumper2">Projects</h3>
      </button>
    </>
  );
}

export default Home;