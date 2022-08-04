import React from 'react';
import About from './About';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';


const Home = () => {
    return (
        <div className='px-10'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <About></About>
            <MakeAppointment></MakeAppointment>
         </div>
    );
};

export default Home;