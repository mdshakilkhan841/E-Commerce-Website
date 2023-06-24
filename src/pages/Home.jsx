import React from 'react';
import HeroSection from '../components/HeroSection';
import Products from './Products';
import Cart from '../components/Cart';

const Home = () => {
    return (
        <div className='mt-16'>
            {/*---- Hero image slider -----*/}
            <HeroSection />
            
            <Products/>

            <Cart/>
        </div>
    )
}

export default Home