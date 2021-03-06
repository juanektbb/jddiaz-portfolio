import React from 'react'
import '../styles/gallery.css'

import Projects from '../data/projects.js'

import Tile from '../components/Tile'

class Gallery extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      "tiles": Projects
    }
  }

  render(){
    return(
      <div className="Gallery Context">
        {this.state.tiles.map((item, key) =>
          <Tile key={key} item={item}/>
        )}
      </div>
    )
  }
}

export default Gallery
