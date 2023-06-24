import React from 'react';
import HeroSection from '../components/HeroSection';
import Products from './Products';

const Home = () => {
    return (
        <div className='mt-16'>
            {/*---- Hero image slider -----*/}
            <HeroSection />
            <Products/>
        </div>
    )
}

export default Home