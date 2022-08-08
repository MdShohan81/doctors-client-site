import React from 'react';

const Service = ({service}) => {
    const {slots, name} = service;
    return (
        <div class="card lg:max-w-lg md:max-w-md sm:max-w-sm bg-slate-50 text-black  shadow hover:shadow-lg">
        <div class="card-body items-center text-center">
            <h2 class="card-title text-cyan-500">{name}</h2>
            <p>{
                slots.length > 1 ? <span>{slots[0]}</span> : <span className='text-red-500'>Sorry Not Available</span>
            }</p>
            <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
            <div class="card-actions justify-end">
            <button disabled={slots.length === 0} class="btn bg-cyan-600 hover:bg-cyan-700 border-none">Book Appointment</button>
            </div>
        </div>
        </div>
    );
};

export default Service;