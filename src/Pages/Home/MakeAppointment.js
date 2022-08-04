import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section className='px-0 py-16'>
            <div style={{
                background: `url(${appointment})`
            }} className='flex justify-center items-center'>
                <div className='flex-1 hidden lg:block'>
                    <img className='-mt-32' src={doctor} alt="doctor" />
                </div>
                <div className='flex-1 p-6 md:pr-4'>
                 <h3 className='text-cyan-600'>Appointment</h3>
                 <h2 className='text-white text-2xl'>Make an appointment Today</h2>
                 <p className='py-8 text-slate-300 text-lg'>
                 It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                 </p>
                 <button className='btn bg-cyan-600 hover:bg-cyan-700 border-none'>Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;