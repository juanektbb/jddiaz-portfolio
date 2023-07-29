import React from 'react'

import { Link } from 'react-router-dom'

class Tile extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      "hover": false
    }
  }

  hovereffect = () => {
    this.setState({"hover": true})
  }

  hoveroff = () => {
    this.setState({"hover": false})
  }

  render(){
    return(
      <div className="Tile" onMouseOver={this.hovereffect} onMouseOut={this.hoveroff}>
        <img src={this.props.item.img} alt={this.props.item.title}
          className={"tile-bg " + (this.state.hover ? "hovereffect" : "")}/>

        <div className={"tile-category " + (this.props.item.light ? "" : "tile-category-light ")}>
          {!this.state.hover && this.props.item.category}
        </div>

        <div className={"tile-footer " + (this.props.item.light ? "" : "tile-footer-light")}>
          {!this.state.hover && this.props.item.footer}
        </div>

        <div className={"tile-cover " + (this.state.hover ? "showup" : "")}>
          <div className={"tile-title " + (this.state.hover ? "tile-title-effect" : "")}>
            {this.props.item.title}
          </div>

          <div className="tile-text">
            {this.props.item.short_desc}
          </div>

          <Link to={this.props.item.url}>
            <div className="tile-details">Read more</div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Tile
