import React, { useEffect, useState } from 'react';

import Chevron from '../images/chevron.png';

import Carousel_1 from '../images/drawings/carousels/carousel-1.png';
import Carousel_2 from '../images/drawings/carousels/carousel-2.png';
import Carousel_3 from '../images/drawings/carousels/carousel-3.png';

type CarouselProp = {
    openForm: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Carousel: React.FC<CarouselProp> = ({ openForm }) => {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    }

    const handleMouseLeave = () => {
        setHovered(null);
    }

    const [carouselDot, setCarouselDot] = useState([true, false, false]);
    const [carouselIndex, setCarouselIndex] = useState(0);

    const carouselSwitch = (e: React.MouseEvent<HTMLDivElement>, left: boolean) => {
        e.stopPropagation();

        let index = carouselIndex;
        const totalNodes = 3;
        const newIndex = left ? Math.max(0, carouselIndex - 1) : Math.min(totalNodes - 1, carouselIndex + 1);

        if (index !== newIndex) {
            setCarouselIndex(newIndex);
            index = newIndex;
        }

        const nodes = document.querySelectorAll('.carousel-image');
        nodes.forEach((node, idx) => {
            (node as HTMLElement).style.transform = `translateX(-${100 * index}%)`;
        });

        const newDotArray = Array(totalNodes).fill(false);
        newDotArray[index] = true;
        setCarouselDot(newDotArray);
    };

    const autoCarouselSwitch = (newIndex: number) => {
        const nodes = document.querySelectorAll('.carousel-image');
        nodes.forEach((node, idx) => {
            (node as HTMLElement).style.transform = `translateX(-${100 * newIndex}%)`;
        });

        const newDotArray = Array(carouselDot.length).fill(false);
        newDotArray[newIndex] = true;
        setCarouselDot(newDotArray);
        setCarouselIndex(newIndex);
    };
    
    useEffect(() => {
        const changeSlide = setInterval(() => {
            const newIndex = (carouselIndex + 1) % carouselDot.length;
            autoCarouselSwitch(newIndex);
        }, 7000);
        
        return () => {
            clearInterval(changeSlide);
        };
    }, [carouselIndex, carouselDot.length]);

    return (
        <div className="carousel">
            <div className="carousel-wrapper">
                <div
                    className={`carousel-left ${hovered == 'carousel-left' ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter('carousel-left')}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => carouselSwitch(e, true)}
                >
                    <img src={Chevron}/>
                </div>
                <div
                    className={`carousel-right ${hovered == 'carousel-right' ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter('carousel-right')}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => carouselSwitch(e, false)}
                >
                    <img src={Chevron}/>
                </div>
                <div className="carousel-dot-container">
                    {carouselDot.map((dot, idx) => (
                        <div
                            key={idx}
                            className={`carousel-dot ${dot ? 'active' : ''}`}
                            onClick={(e) => carouselSwitch(e, false)}
                        ></div>
                    ))}
                </div>
                <div className="carousel-image-wrapper">
                    <div onClick={(e) => openForm(e)} className="carousel-image">
                        <img src={Carousel_1}/>
                    </div>
                    <div className="carousel-image">
                        <img src={Carousel_2}/>
                    </div>
                    <div onClick={(e) => openForm(e)} className="carousel-image">
                        <img src={Carousel_3}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;