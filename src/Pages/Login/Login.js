import React,{useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword,useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';



function Login() {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  //const onSubmit = (data) => console.log(data);
  const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user || googleUser || githubUser);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let signInError;

useEffect( () =>{
  if(token){
    navigate(from, { replace:true });
  }

},[token, from, navigate])

//alltime loading::::  if (true || loading || googleLoading) {
if (loading || googleLoading || githubLoading) {
  return <Loading></Loading>
}

if(error || googleError || githubError){
  signInError= <p className='text-red-500 pb-2'>{error?.message || googleError?.message}</p>
}

  const OnSubmit = async data =>{
    console.log(data);
          //alert('Sent email');
    await signInWithEmailAndPassword(data.email,data.password);

  }
  return (
<>
    <div className='flex h-screen justify-center items-center'>
       <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold">Login</h2>

          <form onSubmit={handleSubmit(OnSubmit)}>

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
                value= 'login'
                class="btn w-full max-w-xs text-white"
                        />
          </form>
   <p className='text-center text-xs pt-1'>New to Doctors portal?<Link className='text-secondary' to='/signUp'> Create new account.</Link></p>


  <div class="divider">OR</div>
    <button
    onClick={() => signInWithGoogle()}
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

export default Login;


// import React from 'react';
// import { useState } from 'react';
// import Footer from '../Shared/Footer';
// import auth from '../../firebase.init';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { useForm } from "react-hook-form";
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

// function Login() {
//   const [signInWihGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
//   const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();


//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


//   const onSubmit = data => {
//     console.log(data);
//     signInWithEmailAndPassword(data.email,data.password);
//   }

//   return (
// <>
//     <div className='flex h-screen justify-center items-center'>
//        <div class="card w-96 bg-base-100 shadow-xl">
//   <div class="card-body">
//     <h2 class="text-center text-2xl font-bold">Login</h2>

//     <form onSubmit={handleSubmit(onSubmit)}>

//     <div class="form-control w-full max-w-xs">
//   <label class="label">
//     <span class="label-text">Email</span>
//   </label>
//   <input
//       type="email"
//       placeholder="Your email address"
//       class="input input-bordered w-full max-w-xs"
//       {...register("email", {
//         required:{
//           value: true,
//           message:'Email is Required'
//         },
//         pattern: {
//           value:/[a-z0-9]+@[a-z]+\.edu\.[a-z]{2,3}/,
//           message: 'Provide a valid email'
//         }
//       })}
//    />
//    <label class="label">
//    {errors.email?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
//    {errors.email?.type === 'patern' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
//   </label>
// </div>

// <div class="form-control w-full max-w-xs">
//   <label class="label">
//     <span class="label-text">Password</span>
//   </label>
//   <input
//       type="password"
//       placeholder="Type password here"
//       class="input input-bordered w-full max-w-xs"
//       {...register("password", {
//         required:{
//           value: true,
//           message:'Passeord is Required'
//         },
//         minLength: {
//           value:6,
//           message: 'Must be 6 character or longer'
//         }
//       })}
//    />
//    <label class="label">
//    {errors.password?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
//    {errors.password?.type === 'minLength' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
//   </label>
// </div>



// {/* <div class="form-control w-full max-w-xs">
//   <label class="label">
//     <span class="label-text">Password</span>
//   </label>
//   <input
//       onChange={(e) => setPassword(e.target.value)}
//       type="password"
//       placeholder="Please type your password"
//       class="input input-bordered w-full max-w-xs"
//       {...register("password", {
//         required:{
//           value: 6,
//           message:'Password is Required'
//         },
//         pattern: {
//           value: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/,
//           message: 'Must be 6 characters long and containing digits'
//         }
//       })}
//    />
//    <label class="label">
//    {errors.password?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
//    {errors.password?.type === 'pattern' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
//   </label>
// </div> */}






//       {/* <button
//           type='submit'
//           class="btn w-full max-w-xs text-white"
//           onClick={() => signInWithEmailAndPassword(email, password)}>Login</button> */}

//      <input
//           type='submit'
//           value= 'login'
//           class="btn w-full max-w-xs text-white"
//           onClick={() => signInWithEmailAndPassword(email, password)} />
//     </form>





//     <div class="divider">OR</div>
//     <button
//     onClick={() => signInWihGoogle()}
//     class="btn btn-outline">Continue with Google</button>
//   </div>
// </div>


//     </div>
//     <Footer></Footer>
//    </>
//   )
// }

// export default Login
