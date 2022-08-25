import React from 'react';
import { format } from 'date-fns';

function BookingModal({ treatment, date, setTreatment }) {
  const { _id, name, slots } = treatment;

  const handleBooking = e => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null);
  }
  return (
    <div>
      <input type="checkbox" id="BookingModal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label for="BookingModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">{name}</h3>

          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center my-10'>
            <input type='text' value={format(date, 'PP')} disabled class="input input-bordered input-accent w-full max-w-xs" />
            <select name='slot' class="select select-bordered w-full max-w-xs">
              {
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
            </select>
            <input type="text" name='name' placeholder="Your name" class="input input-bordered input-accent w-full max-w-xs" />
            <input type="text" name='email' placeholder="Your email address" class="input input-bordered input-accent w-full max-w-xs" />
            <input type="text" name='phone' placeholder="Phone number" class="input input-bordered input-accent w-full max-w-xs" />
            <input type="submit" value='submit' class="btn btn-secondary w-full max-w-xs" />

          </form>

        </div>
      </div>

    </div>
  )
}

export default BookingModal