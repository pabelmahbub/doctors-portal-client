import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function BookingModal({ treatment, date, setTreatment }) {
  //from react-firebase-hook library
  const [user, loading, error] = useAuthState(auth);

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
          <label htmlFor="BookingModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="font-bold text-lg">{name}</h3>

          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center my-10'>
            <input type='text' value={format(date, 'PP')} disabled class="input input-bordered input-accent w-full max-w-xs" />
            <select name='slot' class="select select-bordered w-full max-w-xs">
              {
                slots.map((slot,index) => <option 
                  key={index}
                  value={slot}>{slot}</option>)
              }
            </select>
            <input type="text" name='name' disabled value={user?.displayName || ''} class="input input-bordered input-accent w-full max-w-xs" />
            <input type="text" name='email' disabled value={user?.email || ''} class="input input-bordered input-accent w-full max-w-xs" />
            <input type="text" name='phone' placeholder="Phone number" class="input input-bordered input-accent w-full max-w-xs" />
            <input type="submit" value='submit' class="btn btn-secondary w-full max-w-xs" />

          </form>

        </div>
      </div>

    </div>
  )
}

export default BookingModal