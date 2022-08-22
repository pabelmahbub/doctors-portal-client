import React, { useState } from "react";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import Primarybutton from '../Shared/Primarybutton';
import Appointment from './Appointment';

function AppointmentBanner({date,setDate}) {
     
      const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: blue;
    color: blue;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    color: red;
  }
`;
  return (
<div style={{background: `url(${bg})`}}>
<div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img width="594px" height="355px" src={chair}  alt="Shoes" class="rounded-xl" />
    <div className="px-24">
                              <DayPicker 
                              styles={{caption: { color:'#222',fontSize:'20px' }}}
                              modifiersClassNames={{
                                                            selected: 'my-selected',
                                                            today: 'my-today'
                                                          }}
                              mode="single"
                              selected={date}
                              onSelect={setDate}/>
                     
    </div>
  </div>
</div>
</div>
  )
}

export default AppointmentBanner