import React from 'react'
import Footer from '../Shared/Footer';
import { useState } from 'react';
import AppointmentBanner from './AppointmentBanner'
import AvailableAppointments from './AvailableAppointments';
import MyChat from '../Appointment/MyChat';


function Appointment() {
  const [date, setDate] = useState(new Date());
  return (
    <div>

      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>

      <AvailableAppointments date={date} setDate={setDate}></AvailableAppointments>
      <MyChat />

      <Footer></Footer>
    </div>
  )
}

export default Appointment