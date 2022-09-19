import React from 'react'

function UserRow({user,key}) {
  const {email} = user;
  return (
    <div>
     <tr>
      <td>1</td>
      <td>{email}</td>

    </tr>
    </div>
  )
}

export default UserRow;
