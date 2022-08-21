import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import Primarybutton from '../Shared/Primarybutton';

function HomeAppointment() {
  return (
                             <section className='flex justify-center items-center mt-24' style={{background: `url(${appointment})`}}>
                              <div className='flex-1 hidden lg:block'>
                                <img className='mt-[-140px]' src={doctor}></img>
                              </div>
                              <div className='flex-1 pt-10 px-10 pb-7'>
                                <h3 className='text-2xl text-primary font-bold pb-3'>Appointment</h3>
                                <h3 className='text-5xl text-white pb-4'>Make an Appointment</h3>
                                <p className='text-white pb-7'>Voluptate laborum aliqua dolor veniam eu fugiat irure magna velit irure magna exercitation. Consequat Lorem ad voluptate ad aliqua fugiat mollit minim cillum officia sint aliqua. Fugiat cillum excepteur velit cillum non ea enim incididunt non enim nisi. Et qui in sit esse culpa. Excepteur quis quis non ipsum sit minim exercitation irure ea ut non eiusmod. Tempor ut velit exercitation enim veniam fugiat mollit velit sint reprehenderit laborum.</p>
                                <Primarybutton>Get Started</Primarybutton>
                              </div>
                             </section>
  )
}

export default HomeAppointment;