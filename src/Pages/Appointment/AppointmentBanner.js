import React, { useState } from "react";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import Primarybutton from '../Shared/Primarybutton';
import Appointment from './Appointment';

function AppointmentBanner({date,setDate}) {

  return (
<div style={{background: `url(${bg})`}}>
<div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img width="50%" height="40%" src={chair}  alt="Shoes" class="rounded-xl" />
    <div className="mr-24">




    <div class="card bg-base-130 shadow-xl align-center">
      <DayPicker 
                                styles={{caption: { color:'orange',fontSize:'20px' }}}
                                mode="single"
                                selected={date}
                                onSelect={setDate}/>
    </div>



                             
                     
    </div>
  </div>
</div>
</div>
  )
}

export default AppointmentBanner