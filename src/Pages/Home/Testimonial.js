import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            img: people1,
            name: 'Winson Herry',
            country: 'Istambhul',
            descripton: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 2,
            img: people2,
            name: 'Kebin gab',
            country: 'London',
            descripton: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 3,
            img: people3,
            name: 'Mular lison',
            country: 'California',
            descripton: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ]
    return (
        <section>
            <div className='flex justify-between'>
                <div className='w-48  lg:w-96'>
                    <h3 className='text-xl text-cyan-600 font-semibold'>Testimonial</h3>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="img" />
                </div>
            </div>
            <div className='py-8 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <TestimonialCard 
                    key={review._id}
                    review={review}
                    ></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;