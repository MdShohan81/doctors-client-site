import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = [
        {
            _id: 1,
            title: 'Fluoride Treatment',
            description: 'When the soft tissue (mostly nerves and blood vessels) inside a tooth becomes damaged',
            img: fluoride

        },
        {
            _id: 2,
            title: 'Cavity Filling',
            description: 'A dental restoration or “filling” artificially restores the function, integrity, and morphology of missing tooth structure',
            img: cavity

        },
        {
            _id: 3,
            title: 'Teeth Whitening',
            description: 'Our office has experience with most of the tooth whitening systems currently available. ',
            img: whitening

        }
    ]
    return (
        <div className='my-24 px-0'>
            <div className='text-center'>
                <h4 className='text-cyan-600 font-semibold text-lg uppercase'>OUR SERVICES</h4>
                <h3 className='text-2xl font-semibold'>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    >

                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;