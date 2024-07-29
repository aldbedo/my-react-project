import { useState } from 'react';
import './slider.css'

function SLider() {

    const slides = [
        "https://picsum.photos/seed/img1/600/400",
        "https://picsum.photos/seed/img2/600/400",
        "https://picsum.photos/seed/img3/600/400",
        "https://picsum.photos/seed/img4/600/400",
        "https://picsum.photos/seed/img5/600/400",
        "https://picsum.photos/seed/img6/600/400",
        "https://picsum.photos/seed/img7/600/400",
        "https://picsum.photos/seed/img8/600/400",
        "https://picsum.photos/seed/img9/600/400",
        "https://picsum.photos/seed/img10/600/400",
        "https://picsum.photos/seed/img11/600/400",
    ]

    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr => curr === 0 ? slides.length - 1 : curr - 1))

    const next = () => setCurr((curr => curr === slides.length - 1 ? 0 : curr + 1))

    return(
        <div className="container">
            <div className="images">
                {slides.map((s, index) => (
                    <img 
                        key={index} 
                        src={s} 
                        className={`${curr === index ? 'image' : 'image image-hidden'}`}/>
                ))}

                <button onClick={prev} className='arrow arrow-left'>&#10094;</button>
                <button onClick={next} className='arrow arrow-right'>&#10095;</button>
            </div>
        </div>
    );
}

export default SLider