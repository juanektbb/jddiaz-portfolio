import React from 'react'
import '../styles/chat.css'

import Mail from '../images/mail.png'
import Phone from '../images/phone.png'

class Chat extends React.Component{

  constructor(props){
    super(props)
    this.state = {}
  }

  getAvailability = () => {
    const date = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return monthNames[date.getMonth()] + " " + date.getFullYear();
  }

  render(){
    return(
      <div className="Chat Context">
        <div className="single-column-box">
          <div className="single-column">
            <h2>Send me a direct message</h2>
            <h5>I am next available in {this.getAvailability()}</h5>

            <div className="personal-details">
              <div><img src={Mail} alt="Mail icon" />inf.juandiaz@gmail.com</div>
              <div><img src={Phone} alt="Phone icon" /> +44 (0)7425 867 656</div>
            </div>
            <p className="contact-msg">Feel free to get in touch with me using this form and I will get back to you very soon.</p>

            <div className="contact-line">
              <label>Your name <span>*</span></label>
              <div className="contact-field">
                <input type="text" name="" placeholder="Eg: Juan Diaz"/>
              </div>
            </div>
            <div className="contact-line">
              <label>Your email <span>*</span></label>
              <div className="contact-field">
                <input type="emai" name="" placeholder="Eg: hello@mail.com"/>
              </div>
            </div>
            <div className="contact-line">
            <label>Your phone number</label>
              <div className="contact-field">
                <input type="text" name="" placeholder="123456789..."/>
              </div>
            </div>
            <div className="contact-line">
              <label>Your mesage <span>*</span></label>
              <div className="contact-field">
                <textarea placeholder="Let's work together..."></textarea>
              </div>
            </div>
            <div className="contact-line">
              <input type="submit" value="Send message" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat
