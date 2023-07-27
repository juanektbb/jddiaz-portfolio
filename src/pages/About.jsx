import React from 'react'
import '../styles/about.css'

import Me from '../images/me.jpg'

import Skill from '../components/Skill.jsx'
import Skillslist from '../data/skills.js'

class About extends React.Component{

  render(){
    return(
      <div className="About Context">
        <div className="double-column-box">
          <div className="double-column about-area">
            <div className="me-box">
              <img src={Me} alt="This is me, Juan" className="me"/>
              <div className='me-caption'>I am Juan, this guy here &#8593;</div>
            </div>

            <h2>Who I am?</h2>
            <p>
              Born in <b>Colombia</b> and grown in <b>Spain</b>, I consider this last one as my home country.
              However, my professional career launched in London where I coursed and graduated with a first-class in <b>Computer Science</b> at Goldsmiths University in 2020.
            </p>
            {/* <p>
              Since I moved to the UK in 2014, I have been working in the industry for different companies or as a freelancer in my spare time.
              <Link to="/work"> Read more</Link> about my experience.
            </p> */}
            {/* <p>
              I am currently working as a software developer at a very ambitious and successful startup based in London, <b>VeeLoop</b>, that is revolutionising the way teenagers shop online.
              We are also building a new project named <b>vHelp</b> which is a secure payment flow for people who need support with shopping during the pandemic.
            </p> */}
            <p>
              As I am very passionate about software, I love learning and keep up improving my skills as well as working on new ideas and side projects.
            </p>
            <br />

            <h2>My background</h2>
            <p>
              My enthusiasm for technology started since I was a kid when my father bought me my first computer.
              I then became very interested in learning digital technology, but more specifically software development.
              Quickly, programming and designing websites became essential in my life, but more meaningful, in a very exciting hobby.
            </p>
            <p>
              In 2014, I moved to London to begin my career studying and achieving a BTEC course in Information Technology at EHWL College.
              Three years later I started my university degree in BSc Computer Science at Goldsmiths University and graduated in 2020.
            </p>
            <p>
              During those six years of studies, I made my first steps in the industry working as a web design freelancer and also for other companies.
            </p>
          </div>

          <div className="double-column">
            <h5 className="skills-title-one">...I have experienced these techs...</h5>
            <div className="skills-container">
              {Skillslist.map((item, key) =>
                <Skill key={key} title={item.title} skills={item.skills} color={item.color} text={item.text} />
              )}
            </div>

            <h5 className="skills-title-two">Some other skills</h5>
            <div className="knowledge-container">
              <ul>
                <li>REST API Design</li>
                <li>Backend Development: MVC, Websockets</li>
                <li>AWS: EC2, S3, SNS | SQS, RDS, Lambda, VPCs, SES, Route 53</li>
                <li>Unit & Integration Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
