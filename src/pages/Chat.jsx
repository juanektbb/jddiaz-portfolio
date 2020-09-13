import React from 'react'
import '../styles/chat.css'

import emailjs from 'emailjs-com';

import Mail from '../images/mail.png'
import Phone from '../images/phone.png'
import Infinity from '../images/infinity.gif'

class Chat extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      mail_status: undefined
    }
  }

  getAvailability = () => {
    const date = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"]
    return monthNames[date.getMonth()] + " " + date.getFullYear()
  }

  clickLink = (e) => {
    e.preventDefault()
    this.setState({mail_status: 'loading'})

    emailjs.sendForm('elastic_email_jddiaz', 'template_4aQvws3n', e.target, 'user_FCpAeVCGKglsVQYWPRCdA')
    .then((result) => {
      if(result.text === 'OK'){
        this.setState({mail_status: 'OK'})
        document.getElementById('contact-form').reset()
      }else{
        this.setState({mail_status: 'error'})
      }
    }, (error) => {
      this.setState({mail_status: 'error'})
    })
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

            {this.state.mail_status === 'loading' &&
              <div className="loader-msg">
                <img src={Infinity} alt='Loading...' />
              </div>
            }

            {this.state.mail_status === 'OK' &&
              <div className="success-msg">
                Thanks for your message, I will contact you shortly.
              </div>
            }

            {this.state.mail_status === 'error' &&
              <div className="error-msg">
                Something went wrong, try to email me at <b>inf.juandiaz@gmail.com</b>
              </div>
            }

            <form id='contact-form' onSubmit={this.clickLink}>
              <div className="contact-line">
                <label>Your name <span>*</span></label>
                <div className="contact-field">
                  <input type="text" name="user_name" pattern="^[a-zA-Z ,.'-]{3,30}+$"
                    placeholder="Eg: Juan Diaz" required="required"/>
                </div>
              </div>
              <div className="contact-line">
                <label>Your email <span>*</span></label>
                <div className="contact-field">
                  <input type="email" name="user_email"
                    placeholder="Eg: hello@mail.com" required="required"/>
                </div>
              </div>
              <div className="contact-line">
              <label>Your phone number</label>
                <div className="contact-field">
                  <input type="text" name="user_phone" pattern="[0-9+ )(]{6,30}"
                    placeholder="123456789..."/>
                </div>
              </div>
              <div className="contact-line">
                <label>Your mesage <span>*</span></label>
                <div className="contact-field">
                  <textarea name="user_message" placeholder="Let's work together..." required="required"></textarea>
                </div>
              </div>
              <div className="contact-line">
                <input type="submit" value="Send message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat
