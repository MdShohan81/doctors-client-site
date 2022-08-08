import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';


const AvailableAppointment = ({date}) => {
    const [availableService, setAvailableService] = useState([]);
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('availableService.json')
        .then(res => res.json())
        .then(data => setAvailableService(data));
    }, [])

    return (
        <div className='mb-12'>
            <h3 className='text-center text-cyan-500 text-2xl font-bold'>Available Appointment {format(date, 'PP')}</h3>
            <h4 className='text-center text-lg text-gray-600 mt-6'>Please Select the Service</h4>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 my-16'>
                {
                    availableService.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal date={date} treatment={treatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;