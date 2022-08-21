import React from 'react'
import HomeAppointment from './HomeAppointment';
import Banner from './Banner'
import Info from './Info';
import OneService from './OneService';
import Services from './Services';
import Testimonials from './Testimonials';
import Footer from './Footer';

function Home() {
  return (
    <>
    <div className='px-12'>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <OneService></OneService>
     
    </div>
     <HomeAppointment></HomeAppointment>
     <Testimonials></Testimonials>
     <Footer></Footer>
     </>
  )
}

export default Home