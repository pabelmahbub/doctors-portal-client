import React from 'react';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function MyAppointments() {
  const [user, loading, error] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    if(user){
      // fetch(`http://localhost:5000/booking?patient${user.email}`)
      fetch(`http://localhost:5000/available`)
    .then(res=> res.json())
    .then(data => setAppointments(data));
    }
  }, [user])
  
  return (
    <div>
      {/* <p>{appointments.length}</p> */}

      <div className="overflow-x-auto">
  <table className="table table-zebra w-full mt-4">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Treatment Name</th>
        <th>Date</th>
        <th>Schedule</th>
      </tr>
    </thead>
    <tbody>
      {
        appointments.map((appointment, index) => 
        <tr>
          <th>{index + 1}</th>
          <td>{appointment.name}</td>
          <td>{appointment.slots[1]}</td>
          <td>{appointment.name}</td>
          <td>{appointment.name}</td>
        </tr>)
      }
      
      

    </tbody>
  </table>
</div>


    </div>
  )
}

export default MyAppointments