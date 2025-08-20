/* eslint-disable no-irregular-whitespace */
import FactorioIcon from "./assets/icons/factorio_logo.png";
import RimworldIcon from "./assets/icons/rimworld_logo.png";
import MMCIcon from "./assets/icons/mmc_logo.png";
import UnityIcon from "./assets/icons/unity_logo.png";
import GithubIcon from "./assets/icons/github_logo.png";
import MechatronicsIcon from "./assets/icons/mechatronics_logo.png";
import MeIcon from "./assets/icons/about_me_logo.png";

// Note: Icon standard, 256x256 and 8px empty space per side
// Todo: redo icons

import MainIcons from "./MainIcons";
// import "./ChakraPetchFont.css"

function App() {
  
  return(
    <>
      <MainIcons
      text = "Factorio"
      subtext = "Mod Development　"
      icon = {FactorioIcon}
      />

      {/* <MainIcons
      text = "RimWorld"
      subtext = "Mod Development　"
      icon = {RimworldIcon}
      /> */}

      {/* <MainIcons
      text = "Minecraft"
      subtext = "Mod Development　"
      icon = {MMCIcon}
      /> */}

      {/* <MainIcons
      text = "Unity"
      subtext = "Game Dev　　"
      icon = {UnityIcon}
      /> */}

      {/* <MainIcons
      text = "Github"
      subtext = "Statistics　"
      icon = {GithubIcon}
      /> */}

      {/* <MainIcons
      text = "Mechatronics"
      subtext = "Project Logs　"
      icon = {MechatronicsIcon}
      /> */}

      {/* <MainIcons
      text = "About Me"
      subtext = ""
      icon = {MeIcon}
      /> */}
    </>

    

  );
}

export default App
