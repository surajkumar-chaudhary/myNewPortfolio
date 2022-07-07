import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'



const Contact = () => {

  const [done , setDone] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o2f4qsc', 'template_7n5lj8a', form.current, 'AJuWTBL721memJ-sZ')
      .then((result) => {
          console.log(result.text);
          setDone( prevDone => !prevDone)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact-form' id='Contact'>
        <div className="form-left">
               <div className="awesome">
                <span>Get in Touch</span>
                <span>Contact me</span>
                <div className='blur f-blur'>hello gyz</div>
              </div>
        </div>

        <div className="form-right">
             { 
             done && <h1>Thanks for contacting me {`<3`} !</h1>
             }
             <form ref={form} onSubmit={sendEmail}>
               <input 
                type="text"
                name='user_name'
                className='user'
                placeholder='Name'
                />
                <input 
                type="email"
                name='user_email'
                className='user'
                placeholder='Email'
                />
                <textarea 
                name='message'
                className='user'
                placeholder='type your message here...'
                />
                <input 
                type="submit"
                className='button f-button'
                value='send' 
                
                />
             </form>
            
        </div>
        
    </div>
  )
}

export default Contact
