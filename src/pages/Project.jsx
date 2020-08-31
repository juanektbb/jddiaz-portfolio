import React from 'react'
// import '../styles/project.css'

import { NavLink } from 'react-router-dom'

class Project extends React.Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div className="Project Context">

        <iframe src="https://spaceyjs.netlify.app/" width="100%" height="500px"></iframe>

      </div>
    )
  }

}

export default Project
