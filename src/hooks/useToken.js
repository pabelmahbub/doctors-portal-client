import React from 'react';
import { useState, useEffect } from 'react';

function useToken(user) {
     const [token, setToken] = useState('');
      useEffect(() => {
                              console.log('user inside use token', user?.user.email);
                              const email = user?.user?.email;
                              const currentUser = {email: email};
                              if(email){
                               fetch(`https://doctors-100.herokuapp.com/user/${email}`, {
                                  method: "PUT",
                                  headers:{
                                          'content-type': 'application/json',
                                       },
                                   body: JSON.stringify(currentUser)
                                })
                                .then(res => res.json())
                                .then(data => {console.log(data)
                                const accessToken = data.token;
                                localStorage.setItem('accessToken',accessToken);
                                setToken(accessToken);


                              });

                              }
       }, [user])

  return [token];

}

export default useToken;
