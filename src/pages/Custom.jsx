import React from 'react'
import '../styles/custom.css'

import { NavLink } from 'react-router-dom'
import Carousel from '../components/Carousel.jsx'

class Custom extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      open_modal: false,
      element_chosen: 3
    }
  }

  close_modal = () => {
    this.setState({ open_modal: false })
  }

  render(){
    return(
      <div className="Custom Context">
        <div className="dynamic-box">
          <Carousel 
            arr_images={this.props.item.images}
            element_chosen={this.state.element_chosen}
            is_open={this.state.open_modal}
            close_modal={this.close_modal}
            project_name={this.props.item.title}
          />
          
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
            <div className="custom-image">
              <img src={this.props.item.img} alt={this.props.item.title + " image"} />
            </div>

            <h1>{this.props.item.title}</h1>
            
            <p className="short-description">
              {this.props.item.short_desc}
            </p>

            <div className="custom-links">
              {this.props.item.website !== "" &&
                <a href={this.props.item.website} target="_blank" rel="noopener noreferrer" className="btn">
                  Live Project
                </a>}

              {this.props.item.github !== "" &&
                <a href={this.props.item.github} target="_blank" rel="noopener noreferrer" className="github">
                  GitHub Project
                </a>}
            </div>
          </div>

          <div className='custom-body'>
            {this.props.item.images.length !== 0 && 
              <h4 className="gallery-title">Gallery</h4>}

            {this.props.item.images.length !== 0 && 
              <section className="gallery-main">
                {this.props.item.images.map((item, index) =>
                  <div onClick={() => this.setState({ open_modal: true, element_chosen: index })} key={index} className="photo-element">
                    <img src={item} alt={this.props.item.title + " - Gallery " + (index + 1)}/>
                  </div>
                )}
              </section>}

            {this.props.item.long_desc.split("\n").map((paragraph, key) => {
               return <p key={key}>{paragraph}</p>
            })}
          </div>
        </div>
      </div>
    )
  }

}

export default Custom
