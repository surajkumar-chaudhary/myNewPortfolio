import React from 'react'
import './Intro.css'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/heroImage.png'
import  Floating from '../FloatingDiv/Floating'
import Crown from '../../img/crown.png'
import ThumbUp from '../../img/thumbup.png'
import GlassesImoji from '../../img/glassesimoji.png'
import { Link } from 'react-scroll/modules'
import { UilFacebook } from '@iconscout/react-unicons'
import { UilGithub } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'

const Intro = () => {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hy! Im</span>
                <span>Suraj Chaudhary</span>
                <span> Intermediate Frontend Developer</span>
            </div>
            <Link spy={true} to='Contact' smooth={true} >
                 <button className=" button i-button">Hire me</button>
            </Link>

            <div className="f-icons home-f-icons">
                        <a 
                         className='f-hover'
                         href="https://www.facebook.com/ssuraj.chaudhary.9"
                         >
                            <UilFacebook size='2rem' color='var(--orange)' />
                        </a>
                        <a 
                         className='f-hover'
                         href="https://www.linkedin.com/in/surajkumarchaudhary/"
                         >
                            <UilLinkedin size='2rem' color='var(--orange)' />
                        </a>
                        <a 
                         className='f-hover'
                         href="https://github.com/surajkumar-chaudhary"
                         >
                            <UilGithub size='2rem' color='var(--orange)' />
                        </a>
                        
            </div>
        </div>
        <div className="i-right"> 
                    {/* <img src={Vector1} alt="Vector-blue" />
                    <img src={Vector2} alt="Veector-yellow" /> */}
                    <img src={Boy} alt="Boy" />
              

                    {/* <div className="floating-div-first">
                        <Floating image ={Crown} firstText="Web" secondText="Developer" />
                    </div>

                    <div className="floating-div-second">
                        <Floating image ={ThumbUp} firstText="Best Design" secondText="Award" />
                    </div>
                    <div className="floating-div-third">
                        <Floating image = {GlassesImoji}/>
                    </div> */}

                    {/* blur divs  */}
                    <div className="blur blur-position1"></div>
                    <div className="blur blur-position2"></div>
                    <div className="blur blur-position3"></div>
                    <div className="blur blur-position4"></div>
                
        </div>
    </div>
  )
}

export default Intro
