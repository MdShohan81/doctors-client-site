import React from 'react';

const InfoCard = ({img, title,bgClass, descripton}) => {
    return (
            <div class={`card lg:card-side  shadow-xl text-white px-6 py-4 ${bgClass}`}>
                <figure><img src={img} alt="Album"/></figure>
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <p>{descripton}</p>
                </div>
            </div> 
        
    );
};

export default InfoCard;