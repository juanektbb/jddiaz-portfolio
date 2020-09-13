import React from 'react'

import { NavLink } from 'react-router-dom'

import '../styles/menu.css'

import GhWhite from '../images/github_100px_1.png'
import GhBlack from '../images/github_100px_2.png'
import InBlue from '../images/linkedin_100px_1.png'
import InWhite from '../images/linkedin_100px_2.png'

class Menu extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      "options": [],
      "GhButton": {
        "button": GhBlack,
        "background": "#24292e",
        "color": "#fafbfc"
      },
      "InButton": {
        "button": InBlue,
        "background": "#144057",
        "color": "#fafbfc"
      }
    }
  }

  //Dynamic media hover effect change 1
  mediaOnMouseOver = (e) => {
    if(e.target.id === "GhButton" || e.target.parentNode.id === "GhButton")
      this.setState({"GhButton": {"button": GhWhite, "background": "#fafbfc", "color": "#24292e"}})

    if(e.target.id === "InButton" || e.target.parentNode.id === "InButton")
      this.setState({"InButton": {"button": InWhite, "background": "#fafbfc", "color": "#144057"}})
  }

  //Dyname media hover effect change 2
  mediaOnMouseOut = (e) => {
    if(e.target.id === "GhButton" || e.target.parentNode.id === "GhButton")
      this.setState({"GhButton": {"button": GhBlack, "background": "#24292e", "color": "#fafbfc"}})

    if(e.target.id === "InButton" || e.target.parentNode.id === "InButton")
      this.setState({"InButton": {"button": InBlue, "background": "#144057", "color": "#fafbfc"}})
  }

  componentDidMount(){
    if(this.state.options !== this.props.options){
      this.setState({
        "options": this.props.options
      })
    }
  }

  render(){
    return(
      <div className="Menu">
        <header className="Header">
          Juan D. Diaz
        </header>

        {this.state.options.map((item, key) =>
          <NavLink key={key} to={item.to} exact activeClassName="active-option">
            <div className="Option">{item.title}</div>
          </NavLink>
        )}

        <section className="Social">
          <a href="https://www.linkedin.com/in/juanektbb/" target="_blank" rel="noopener noreferrer">
            <div className="Media" onMouseOver={this.mediaOnMouseOver} onMouseOut={this.mediaOnMouseOut}
              id="InButton" style={{backgroundColor: this.state.InButton.background, color: this.state.InButton.color}}>
                <img src={this.state.InButton.button} alt="Follow me in Linkedin"/>@juanektbb
            </div>
          </a>

          <a href="https://github.com/juanektbb" target="_blank" rel="noopener noreferrer">
            <div className="Media" onMouseOver={this.mediaOnMouseOver} onMouseOut={this.mediaOnMouseOut}
              id="GhButton" style={{backgroundColor: this.state.GhButton.background, color: this.state.GhButton.color}}>
                <img src={this.state.GhButton.button} alt="Follow me in GitHub"/>@juanektbb
            </div>
          </a>
        </section>

        <footer>&copy; jddiaz 2020</footer>
      </div>
    )
  }
}

export default Menu
