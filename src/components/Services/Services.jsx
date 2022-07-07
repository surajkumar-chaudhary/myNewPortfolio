import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glassesimoji.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
const Services = () => {
  return (
    <div className='services' id='Services'>
        {/* left side  */}
        
        <div className="awesome">
          <span>My awesome</span>
          <span>Skills</span>
          <span>I'm an IT Engineering student with a
                    creative <br /> attitude to                       
                problem solving . In my current <br /> position as a self leader, my
                recent challenge <br /> is on making my accidental activities more <br />
                intentional. I'm sure I can use my expertise to <br /> achieve great
                results with this initiative
        
          </span>
          <button className='button s-button'>Download CV</button>
          <div className='blur s-blur'></div>
        </div>


        {/* Right side */}

        <div className="cards">
                  <div className="first-card">
                    <Card
                        emoji={HeartEmoji}
                        heading='Frondend skills'
                        details= {'Html , css , javascript' }
                    
                    />
                  </div>
                  <div className="second-card">
                    <Card
                        emoji={Humble}
                        heading='Design'
                        details= {'...'}
                    
                    />
                  </div>
                  <div className="third-card">
                    <Card
                        emoji={Humble}
                        heading='Library , Framework & others'
                        details= {'tailwindcss , reactjs , linux os '}
                    
                    />
                  </div>

        </div>
       
    </div>
  )
}

export default Services
