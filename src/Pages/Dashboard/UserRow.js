import React from 'react';
import {toast } from 'react-toastify';

function UserRow({user,refetch}) {
  const {email,role} = user;

  const makeAdmin = () =>{
    fetch(`https://doctors-100.herokuapp.com/user/admin/${email}`,{
      method: 'PUT',
      headers:{
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res =>{
      if(res.status === 403){
        toast.error('Failed to make an admin')
      }
      return res.json()})
    .then(data => {
      if(data.modifiedCount){
        console.log(data);
        refetch();
        toast.success(`Made an admin`);
      }
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
