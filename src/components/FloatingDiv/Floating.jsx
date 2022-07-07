import React from 'react'
import './Floating.css'
const Floating = (props) => {
  return (
    <div className="floating-div">
        <img src={props.image} alt="" srcset="" />
        <span>
            {props.firstText}
            <br />
            {props.secondText}
        </span>
    </div>
  )
}

export default Floating
