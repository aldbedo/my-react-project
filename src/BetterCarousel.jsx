import React from 'react'
import Carousel from 'better-react-carousel'

function BetterCarousel() {

    const MyDot = ({ isActive }) => (
        <span
            style={{
                display: 'inline-block',
                height: isActive ? '8px' : '5px',
                width: isActive ? '8px' : '5px',
                background: '#1890ff'
            }}
            ></span>
    )

    return (
        <Carousel cols={2} rows={1} gap={10} loop autoplay={1000}>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/seed/img1/600/400" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/seed/img2/600/400" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/seed/img3/600/400" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/seed/img4/600/400" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/seed/img5/600/400" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/seed/img6/600/400" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/seed/img7/600/400" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/seed/img8/600/400" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="https://picsum.photos/seed/img9/600/400" />
            </Carousel.Item>
        </Carousel>
    )
}

export default BetterCarousel