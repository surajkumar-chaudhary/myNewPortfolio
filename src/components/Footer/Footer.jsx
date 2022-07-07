import React from 'react'
import './Footer.css'
import  Wave from '../../img/wave.png'
import { UilFacebook } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div  className='footer'>
          <img src={Wave} alt="" style={{width:'100%'}} />
          <div className='f-content'>
                 <span style={{color:'#242D49'}}>chaudharysuraz999@gmail.com</span>
                 <div className="f-icons">
                        <a 
                         className='f-hover'
                         href="https://www.facebook.com/ssuraj.chaudhary.9">
                            <UilFacebook size='2rem' color='--black' />
                        </a>
                        <a 
                         className='f-hover'
                         href="https://www.linkedin.com/in/surajkumarchaudhary/">
                            <UilLinkedin size='2rem' color='var(--black)' />
                        </a>
                        <a 
                         className='f-hover'
                         href="https://github.com/surajkumar-chaudhary">
                            <UilGithub size='2rem' color='var(--black)' />
                        </a>
            </div>
          </div>
    </div>
  )
}

export default Footer
