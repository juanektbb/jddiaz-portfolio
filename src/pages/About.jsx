import React from 'react'
import '../styles/about.css'

import { Link } from 'react-router-dom'

import Me from '../images/me.jpg'

import Skillslist from '../skills.js'

import Skill from '../components/Skill.jsx'

class About extends React.Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div className="About Context">
        <div className="double-column-box">
          <div className="double-column about-area">

            {/* Me container */}
            <div className="me-box">
              <img src={Me} alt="This is me, Juan" className="me"/>
              <div className='me-caption'>I am Juan, this guy here &#8593;</div>
            </div>

            <h2>Who I am?</h2>
            <p>
              Born in <b>Colombia</b> and grown in <b>Spain</b>, I consider this last one as my home country.
              However, my professional career launched in London where I coursed and graduated with a first class in <b>Computer Science</b> at Goldsmiths University in 2020.
            </p>
            <p>
              Since I moved to the UK in 2014, I have been working in the industry for different companies or as a freelancer in my spare time.
               <Link to="/work"> Read more</Link> about my experience.
            </p>
            <p>
              I am currently working as software developer at a very ambitious and successful startup based in London, <b>VeeLoop</b>, that is revolutionising the way teenegers shop online.
              We are also building a new project named <b>vHelp</b> which is a secure payment flow for people who need support with shopping during the pandemic.
            </p>
            <p>
              I am very keen on improving my current skills and love learning to keep working on new ideas, websites, projects, videos, etc.

            </p>

            <br />

            <h2>My background</h2>
            <p>
              My enthusiasm for technology started since I was very little and my dad bought my first laptop.
              I then became very interested in learning all the possibilities that digital technology entails, but more specifically software development.
            </p>
            <p>
              Soon, that led the learning of programming and creation of personal projects to become something essential in my life and a very exciting hobby, building very solid programming skills.
            </p>

            <p>
              In 2014, I moved to London to begin my career, and completed a full BTEC course in Information Technology at EHWL College where I expanded my computing knowledge.
              At the same time, during those years of college I made my first steps in the industry, working as web design freelancer and making websites for customers.
            </p>

            <p>
              Three years after, I started my university degree in Computer Science at Goldsmiths University.


              Finally, I graduated in BSc Computer Science at
              and I approched again my freelance project which I am very passionate and excited about.
            </p>

          </div>

          <div className="double-column"> {/* SECOND COLUMN */}
            <h5 className="skills-title-one">...I have experienced these techs...</h5>

            <div className="skills-container">
              {Skillslist.map((item, key) =>
                <Skill key={key} title={item.title} skills={item.skills} color={item.color} text={item.text} />
              )}
            </div>

            <h5 className="skills-title-two">More skills and computing experience</h5>

            <div className="knowledge-container">


              <ul>
                <li>REST API Design</li>
                <li>Programming Paradigms (OOP, Functional, Declarative, Imperative, Event-Driven, Reactive)</li>
                <li>AWS</li>
                <li>LAMP STACK</li>
                <li>Unix Systems</li>
                <li>Shopify</li>
              </ul>





            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default About
