import React, { useState } from 'react'
import './carousel.css'

export const CarouselSlider = ({ data }) => {

    const [slides, setSlides] = useState(0);
    const [direction, setDirection] = useState('');

    const nextSlide = () => {
        setDirection('slides-to-right')
        setSlides(slides === data.length - 1 ? 0 : slides + 1);
    }

    const previousSlide = () => {
        setDirection('slides-to-left')
        setSlides(slides === 0 ? data.length - 1 : slides - 1);
    }

    return <div className="carousel">

        <button 
                className="arrow arrow-left" 
                onClick={previousSlide}>&#10094;</button>
        {data.map((item, idx) => {
            return <img 
                src={item.src} 
                alt={item.alt} 
                key={idx} 
                className={`${slides === idx ? 'slides' : 'slides slides-hidden'}`}/>
        })}

    <button className="arrow arrow-right" onClick={nextSlide}>&#10095;</button>
        <span className="indicators">
            {data.map((_, idx) => {
                return <button 
                            key={idx} 
                            onClick={() => setSlides(idx)} 
                            className={`${slides === idx ? "indicator" : "indicator indicator-inactive"}`}></button>
            })}
        </span>
    </div>;
};

export default CarouselSlider