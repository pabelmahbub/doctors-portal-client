import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Home/Footer';
import Primarybutton from '../Shared/Primarybutton';

function NotFound() {
  return (
    <div>
        <div className='flex justify-center text-center items-center pb-14'>
          <img style={{height:420,width:600}}src="https://img.freepik.com/free-vector/404-error-lost-in-space-concept-illustration_114360-7891.jpg?t=st=1649256965~exp=1649257565~hmac=7d6e4e8c120213811b302183ab7055890153dbee429f68585e5f5c140de1bfb1&w=740"></img>
        </div>
        
        <div className='flex justify-center text-center items-center px-48 pb-35'>
         <Link to='/'><Primarybutton>Go Home</Primarybutton></Link>
        </div>
        <Footer></Footer>
       
    </div>
  )
}

export default NotFound