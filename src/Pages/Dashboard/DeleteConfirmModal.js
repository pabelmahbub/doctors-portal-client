import React from 'react'
import { toast } from 'react-toastify';

function DeleteConfirmModal({deletingDoctor,refetch,setDeletingDoctor}) {
        const{name,email}= deletingDoctor;  
        
        const handleDelete = () =>{
                              fetch(`https://doctors-portal-server1.up.railway.app/doctor/${email}`,{
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
                                      setDeletingDoctor(null);
                                      refetch();
                                      
                                   }
                              })
                       }
  return (
    <div>

<input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-red-500 ml-5 mt-4">Pls be sure! You want to delete Dr.{name}?</h3>
    <p className="py-4 ml-5">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action mr-8">

                              
     
      <button onClick={()=> handleDelete(email)} class="btn btn-outline btn-error btn-sm">Delete</button>
      <label htmlFor="delete-confirm-modal" className="btn btn-sm">Cancel</label>
    </div>
  </div>
</div>
    </div>
  )
}

export default DeleteConfirmModal