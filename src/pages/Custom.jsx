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
        <div className="main-content">

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
            <h4>{this.props.short_desc}</h4>
            <a href={this.props.website} target="_blank" rel="noopener noreferrer" className="btn">
              Go to {this.props.title}
            </a>


          </div>

          <div className='custom-body'>
            {this.props.long_desc}
          </div>
        </div>
      </div>
    )
  }

}

export default Custom
