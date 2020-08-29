import React from 'react'
import '../styles/work.css'

import Me2 from '../images/me_2.jpg'

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
            <p>This work timeline illustrates my most relevant work experiences of the past years. </p>

            <div className="timeline">
              <div className="experience-container left-side">
                <div className="experience">
                    <h3>Now - 2019</h3>
                    <h5>VeeLoop & vHelp</h5>
                    <p>Software Engineer</p>
                  </div>
                </div>
                <div className="experience-container right-side">
                  <div className="experience">
                    <h3>2020 - 2018</h3>
                    <h5>Karali Group</h5>
                    <p>Software Developer</p>
                  </div>
                </div>
                <div className="experience-container left-side">
                  <div className="experience">
                    <h3>2019 - 2018</h3>
                    <h5>Wiz School</h5>
                    <p>Programming teacher</p>
                  </div>
                </div>
                <div className="experience-container right-side">
                  <div className="experience">
                    <h3>2018 - 2017</h3>
                    <h5>Communique</h5>
                    <p>Software Developer</p>
                  </div>
                </div>
                <div className="experience-container left-side">
                  <div className="experience">
                  <h3>Now - 2014</h3>
                  <h5>Freelancer</h5>
                  <p>Web Designer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="double-column">
            <h2>Freelancer</h2>
            <h4>Would you like me to work on your project?</h4>
            <h5>Contact me and tell me your ideas!</h5>

            <div className="me-box-work">
              <img src={Me2} alt="This is me, Juan" className="me-work"/>
              <div className='me-caption-work'>Everywhere</div>
            </div>

            <p>
              I am available and always looking for new and exiting projects to take on.
              No matter where you are as I also pick remote work from anywhere providing a reliable and professional service.
            </p>
            <p>

            If this sounds interesting to you, get in touch to discuss your project in more details, share ideas and get an amazing outcome from each others collaboration.
            </p>

          </div>
        </div>






      </div>
    )
  }
}

export default Work
