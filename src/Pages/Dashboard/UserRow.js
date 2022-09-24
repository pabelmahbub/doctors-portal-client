import React from 'react';
import {toast } from 'react-toastify';

function UserRow({user,refetch}) {
  const {email,role} = user;

  const makeAdmin = () =>{
    fetch(`http://localhost:5000/user/admin/${email}`,{
      method: 'PUT',
      headers:{
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res =>res.json())
    .then(data =>{
      console.log(data);
      refetch();
      toast.success(`Appointment is set!`);
    })
  }
  return (
     <tr>
      <td>1</td>
      <td>{email}</td>
      <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make admin</button>}</td>
        <td><button class="btn btn-xs">Remove admin</button></td>

    </tr>
  )
}

export default UserRow;
