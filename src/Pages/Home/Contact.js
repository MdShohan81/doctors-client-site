import React from 'react';
import './Contact.css'


const Contact = () => {
    return (
        <section className='py-16 text-center'>
            <div className='bg-img py-12 '>
                <h3 className='text-cyan-600 text-lg font-bold'>Contact Us </h3>
                <h2 className='mb-8 text-xl lg:text-3xl text-white'>Stay connected with us</h2>
                <div className='flex justify-center'>
                <form className='grid grid-row-3'>
                <input type="email" placeholder="Email" class="input  w-96  max-w-xs" />
                <input type="text" placeholder="Subject" class="input  w-96 my-4 max-w-xs" />
                <input type="textarea" placeholder="Your message" class="input  w-96 max-w-xs" />
                <button className='btn bg-cyan-600 hover:bg-cyan-700 border-none mt-4'>Submit</button>
                </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;