import React from 'react'
import './Navbar.css'
import Toggle from './Toggle/Toggle'
import {Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Suraj</div>
            {/* <Toggle/> */}
        </div>
        <div className="n-right">
            <div className="n-lists">
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                       <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} >
                    <li>Skills</li>
                    </Link>
                    <Link spy={true} to='Experiance' smooth={true} >
                       <li>Experiance</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} >
                       <li>Portfolio</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true} >
               <button className="button n-button">Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
