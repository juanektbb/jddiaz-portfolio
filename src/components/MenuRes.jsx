import React from 'react'
import '../styles/menu.css'

import { NavLink } from 'react-router-dom'

import OpenMenu from '../images/open-menu.png'
import GhBlack from '../images/github_100px_3.png'
import InBlue from '../images/linkedin_100px_3.png'

class MenuRes extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      "options": [],
      "accordeon_open": false
    }
  }

  componentDidMount(){
    if(this.state.options !== this.props.options){
      this.setState({
        "options": this.props.options
      })
    }
  }

  toggle_accordeon = () => {
    this.setState({
      "accordeon_open": !this.state.accordeon_open
    })
  }

  force_close = () => {
    this.setState({
      "accordeon_open": false
    })
  }

  render(){
    return(
      <div className="MenuResBox">
        <div className="MenuRes">
        <header className="HeaderRes">
          <h1>Juan D. Diaz</h1>
        </header>

          <div className="ContentLeft">
            <a href="https://github.com/juanektbb" target="_blank" rel="noopener noreferrer">
              <div className="MediaRes">
                  <img src={GhBlack} alt="Follow me in GitHub"/>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/juanektbb/" target="_blank" rel="noopener noreferrer">
              <div className="MediaRes">
                  <img src={InBlue} alt="Follow me in Linkedin"/>
              </div>
            </a>

            <div className="Opener" onClick={this.toggle_accordeon}>
              <img src={OpenMenu} alt="Toggle menu"/>
            </div>
          </div>
        </div>

        <div className={"Accordeon" + (this.state.accordeon_open ? " AccordeonOpen": "")}>
          {this.state.options.map((item, key) =>
            <NavLink key={key} to={item.to} exact activeClassName="active-option">
              <div className="AccordeonOption" onClick={this.force_close}>{item.title}</div>
            </NavLink>
          )}
        </div>
      </div>
    )
  }
}

export default MenuRes
