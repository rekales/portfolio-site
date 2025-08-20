import './MainIcons.css'

function MainIcons({text, subtext, icon}) {
  return (
    <div className="main-icons">
      <img src={icon} alt="" />
      <div className="main-icons-text" >
        <h2>{text}</h2>
        <h3>{subtext}</h3>
      </div>
    </div>
  )
}

export default MainIcons;