import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiver from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
const Works = () => {
  return (
     <div className="Works">
         {/* left */}
         <div className="awesome works-awesome">
                <span>Work For All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor,amet 
                        consectetur adipisicing. <br /> Doloribus a
                        reiciendis officia tenetur fugiat. <br /> Laudantium 
                        magnam incidunt blanditiis <br /> doloremque porro, ipsam 
                </span>
                <button className='button s-button'>Hire Me</button>
                <div className='blur s-blur'>hello gyz</div>
        </div>
        {/* right side */}
         <div className="w-right">
             <div className="w-main-circle">
                 <div className="w-sec-circle">
                       <img src={Upwork} alt="" />
                 </div>
                 <div className="w-sec-circle">
                       <img src={Fiver} alt="" />
                 </div>
                 <div className="w-sec-circle">
                       <img src={Amazon} alt="" />
                 </div>
                 <div className="w-sec-circle">
                       <img src={Shopify} alt="" />
                 </div>
                 <div className="w-sec-circle">
                       <img src={Facebook} alt="" />
                 </div>
                 <div className="w-backCirlce blue"></div>
                 <div className="w-backCirlce yellow"></div>
             </div>
         </div>
     </div>
    
    
    )
}

export default Works
