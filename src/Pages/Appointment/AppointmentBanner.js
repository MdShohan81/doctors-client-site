import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({date, setDate}) => {
  
    return (
        <div class="hero min-h-screen gap-5">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg shadow-2xl" alt='img' />
    <div>
    <DayPicker 
    mode="single"
    selected={date}
    onSelect={setDate}
    />
    <p className='text-center text-cyan-600'>You picked {format(date, 'PP')}.</p>
    </div>
  </div>
</div>
    );
};

export default AppointmentBanner;