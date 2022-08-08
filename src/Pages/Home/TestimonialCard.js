import React from 'react';

const TestimonialCard = ({review}) => {
    return (
        <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
            <p>{review.descripton}</p>
            <div className='flex items-center'>
                <div className='border-4 border-cyan-600 rounded-full'>
                    <img src={review.img} alt="" />
                </div>
                <div className='ml-8'>
                    <h1 className='text-xl'>{review.name}</h1>
                    <h3 className='text-md'>{review.country}</h3>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TestimonialCard;