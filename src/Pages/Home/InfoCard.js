import React from 'react'

function InfoCard({img,title,bgClass}) {
  return (
                              <div class={`card lg:card-side bg-base-100 shadow-xl pt-4 ${bgClass}`}>
                              <figure className='pl-4'><img src={img} alt="Album" /></figure>
                              <div class="card-body text-white">
                                <h2 class="card-title">New album is released!</h2>
                                <p>{title}</p>
                              </div>
                            </div>
                            
  )
}

export default InfoCard