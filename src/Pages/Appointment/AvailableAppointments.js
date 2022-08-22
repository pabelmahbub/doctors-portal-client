import React from 'react';
import { format } from 'date-fns';

function AvailableAppointments({date,setDate}) {
  return (
    <div>
           <h3 className="text-center text-2xl font-bold text-secondary">You have selected {format(date, 'PP')}</h3>
    </div>
  )
}

export default AvailableAppointments