import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero lg:min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="lg:max-w-lg md:max-w-md sm:max-w-sm xm:max-w-xm rounded-lg shadow-2xl" alt="chair.png"/>
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
      <button class="btn bg-cyan-600 hover:bg-cyan-700 border-none">GET STARTED</button>
    </div>
  </div>
</div>
    );
};

export default Banner;