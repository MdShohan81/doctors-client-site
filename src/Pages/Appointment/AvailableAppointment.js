import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';


const AvailableAppointment = ({date}) => {
    const [availableService, setAvailableService] = useState([]);

    useEffect(() => {
        fetch('availableService.json')
        .then(res => res.json())
        .then(data => setAvailableService(data));
    }, [])

    return (
        <div className='mb-12'>
            <h3 className='text-center text-cyan-500 text-2xl font-bold'>Available Appointment {format(date, 'pp')}</h3>
            <h4 className='text-center text-lg text-gray-600 mt-6'>Please Select the Service</h4>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 my-16'>
                {
                    availableService.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;