import React from 'react'
import { Outlet,Link } from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

function Dashboard() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
                              <div class="drawer drawer-mobile">
                              <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                              <div class="drawer-content">
                               <h2 className='text-2xl font-bold text-secondary text-center'>My Appointments</h2>
                               <Outlet></Outlet>
                                {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                              </div>
                              <div class="drawer-side">
                                <label for="my-drawer-2" class="drawer-overlay"></label>
                                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                                  {/* <!-- Sidebar content here --> */}
                                  <li><Link to='/dashboard'>MY APPOINMENTS</Link></li>
                                  <li><Link to='/dashboard/review'>REVIEW</Link></li>
                                  <li><Link to='/dashboard/myHistory'>MY HISTORY</Link></li>
                                  {admin && <li><Link to='/dashboard/users'>All Users</Link></li>}

                                </ul>

                              </div>
                            </div>
  )
}

export default Dashboard
