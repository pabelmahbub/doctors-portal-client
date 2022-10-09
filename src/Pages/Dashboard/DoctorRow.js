import React from 'react';
import {toast } from 'react-toastify';

function DoctorRow({doctor,index,refetch}) {
          const{name,email,speciality,img,}= doctor;   
          
          const handleDelete = email =>{
                 fetch(`http://localhost:5000/doctor/${email}`,{
                    method:'DELETE',
                    headers: {
                              authorization: `Bearer ${localStorage.getItem('accessToken')}`
                                    },
                 })
                 .then(res=>res.json())
                 .then(data=>{
                      console.log('data');
                      if(data.deletedCount){
                         toast.success(`Doctor ${name} is deleted!`)
                         refetch();
                      }
                 })
          }
  return (
                              <tr>
                                 <td>{index+1}</td>
                              <td>
                                <div className="flex items-center space-x-3">
                                  <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12 ">
                                      <img src={img} alt={name} />
                                    </div>
                                  </div>
                                </div>
                              </td>
                      
                              <td>{name}</td>
                              <td>{email}</td>
                              <td>{speciality}</td>
                              <th>
                              <button onClick={()=> handleDelete(email)} class="btn btn-outline btn-error btn-sm">Delete doctor</button>
                              </th>
                            </tr>
  )
}

export default DoctorRow