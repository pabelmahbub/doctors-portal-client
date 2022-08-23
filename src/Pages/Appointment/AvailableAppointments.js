import React from 'react';
import { format } from 'date-fns';

function AvailableAppointments({date,setDate}) {
  return (
    <div>
           <h3 className="text-center text-2xl font-bold text-secondary">Available services on {format(date, 'PP')}</h3>
           <h5 className="text-center text-1xl text-accent pt-6">Please select a service.</h5>
    </div>
  )
}

export default AvailableAppointments