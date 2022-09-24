import React from 'react'

function Service({ service, setTreatment,refetch }) {
  const { name, slots } = service;
  return (
    <div>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-secondary">{name}</h2>
          <p>{
            slots.length ? <span>{slots[0]} slot available now</span> : <span className='text-orange-500 font-bold'>Pls try another day!</span>
          }</p>
          <p>{slots.length} {slots.length > 1 ? 'slots' : 'slot'} are avilable now!</p>
          <div class="card-actions justify-center pt-5">
            {
              slots.length !== 0 ?
                <label
                htmlFor="BookingModal" onClick={() => setTreatment(service)} class=" btn modal-button btn btn-secondary text-white uppercase">Book Appointment</label>
                : <button disabled class="btn btn-primary">Book Appointment</button>
            }
            {/* anotehr way// <button disabled={slots.length === 0} class="btn btn-primary">Book Now</button> */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
