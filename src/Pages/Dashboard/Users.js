import React from 'react';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

function Users() {
  const [treatment, setTreatment] = useState(null);
  const { isLoading, data:users, refetch} = useQuery('available', () =>
  fetch(`https://doctors-portal-server1.up.railway.app/user`,{
    method:'GET',
    headers:{
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  })

    .then(res =>
    res.json()
  ),

)

if(isLoading){
  return <Loading></Loading>
}

  return (
    <div>
    <div className="overflow-x-auto">
<table className="table table-zebra w-full mt-4 mb-4 mx-4">
  {/* <!-- head --> */}
  <thead>
    <tr>
      <th>ID</th>
      <th>Email</th>
      <th>JJJ</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
  {
    users.map(user=><UserRow
      key={user._id}
      user={user}
      refetch={refetch}
      ></UserRow>)
  }



  </tbody>
</table>
</div>

    </div>
  )
}

export default Users;
