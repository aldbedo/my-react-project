import React, { useState } from 'react'
import './carousel.css'

export const CarouselSlider = ({ data }) => {

    const [curr, setCurr] = useState(0);

    const nextSlide = () => {
        setCurr((curr) => (curr === data.length ? 0 : curr + 1))
    }

    const previousSlide = () => {
        setCurr((curr) => (curr === 0 ? data.length - 1 : curr - 1))
    }

    return <div className="carousel">

        <div className='img'>{data}</div>
        <button 
                className="arrow arrow-left" 
                onClick={previousSlide}>&#10094;</button>
        {/* {data.map((item, idx) => {
            return <img 
                src={item.src} 
                alt={item.alt} 
                key={idx} 
                className={`${slides === idx ? 'slides' : 'slides slides-hidden'}`}
                style={{ transform: `translateX(-${slides * 100}%)`}}/>
        })} */}

        <button className="arrow arrow-right" onClick={nextSlide}>&#10095;</button>
            <span className="indicators">
                {/* {data.map((_, idx) => {
                    return <button 
                                key={idx} 
                                onClick={() => setCurr(idx)} 
                                className={`${curr === idx ? "indicator" : "indicator indicator-inactive"}`}></button>
                })} */}
            </span>
    </div>;
};

export default CarouselSlider