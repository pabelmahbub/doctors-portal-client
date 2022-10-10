import React, { useState } from 'react'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

function ManageDoctors() {
  const[deletingDoctor, setDeletingDoctor] = useState(null);

        const {data:doctors, isLoading, refetch} = useQuery('doctors', ()=> fetch('http://localhost:5000/doctor',{
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
                      },
                 }).then(res => res.json()));   
                 
         if(isLoading){
               return <Loading />;               
         }        
  return (
    <div>


          <div className="overflow-x-auto w-full">
          <h2>Manage Doctor here.{doctors.length}</h2>     

  <table className="table w-full">
    <thead>
      <tr>
        <th>ID</th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Email</th>
        <th>Speciality</th>
        <th>Manage</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
                              {
                                                            doctors.map((doctor,index) =><DoctorRow
                                                            key={doctor._id}
                                                            index={index}
                                                            doctor={doctor}
                                                            refetch={refetch}
                                                            setDeletingDoctor={setDeletingDoctor}
                                                            ></DoctorRow>)
                              }

          </tbody>
        </table>
        </div>
        {
          deletingDoctor && <DeleteConfirmModal
            deletingDoctor={deletingDoctor}
            refetch={refetch}
            setDeletingDoctor={setDeletingDoctor}
          ></DeleteConfirmModal>
        }

    </div>
  )
}

export default ManageDoctors