import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate,useLocation } from 'react-router-dom';
import Loading from '../Shared/Loading';

function RequiredAuth({children}) {
          //from react firebase hook authstate library
        const [user, loading] = useAuthState(auth);
        const location = useLocation();

        if(loading){
            return <Loading></Loading>
        }
        if(!user){
           return <Navigate to='/login' state={{from: location}} replace></Navigate>
        }
  return children;
}

export default RequiredAuth