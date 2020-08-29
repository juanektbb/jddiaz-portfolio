import React from 'react'

class Skill extends React.Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div className="Skill" style={{borderColor: this.props.color}}>
        <div className="skill-header" style={{backgroundColor: this.props.color, color: this.props.text}}>
          {this.props.title}
        </div>

        {/* Container of skills */}
        <div className="skill-body">
          {this.props.skills.map((item) =>
            <div key={item.name} className="skill-badge">
              <img src={item.logo} alt={item.name + " logo"} />
              <p>{item.name}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Skill
