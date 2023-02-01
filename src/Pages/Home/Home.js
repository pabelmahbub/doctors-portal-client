import React from 'react'
import HomeAppointment from './HomeAppointment';
import Banner from './Banner'
import Info from './Info';
import OneService from './OneService';
import Services from './Services';
import Testimonials from './Testimonials';
import Footer from '../Shared/Footer';
import ContactForm from './ContactForm';
import Chat from './Chat';

function Home() {
  return (
    <>
      <div>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <OneService></OneService>

      </div>
      <div>
        <Chat />
      </div>
      <HomeAppointment></HomeAppointment>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  )
}

export default Home