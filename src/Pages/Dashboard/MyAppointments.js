import React from 'react';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {useNavigate} from 'react-router-dom';
import {signOut } from 'firebase/auth';

function MyAppointments() {
  const [user, loading, error] = useAuthState(auth);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if(user){
      //allBooking
      fetch(`http://localhost:5000/myBooking?patient=${user.email}`,{
        method:'GET',
        headers: {
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
  }
})
      //fetch(`https://doctors-100.herokuapp.com/myBooking?patient=${user.email}`)
    .then(res=>{
      console.log('res', res);
      if(res.status === 401 || res.status === 403){
        signOut(auth);
        localStorage.removeItem("accessToken");
        console.log('sign out successful from my appoinment');
        navigate('/');
      }

      return res.json()
    })
    .then(data => setAppointments(data));
    }
  }, [user])

  return (
    <div>
      {/* <p>{appointments.length}</p> */}

      <div className="overflow-x-auto">
  <table className="table table-zebra w-full mt-4 mb-4 mx-4">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Treatment Name</th>
        <th>Date</th>
        <th>Schedule</th>
        <th>Contact No.</th>
      </tr>
    </thead>
    <tbody>
      {
        appointments.map((appointment, index) =>
        <tr>
          <th>{index + 1}</th>
          <td>{appointment.patientName}</td>
          <td>{appointment.treatment}</td>
          <td>{appointment.date}</td>
          <td>{appointment.slot}</td>
          <td>{appointment.phone}</td>
        </tr>)
      }



    </tbody>
  </table>
</div>


    </div>
  )
}

export default MyAppointments
