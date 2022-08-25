import appointment from '../../assets/images/appointment.png';
import { useState } from 'react';
import Primarybutton from '../Shared/Primarybutton';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function ContactForm() {
  const form = useRef();
  //console.log('Hello');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_32jpqla', 'template_vbv53cy', form.current, 'v8XFNnTGp8JZaNL_F')
      .then((result) => {
        console.log(result.text);
        alert('Message sending successfully!');
        form = "";
      }, (error) => {
        console.log(error.text);
      });

  };



  return (
    <>
      <section className='flex justify-center text-center items-center mt-24 px-48' style={{ background: `url(${appointment})` }}>
        <div className='flex-1 pt-10 px-10 pb-12'>
          <h3 className='text-2xl text-secondary font-bold pb-3'>お問い合わせ</h3>
          <h3 className='text-4xl text-white pb-14'>Stay connected with us</h3>


          <form ref={form} onSubmit={sendEmail}>
            <div>
              <input style={{ marginTop: '8px', width: '70%', height: '50px', borderRadius: '8px', paddingLeft: '10px' }} type="text" id="name" required placeholder='Your full name' name="user_name" />
            </div>
            <div>
              <input style={{ marginTop: '10px', width: '70%', height: '50px', borderRadius: '8px', paddingLeft: '10px' }} type="email" id="email" required placeholder='Your email address' name="user_email" />
            </div>
            <div>
              <textarea style={{ marginTop: '10px', marginBottom: '12px', width: '70%', height: '90px', borderRadius: '8px', paddingLeft: '10px', paddingTop: '5px' }} id="message" required placeholder='Your message' name="message" />
            </div>

            <Primarybutton type="submit" value="Send">送信</Primarybutton>
          </form>
        </div>
      </section>


    </>
  )
}

export default ContactForm;