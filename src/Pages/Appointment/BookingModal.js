
import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment,date}) => {
    const {slots, name} = treatment;
    return (
        <div>   
        
        <input type="checkbox" id="booking-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <label for="booking-modal" class="btn btn-sm bg-cyan-600 border-none absolute right-2 top-2">✕</label>
            <h3 class="font-bold text-lg text-cyan-600">Available Treatment: {name}</h3>
            <form className='lg:max-w-lg grid grid-cols-1 gap-4 justify-items-center my-8'>
            <input disabled type="text"  value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
            <select class="select select-bordered w-full max-w-xs">
                {
                    slots.map(slot => <option value={slot}>{slot}</option>)
                }
            </select>
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            <button className='btn bg-cyan-600 hover:bg-cyan-700 border-none'>Submit</button>
            </form>
        </div>
        </div>
        </div>
    );
};

export default BookingModal;