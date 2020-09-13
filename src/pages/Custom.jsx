import React from 'react'
import '../styles/custom.css'

import { NavLink } from 'react-router-dom'

class Custom extends React.Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div className="Custom Context">
        <div className="dynamic-box">

          <div className="navigation_pages">
            {this.props.prev_page !== "#" &&
              <NavLink to={this.props.prev_page}>
                <div className="prev_page">
                  Prev Project
                  <div className="nav_tiny">{this.props.prev_page_title}</div>
                </div>
              </NavLink>}

            {this.props.next_page !== "#" &&
              <NavLink to={this.props.next_page}>
                <div className="next_page">
                  Next Project
                  <div className="nav_tiny">{this.props.next_page_title}</div>
                </div>
              </NavLink>}
          </div>

          <div className="custom-header">
            <div className="custom-banner">
              <img src={this.props.img} alt={this.props.title + " image"} />
            </div>

            <h1>{this.props.title}</h1>
            <h5 className="short_desc">{this.props.short_desc}</h5>
            <div className="custom-links">
              {this.props.website !== "" &&
              <a href={this.props.website} target="_blank" rel="noopener noreferrer" className="btn">
                Live Project
              </a>}

              {this.props.github !== "" &&
              <a href={this.props.github} target="_blank" rel="noopener noreferrer" className="github">
                GitHub Project
              </a>}


            </div>
          </div>

          <div className='custom-body'>
            {this.props.long_desc}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    )
  }

}

export default Custom
