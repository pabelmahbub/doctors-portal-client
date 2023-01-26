import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import {toast } from 'react-toastify';


function AddDoctor() {
  const { register, formState: { errors }, handleSubmit,reset } = useForm();
  const {data: services, isLoading} = useQuery('services', () => fetch('https://doctors-portal-server1.up.railway.app/service').then(res=> res.json()));

const imageStorageKey ='e14e1b8d3c8184fd3276c41e2f3ab393';

  const onSubmit = async data =>{
    //console.log(data);
    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res=> res.json())
    .then(result =>{ 
          if(result.success){
             const img = result.data.url;
             const doctor = {
                    name: data.name,
                    email: data.email,
                    speciality: data.speciality,
                    img: img
             } 
             //send data to my db:

             fetch('https://doctors-portal-server1.up.railway.app/doctor', {
                              method: "POST",
                              headers: {
                                    "content-type":'application/json',
                                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                              },
                              body: JSON.stringify(doctor)
             　　　　})
             .then(res => res.json())
             .then(inserted =>{
                              if(inserted.insertedId){
                                  toast.success('Doctor profile added success');
                                  reset();
                              }
                              else{
                                  toast.error('Image upload error. Please try again!');
                              }
             })
                          }
});

  }


  if(isLoading){
     return <Loading></Loading>
  }

  return (
    <div>
      <h2 className='text-2xl'>Add a new doctor</h2>
     

<form onSubmit={handleSubmit(onSubmit)}>


<div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Name</span>
    </label>
    <input
    type="text"
    placeholder="Pls type name here"
    class="input input-bordered w-full max-w-xs"
    {...register("name", {
              required:{
                value: true,
                message:'Name is Required'
              },
              minLength: {
                value:2,
                message:'Name must be 2 or more characters'
              }
            })}
    />
    <label class="label">
    {errors.name?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.name.message}</span>}
    {errors.name?.type === 'minLength' &&  <span class="label-text-alt text-red-500">{errors.name.message}</span>}
    </label>
  </div>



<div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Email</span>
    </label>
    <input
    type="email"
    placeholder="Your email address"
    class="input input-bordered w-full max-w-xs"
    {...register("email", {
              required:{
                value: true,
                message:'Email is Required'
              },
              pattern: {
                //value:/[a-z0-9]+@[a-z]+\.\.[a-z]{2,3}/,
                value: /\S+@\S+\.\S+/,
                message: 'Provide a valid email'
              }
            })}
    />
    <label class="label">
    {errors.email?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
    {errors.email?.type === 'pattern' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
    </label>
  </div>

  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Speciality</span>
    </label>

    <select  {...register("speciality")} className="select select-bordered w-full max-w-xs">
                              {
                                  services.map(service =><option
                                                     key={service._id}
                                                     value={service.name}>
                                                        {service.name}
                                                     </option>)
                              }
     
    </select>
 
  </div>


  <div class="form-control w-full max-w-xs">
    <label class="label">
      <span class="label-text">Photo</span>
    </label>
    <input
    type="file"
    placeholder="Your email address"
    class="input input-bordered w-full max-w-xs"
    {...register("image", {
              required:{
                value: true,
                message:'Image is Required'
              },
              pattern: {
                //value:/[a-z0-9]+@[a-z]+\.\.[a-z]{2,3}/,
                value: /\S+@\S+\.\S+/,
                message: 'Provide a valid Image'
              }
            })}
    />
    <label class="label">
    {errors.email?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
    {errors.email?.type === 'pattern' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
    </label>
  </div>



  <input
      type='submit'
      value= 'Add Doctor'
      class="btn w-full max-w-xs text-white  mt-5"
              />
</form>
    </div>
  )
}

export default AddDoctor