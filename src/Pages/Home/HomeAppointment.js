import React from 'react';
import doctor from '../../assets/images/2.jpeg';
import appointment from '../../assets/images/appointment.png';
import Primarybutton from '../Shared/Primarybutton';

function HomeAppointment() {
  return (
    <section className='flex justify-center items-center mt-24' style={{ background: `url(${appointment})` }}>
      <div className='flex-1 hidden lg:block'>
        <img className='mt-[-74px]' src={doctor}></img>
      </div>
      <div className='flex-1 pt-10 px-10 pb-7'>
        <h3 className='text-2xl text-primary font-bold pb-3'>予定</h3>
        <h3 className='text-5xl text-white pb-4'>予約する</h3>
        <p className='text-white pb-7'>サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト</p>
        <Primarybutton>Get Started</Primarybutton>
      </div>
    </section>
  )
}

export default HomeAppointment;