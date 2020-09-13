import React from 'react'

import '../styles/work.css'

import Me2 from '../images/me_2.jpg'

import { Link } from 'react-router-dom'

class Work extends React.Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div className="Work Context">
        <div className="double-column-box">
          <div className="double-column">
            <h2>Work timeline</h2>
            <p className="timeline-paragraph">
              This timeline illustrates my most relevant work experiences of the past years.
              They all allowed me to progress in my <Link to="/about">career</Link> and grow my skills to a higher and more <b>professional</b> level which are my standards.
            </p>

            <div className="timeline">
              <div className="experience-container left-side">
                <div className="experience">
                    <h3>Now - 2019</h3>
                    <h5>VeeLoop & vHelp</h5>
                    <p>Full-Stack Developer</p>
                    <p>DevOps</p>
                  </div>
                </div>
                <div className="experience-container right-side">
                  <div className="experience">
                    <h3>2020 - 2018</h3>
                    <h5>Karali Group</h5>
                    <p>Full-Stack Developer</p>
                    <p>IT Consultancy</p>
                    <p>DevOps</p>
                  </div>
                </div>
                <div className="experience-container left-side">
                  <div className="experience">
                    <h3>2019 - 2018</h3>
                    <h5>Wiz School</h5>
                    <p>Programming Teacher</p>
                  </div>
                </div>
                <div className="experience-container right-side">
                  <div className="experience">
                    <h3>2018 - 2017</h3>
                    <h5>Communique</h5>
                    <p>Front-end Developer</p>
                    <p>Photo & Video Editor</p>
                  </div>
                </div>
                <div className="experience-container left-side">
                  <div className="experience">
                  <h3>Now - 2014</h3>
                  <h5>Freelancer</h5>
                  <p>Back-end Developer</p>
                  <p>Web Designer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="double-column">
            <h2>Freelancer or Contractor</h2>
            <h4>Shall we work on your next project?</h4>

            <div className="me-box-work">
              <img src={Me2} alt="This is me, Juan" className="me-work"/>
              <div className='me-caption-work'>From everywhere</div>
            </div>

            <p>
              I am available and always looking for new and <b>exciting projects</b> to take on.
              No matter whether you require a small or large job, with or without deadlines, physically or remotely; because I can adapt to your project requirements providing a reliable and professional service.
            </p>
            <p>
              My main experience is in web as full-stack, but I am also very passionate for mobile apps.
              I excel because I take great care to ensure each project is easily maintained as your idea grows.
            </p>
            <p>
              If this sounds interesting to you, <Link to="/chat">get in touch</Link> to discuss your project in more detail, share ideas and get an amazing outcome from each others collaboration.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Work
