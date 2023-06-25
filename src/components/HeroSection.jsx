import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const HeroSection = () => {
    const images = [`${img1}`, `${img2}`, `${img3}`];
    
    return (
        <div>
            <Fade duration={3000}>
                {images?.map((image, index) => (
                    <div key={`fade-${index}`} className='w-full md:h-80 h- h-48 flex justify-center object-cover mt-16'>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Fade>
        </div>
    );
};

export default HeroSection;
