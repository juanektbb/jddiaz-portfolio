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

        <img src={this.props.img} className={"tile-bg " + (this.state.hover ? "hovereffect" : "")} alt={this.props.title}/>
        <div className="tile-category">{!this.state.hover && this.props.category}</div>

        <div className={"tile-cover " + (this.state.hover ? "showup" : "")}>
          <div className={"tile-title " + (this.state.hover ? "tile-title-effect" : "")}>
            {this.props.title}
          </div>

          <Link to={this.props.url}>
            <div className="tile-details">
              What is this?
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default Tile
