import React, { useState } from 'react'
import menuOptions from '../data/options.js'
import '../styles/menu.css'

import { NavLink } from 'react-router-dom'

import GhWhite from '../images/github_100px_1.png'
import GhBlack from '../images/github_100px_2.png'
import InBlue from '../images/linkedin_100px_1.png'
import InWhite from '../images/linkedin_100px_2.png'

const Menu = (props) => {
  const [GHButton, setGHButton] = useState({
    "button": GhBlack,
    "background": "#24292e",
    "color": "#fafbfc"
  });

  const [INButton, setINButton] = useState({
    "button": InBlue,
    "background": "#144057",
    "color": "#fafbfc"
  });

  const mediaOnMouseOver = (e) => {
    if(e.target.id === "GhButton" || e.target.parentNode.id === "GhButton")
      setGHButton({"button": GhWhite, "background": "#fafbfc", "color": "#24292e"})

    if(e.target.id === "InButton" || e.target.parentNode.id === "InButton")
      setINButton({"button": InWhite, "background": "#fafbfc", "color": "#144057"})
  }

  const mediaOnMouseOut = (e) => {
    if(e.target.id === "GhButton" || e.target.parentNode.id === "GhButton")
      setGHButton({"button": GhBlack, "background": "#24292e", "color": "#fafbfc"})

    if(e.target.id === "InButton" || e.target.parentNode.id === "InButton")
      setINButton({"button": InBlue, "background": "#144057", "color": "#fafbfc"})
  }

  return(
    <div className="Menu">
      <header className="Header">
        <h1>Juan D. Diaz</h1>
      </header>

      <div className="menu-title">
        Full Stack Engineer with 6+ Years of Experience Delivering Scalable Web Technologies for Business Growth and Leading High-Impact Projects
      </div>

      {menuOptions.map((item, key) =>
        <NavLink key={key} to={item.to} exact activeClassName="active-option">
          <div className="Option">{item.title}</div>
        </NavLink>
      )}

      <section className="social-container">
        <div className="social-item">
          <a href="https://www.linkedin.com/in/juanektbb/" target="_blank" rel="noopener noreferrer">
            <div className="Media" onMouseOver={mediaOnMouseOver} onMouseOut={mediaOnMouseOut}
              id="InButton" style={{backgroundColor: INButton.background, color: INButton.color}}>
                <img src={INButton.button} alt="Follow me in Linkedin"/>
            </div>
          </a>
        </div>

        <div className="social-item">
          <a href="https://github.com/juanektbb" target="_blank" rel="noopener noreferrer">
            <div className="Media" onMouseOver={mediaOnMouseOver} onMouseOut={mediaOnMouseOut}
              id="GhButton" style={{backgroundColor: GHButton.background, color: GHButton.color}}>
                <img src={GHButton.button} alt="Follow me in GitHub"/>
            </div>
          </a>
        </div>
      </section>
    </div>
  )

}

export default Menu
