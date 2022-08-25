import React from 'react'

function Review({ review }) {
  return (
    <div class="card lg:max-w-lgbg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">貴重なクライアント!</h2>
        <p>{review.review}</p>
        <div class="flex items-center py-2">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt='' />
            </div>
          </div>

          <div>
            <h4 className='text-xl'>{review.name}</h4>
            <p className=''>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review