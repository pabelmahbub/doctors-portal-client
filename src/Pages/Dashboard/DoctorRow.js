import React from 'react';
import {toast } from 'react-toastify';

function DoctorRow({doctor,index,refetch, setDeletingDoctor}) {
          const{name,email,speciality,img,}= doctor;   
          
    
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

                              <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-outline btn-error btn-sm">Delete</label>
                             
                              </th>
                            </tr>
  )
}

export default DoctorRow