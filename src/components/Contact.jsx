import React from 'react'
import { SocialIcon } from 'react-social-icons'

function Contact() {

  const LuisLinks = {
    twitter: 'https://twitter.com/foolygh0uly/',
    email: 'mailto:casting.openmicstudios@gmail.com',
    linkedin: "https://www.linkedin.com/in/luis-luna-9b5910267/"
  }
  return (
    <div>
      <p className='section__text__p1'>Get in Touch</p>
      <h1 className='title'>Contact Me</h1>
      <div className='contact-info-upper-container'>
        <div className='contact-info-container'>
          <SocialIcon url={LuisLinks.twitter} bgColor='#000' className='icon contact-icon'/>
          <p><a href={LuisLinks.twitter}>foolygh0uly</a></p>
        </div>
        <div className='contact-info-container'>
        <SocialIcon url={LuisLinks.email} bgColor='#000' className='icon contact-icon' />
        <p><a href={LuisLinks.email}>Example@gmail.com</a></p>

        </div>
        <div className='contact-info-container'>
        <SocialIcon url={LuisLinks.linkedin} bgColor='#000' className='icon contact-icon' />
        <p><a href={LuisLinks.linkedin}>Linkedin</a></p>
        </div>
      </div>
    </div>
  )
}

export default Contact
