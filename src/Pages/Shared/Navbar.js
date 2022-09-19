import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {signOut } from 'firebase/auth';

function Navbar() {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    console.log('sign out successful');
  };

  const navItems = <>
    <li><Link to='/home'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/appointment'>Appointment</Link></li>
    <li><Link to='/review'>Reviews</Link></li>
    <li><Link to='/contact'>Contact Us</Link></li>
    {user &&  <li><Link to='/dashboard'>Dashboard</Link></li>}
    <li>{user ? <button onClick={logout} class="btn btn-secondary">Sign Out</button> : <Link to='/login'>Login</Link>}</li>
  </>
  return (
    <div class="navbar bg-base-100 mt-3">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
            <ul class="p-2">
              {navItems}
            </ul>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">Doctors Portal</a>
      </div>
      <div class="navbar-center hidden lg:flex ml-80">
        <ul class="menu menu-horizontal p-0">
          {navItems}
        </ul>
      </div>

      <div className='navbar-end'>
         {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>  */}
         <label for="my-drawer-2" className="btn btn-circle swap swap-rotate  lg:hidden">

              {/* <!-- this hidden checkbox controls the state --> */}
              <input type="checkbox" />

              {/* <!-- hamburger icon --> */}
              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>

              {/* <!-- close icon --> */}
              <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
         </label>
      </div>


    </div>
  )
}

export default Navbar
