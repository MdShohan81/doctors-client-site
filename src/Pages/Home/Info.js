import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <InfoCard title="Opening Hours" descripton="Lorem Ipsum is simply dummy text of the pri" bgClass='bg-cyan-600 hover:bg-cyan-700' img={clock}></InfoCard>
            <InfoCard title="Visit our location" descripton="Brooklyn, NY 10036, United States" bgClass='bg-slate-900' img={marker}></InfoCard>
            <InfoCard title="Contact us now" descripton="+000 123 456789" bgClass='bg-cyan-600 hover:bg-cyan-700' img={phone}></InfoCard>
        </div>
    );
};

export default Info;