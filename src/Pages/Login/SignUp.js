import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Shared/Footer';
import auth from '../../firebase.init';
import { useSignInWithGithub,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';

function SignUp() {
  const [signInWihGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);
  const [token] = useToken(user || googleUser || githubUser);





  const navigate = useNavigate();

  let signInError;

  if(error || googleError || updateError || githubError){
    signInError= <p className='text-red-500 pb-2'>{error?.message || googleError?.message}</p>
  }
  
  //alltime loading::::  if (true || loading || googleLoading) {
  if (loading || googleLoading || githubLoading) {
    return <Loading></Loading>
  }


  if(user || googleUser || githubUser){
    console.log(user || googleUser || githubUser);
  }
  // if(githubUser){
  //   console.log(githubUser);
  // }
  // if(user){
  //   console.log(user);
  // }
  
  const onSubmit = async data =>{
    await createUserWithEmailAndPassword(data.email,data.password);
    await updateProfile({ displayName:data.name});
   // console.log('update successful');
    //navigate("/appointment")
    //alert('You successfully created your account');
  }
  return (
<>
    <div className='flex h-screen justify-center items-center'>
       <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Sign Up</h2>

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
                <span class="label-text">Password</span>
              </label>
              <input 
              type="password" 
              placeholder="Passeword here" 
              class="input input-bordered w-full max-w-xs"
              {...register("password", {
                        required:{
                          value: true,
                          message:'Password is Required'
                        },
                        minLength: {
                          value:5,
                          message:'Password must be 5 or more characters'
                        }
                      })}
              />
              <label class="label">
              {errors.password?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
              {errors.password?.type === 'minLength' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>


            {signInError}
            <input 
                type='submit' 
                value= 'Signup'
                class="btn w-full max-w-xs text-white"
                        />
          </form>
   <p className='text-center text-xs pt-1'>Already have an account?<Link className='text-secondary' to='/login'> Please Login</Link></p>


        <div class="divider">OR</div>
    <button 
    onClick={() => signInWihGoogle()}
    class="btn btn-outline">Continue with Google</button>
     <button 
    onClick={() => signInWithGithub()}
    className="btn btn-outline btn-secondary">Continue with Github</button>
  </div>
</div>


    </div>
    <Footer></Footer>
   </>
  )
}

export default SignUp;


