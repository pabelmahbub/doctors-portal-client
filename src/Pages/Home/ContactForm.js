import React from 'react';
import appointment from '../../assets/images/appointment.png';
import {useState} from 'react';
import Primarybutton from '../Shared/Primarybutton';

function ContactForm() {

  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
                             <section className='flex justify-center text-center items-center mt-24 px-48' style={{background: `url(${appointment})`}}>
                              <div className='flex-1 pt-10 px-10 pb-12'>
                                <h3 className='text-2xl text-secondary font-bold pb-3'>Contact Us</h3>
                                <h3 className='text-4xl text-white pb-14'>Stay Connected With Us</h3>


                              <form onSubmit={handleSubmit}>
                                <div>
                                  <input style={{marginTop:'8px',width:'450px',height:'50px',borderRadius:'8px',paddingLeft:'10px'}}type="text" id="name" required placeholder='Email address'/>
                                </div>
                                <div>
                                  <input style={{marginTop:'10px',width:'450px',height:'50px',borderRadius:'8px',paddingLeft:'10px'}} type="email" id="email" required placeholder='Subject'/>
                                </div>
                                <div>
                                  <textarea style={{marginTop:'10px',marginBottom:'12px',width:'450px',height:'136px',borderRadius:'8px',paddingLeft:'10px',paddingTop:'5px'}} id="message" required placeholder='Your message'/>
                                </div>
                                <Primarybutton>Submit</Primarybutton>
                                {/* <button type="submit">{status}</button> */}
                              </form>
                              </div>
                             </section>
  )
}

export default ContactForm;