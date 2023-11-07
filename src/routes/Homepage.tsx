import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import Winson_Icon_Square from '../images/winson-icon-square.png';
import Winson_Icon_Round from '../images/winson-icon-round.png';

import Shelf_Image from '../images/shelf-image.png';
import Carousel_2 from '../images/carousel-2.png';
import Carousel_3 from '../images/carousel-3.png';

const Homepage: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    }

    const handleMouseLeave = () => {
        setHovered(null);
    }

    const handleShelfHover = (left: boolean, left_block: string, right_block: string) => {
        switch (hovered) {
            case left_block:
                return left ? 'hovered' : 'hidden';
            case right_block:
                return left ? 'hidden' : 'hovered';
            default:
                return '';
        }
    };

    const [bannerActive, setbannerActive] = useState([false, false, false, false]);

    const bannerlistClick = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        e.stopPropagation();
        switch (index) {
            case 0:
                setbannerActive(() => [true, false, false, false]);
                break;
            case 1:
                setbannerActive(() => [false, true, false, false]);
                break;
            case 2:
                setbannerActive(() => [false, false, true, false]);
                break;
            case 3:
                setbannerActive(() => [false, false, false, true]);
                break;
            default:
                setbannerActive(() => [false, false, false, false]);
                break;
        }
    };

    const [carouselDot, setCarouselDot] = useState([true, false, false]);
    const [carouselIndex, setCarouselIndex] = useState(0);

    const carouselSwitch = (e: React.MouseEvent<HTMLDivElement>, left: boolean) => {
        e.stopPropagation();

        let index = carouselIndex;

        if (left) {
            if (carouselIndex > 0) {
                setCarouselIndex(carouselIndex - 1);
                index -= 1;
            }
        } else {
            if (carouselIndex < 2) {
                setCarouselIndex(carouselIndex + 1);
                index += 1;
            }
        }

        switch (index) {
            case 0:
                setCarouselDot(() => [true, false, false]);
                break;
            case 1:
                setCarouselDot(() => [false, true, false]);
                break;
            case 2:
                setCarouselDot(() => [false, false, true]);
                break;
            default:
                setCarouselDot(() => [true, false, false]);
                break;
        }
    };

    const [reviewsDot, setReviewsDot] = useState([true, false, false]);
    const [reviewsIndex, setReviewsIndex] = useState(0);

    const reviewsSwitch = (e: React.MouseEvent<HTMLDivElement>, left: boolean) => {
        e.stopPropagation();

        let index = reviewsIndex;

        if (left) {
            if (reviewsIndex > 0) {
                setReviewsIndex(reviewsIndex - 1);
                index -= 1;
            }
        } else {
            if (reviewsIndex < 2) {
                setReviewsIndex(reviewsIndex + 1);
                index += 1;
            }
        }

        switch (index) {
            case 0:
                setReviewsDot(() => [true, false, false]);
                break;
            case 1:
                setReviewsDot(() => [false, true, false]);
                break;
            case 2:
                setReviewsDot(() => [false, false, true]);
                break;
            default:
                setReviewsDot(() => [true, false, false]);
                break;
        }
    };

    const [fadeDivs, setFadeDivs] = useState([false, false, false]);

    const [hideDivs, setHideDivs] = useState(false);

    useEffect(() => {
        const timeout1 = setTimeout(() => {
            setFadeDivs((prev) => [true, prev[1], prev[2]]);
        }, 300);
        const timeout2 = setTimeout(() => {
            setFadeDivs((prev) => [prev[0], true, prev[2]]);
        }, 1200);
        const timeout3 = setTimeout(() => {
            setFadeDivs((prev) => [prev[0], prev[1], true]);
        }, 1500);
      
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const vh = window.innerHeight;
            const threshold = vh / 2 - 200;

            if (window.scrollY < threshold) {
                setHideDivs(false);
            } else {
                setHideDivs(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="homepage" onClick={(e) => bannerlistClick(e, 100)}>
            <Header/>
            <div className="homepage-intro">
                <div className="homepage-intro-background"></div>
                <div className="homepage-intro-container">
                    <div className="homepage-intro-textdiv">
                        <div className={`homepage-intro-title ${fadeDivs[0] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                            Winson Siu
                        </div>
                        <div className={`homepage-intro-subtitle ${fadeDivs[1] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                            <hr/>
                            Professional Mathematics Tutor
                            <hr/>
                        </div>
                        <div className={`homepage-intro-description ${fadeDivs[2] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                            Reach for the sky and achieve next level in Mathematics
                        </div>
                    </div>
                </div>
            </div>
            <div className="two-column">
                <div className="two-column-container">
                    <div className="two-column-textdiv">
                        <div className="shelf-wrapper">
                            <div
                                className={`shelf-block ${handleShelfHover(true, 'tc-exp-tl', 'tc-exp-tr')}`}
                                onMouseEnter={() => handleMouseEnter('tc-exp-tl')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`shelf-decor ${handleShelfHover(true, 'tc-exp-tl', 'tc-exp-tr')}`}>
                                    <hr></hr>
                                    <hr></hr>
                                </div>
                                <div className={`shelf-text ${handleShelfHover(true, 'tc-exp-tl', 'tc-exp-tr')}`}>
                                    <b>Teaching Experience</b>
                                </div>
                            </div>
                            <div
                                className={`shelf-block ${handleShelfHover(false, 'tc-exp-tl', 'tc-exp-tr')}`}
                                onMouseEnter={() => handleMouseEnter('tc-exp-tr')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`shelf-text ${handleShelfHover(false, 'tc-exp-tl', 'tc-exp-tr')}`}>
                                    <b>16 years of <span>part-time and full-time</span> tutoring experience</b><span> in Mathematics since 2007.</span>
                                </div>
                            </div>
                            <div
                                className={`shelf-block ${handleShelfHover(true, 'tc-exp-bl', 'tc-exp-br')}`}
                                onMouseEnter={() => handleMouseEnter('tc-exp-bl')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`shelf-text ${handleShelfHover(true, 'tc-exp-bl', 'tc-exp-br')}`}>
                                    <b>180+ students, 7200+ lessons, 12000+ hours<div>, ...</div></b><span> from 2017 to 2023 in full-time.</span>
                                </div>
                            </div>
                            <div
                                className={`shelf-block ${handleShelfHover(false, 'tc-exp-bl', 'tc-exp-br')}`}
                                onMouseEnter={() => handleMouseEnter('tc-exp-br')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`shelf-text ${handleShelfHover(false, 'tc-exp-bl', 'tc-exp-br')}`}>
                                    <span>Specializing in </span><b>IBDP, A Level, IGCSE, IBMYP<div>, ...</div><span>, HKDSE, AP, SAT, etc.</span></b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="two-column-image">
                        <img src={Shelf_Image}/>
                    </div>
                </div>
            </div>
            <div className="up-down up-down-unpad">
                <div className="up-down-container">
                    <div className="up-down-textdiv">
                        <div className="bannerlist-wrapper">
                            <div className="bannerlist-left">
                                <div
                                    className={`bannerlist-banner ${hovered == 'ed-bkg-1' ? 'hovered' : ''} ${bannerActive[0] ? 'active' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('ed-bkg-1')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={(e) => bannerlistClick(e, 0)}
                                >
                                    <div className={`bannerlist-title ${hovered == 'ed-bkg-1' ? 'hovered' : ''} ${bannerActive[0] ? 'active' : ''}`}>
                                        <b>HK Degree</b>
                                    </div>
                                    <div className={`bannerlist-text ${hovered == 'ed-bkg-1' ? 'hovered' : ''} ${bannerActive[0] ? 'active' : ''}`}>
                                        Graduate of City University of Hong Kong with <b>First Class Honours</b> (CGPA 3.57).<br></br><br></br>
                                        Bachelor of <b>Quantitative Finance and Risk Management</b>, minor in <b>Mathematics</b>.
                                    </div>
                                </div>
                            </div>
                            <div className="bannerlist-right">
                                <div
                                    className={`bannerlist-banner ${hovered == 'ed-bkg-2' ? 'hovered' : ''} ${bannerActive[1] ? 'active' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('ed-bkg-2')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={(e) => bannerlistClick(e, 1)}
                                >
                                    <div className={`bannerlist-title ${hovered == 'ed-bkg-2' ? 'hovered' : ''} ${bannerActive[1] ? 'active' : ''}`}>
                                        <b>HKALE</b>
                                    </div>
                                    <div className={`bannerlist-text ${hovered == 'ed-bkg-2' ? 'hovered' : ''} ${bannerActive[1] ? 'active' : ''}`}>
                                        Pure Mathematics <b>(A) [Top 4.8%]</b>
                                    </div>
                                </div>
                                <div
                                    className={`bannerlist-banner ${hovered == 'ed-bkg-3' ? 'hovered' : ''} ${bannerActive[2] ? 'active' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('ed-bkg-3')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={(e) => bannerlistClick(e, 2)}
                                >
                                    <div className={`bannerlist-title ${hovered == 'ed-bkg-3' ? 'hovered' : ''} ${bannerActive[2] ? 'active' : ''}`}>
                                        <b>HKCEE</b>
                                    </div>
                                    <div className={`bannerlist-text ${hovered == 'ed-bkg-3' ? 'hovered' : ''} ${bannerActive[2] ? 'active' : ''}`}>
                                        Additional Mathematics <b>(A) [Top 6.0%]</b><br></br>
                                        Mathematics <b>(A) [Top 3.1%]</b>
                                    </div>
                                </div>
                                <div
                                    className={`bannerlist-banner ${hovered == 'ed-bkg-4' ? 'hovered' : ''} ${bannerActive[3] ? 'active' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('ed-bkg-4')}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={(e) => bannerlistClick(e, 3)}
                                >
                                    <div className={`bannerlist-title ${hovered == 'ed-bkg-4' ? 'hovered' : ''} ${bannerActive[3] ? 'active' : ''}`}>
                                        <b>HKDSE</b>
                                    </div>
                                    <div className={`bannerlist-text ${hovered == 'ed-bkg-4' ? 'hovered' : ''} ${bannerActive[3] ? 'active' : ''}`}>
                                        Mathematics Module 1 <b>(5**) [Top 2.9%]</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="up-down">
                <div className="up-down-background"></div>
                <div className="up-down-container">
                    <div className="carousel">
                        <div className="carousel-wrapper">
                            <div
                                className={`carousel-left ${hovered == 'carousel-left' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('carousel-left')}
                                onMouseLeave={handleMouseLeave}
                                onClick={(e) => carouselSwitch(e, true)}
                            >
                                {/* &lt; */}
                            </div>
                            <div
                                className={`carousel-right ${hovered == 'carousel-right' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('carousel-right')}
                                onMouseLeave={handleMouseLeave}
                                onClick={(e) => carouselSwitch(e, false)}
                            >
                                {/* &gt; */}
                            </div>
                            <div className="carousel-dot-container">
                                <div className={`carousel-dot ${carouselDot[0] ? 'active' : ''}`}></div>
                                <div className={`carousel-dot ${carouselDot[1] ? 'active' : ''}`}></div>
                                <div className={`carousel-dot ${carouselDot[2] ? 'active' : ''}`}></div>
                            </div>
                            <div className={`carousel-image ${carouselDot[0] ? 'active' : ''}`}>
                                <img src={Carousel_3}/>
                            </div>
                            <div className={`carousel-image ${carouselDot[1] ? 'active' : ''}`}>
                                <img src={Carousel_2}/>
                            </div>
                            <div className={`carousel-image ${carouselDot[2] ? 'active' : ''}`}>
                                <img src={Carousel_3}/>
                            </div>
                        </div>
                    </div>
                    <div className="up-down-space"></div>
                    <div className="reviews">
                        <div className="reviews-wrapper">
                            <div
                                className={`reviews-left ${hovered == 'reviews-left' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('reviews-left')}
                                onMouseLeave={handleMouseLeave}
                                onClick={(e) => reviewsSwitch(e, true)}
                            >
                                {/* &lt; */}
                            </div>
                            <div
                                className={`reviews-right ${hovered == 'reviews-right' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('reviews-right')}
                                onMouseLeave={handleMouseLeave}
                                onClick={(e) => reviewsSwitch(e, false)}
                            >
                                {/* &gt; */}
                            </div>
                            <div className="reviews-box-wrapper">
                                <div className="reviews-box"></div>
                                <div className="reviews-box"></div>
                                <div className="reviews-box"></div>
                                <div className="reviews-box"></div>
                                <div className="reviews-box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Homepage;