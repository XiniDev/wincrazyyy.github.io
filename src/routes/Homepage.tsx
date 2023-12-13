import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';

import Winson_Icon_Large_Nobkg from '../images/winson-icon-large-nobkg.png';

import Chevron from '../images/chevron.png';

import Shelf_Image from '../images/shelf-image.png';
import Carousel_1 from '../images/carousel-1.png';
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

    const [carouselDot, setCarouselDot] = useState([true, false, false]);
    const [carouselIndex, setCarouselIndex] = useState(0);

    const carouselSwitch = (e: React.MouseEvent<HTMLDivElement>, left: boolean) => {
        e.stopPropagation();

        let index = carouselIndex;
        let nodes = (e.target as HTMLDivElement).parentElement!.lastChild!.childNodes;

        if (left) {
            if (carouselIndex > 0) {
                setCarouselIndex(carouselIndex - 1);
                index -= 1;
            }
        } else {
            if (carouselIndex < nodes.length - 1) {
                setCarouselIndex(carouselIndex + 1);
                index += 1;
            }
        }

        nodes.forEach(node => {
            (node as HTMLElement).style.transform = "translateX(-" + (100 * index) + "%)";
        });

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

    const [formActive, setFormActive] = useState(true);

    const openForm = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setFormActive(true);
    };

    const reviewsRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const mouseCoords = useRef({
        startX: 0,
        scrollLeft: 0
    });

    const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!reviewsRef.current) return
        const slider = reviewsRef.current as any;
        const startX = e.pageX - slider.offsetLeft;
        const scrollLeft = slider.scrollLeft;
        mouseCoords.current = { startX, scrollLeft };
        setIsMouseDown(true);
        document.body.style.cursor = "grabbing";
    };

    const handleDragEnd = () => {
        setIsMouseDown(false);
        if (!reviewsRef.current) return;
        document.body.style.cursor = "default";
    };

    const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isMouseDown || ! reviewsRef.current) return;
        e.preventDefault();
        const slider = reviewsRef.current as any;
        const x = e.pageX - slider.offsetLeft;
        const walkX = (x - mouseCoords.current.startX) * 1.5;
        slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
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
        }, 2000);
      
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
        <div className="homepage" onMouseUp={handleDragEnd}>
            <Header/>
            <Form formActive={formActive} setFormActive={setFormActive}/>
            <div className="homepage-intro">
                <div className="homepage-bkg"></div>
                <div className={`homepage-intro-background ${fadeDivs[2] ? 'homepage-fade-bkg visible' : 'homepage-fade-bkg'}`}></div>
                <div className="homepage-intro-container">
                    <div className="homepage-intro-textdiv">
                        <div className={`homepage-intro-img ${fadeDivs[0] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                            <img src={Winson_Icon_Large_Nobkg}></img>
                        </div>
                        <div className={`homepage-intro-title ${fadeDivs[0] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                            <span>W</span>INSON <span>S</span>IU
                        </div>
                        <div className={`homepage-intro-subtitle ${fadeDivs[1] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                            <hr/>
                            Professional Online Math Tutor
                            <hr/>
                        </div>
                        <div
                            className={`homepage-intro-booknow ${hovered == 'hm-int-bn' ? 'hovered' : ''} ${fadeDivs[2] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}
                            onMouseEnter={() => handleMouseEnter('hm-int-bn')}
                            onMouseLeave={handleMouseLeave}
                            onClick={(e) => openForm(e)}
                        >
                            Book a Lesson!
                        </div>
                    </div>
                </div>
            </div>
            <div className="two-column not-mobile">
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
                                    <b>200+ students, 8000+ lessons, 13000+ hours<div>, ...</div></b><span> from 2017 to 2023 in full-time.</span>
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
                        <div className="bannerlist-wrapper">
                            <div className="bannerlist-left">
                                <div
                                    className={`bannerlist-banner ${hovered == 'ed-bkg-1' ? 'hovered' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('ed-bkg-1')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className={`bannerlist-title ${hovered == 'ed-bkg-1' ? 'hovered' : ''}`}>
                                        <b>Academic Background</b>
                                    </div>
                                    <div className={`bannerlist-text ${hovered == 'ed-bkg-1' ? 'hovered' : ''}`}>
                                        &#127891; Graduate of City University of Hong Kong with <b>First Class Honours</b>.<br></br><br></br>
                                        &#128221; Bachelor of <b>Quantitative Finance and Risk Management</b>, minor in <b>Mathematics</b>.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="two-column-textdiv">
                        <div className="two-column-image">
                            <img src={Shelf_Image}/>
                        </div>
                        <div className="bannerlist-wrapper">
                            <div className="bannerlist-right">
                                <div
                                    className={`bannerlist-banner ${hovered == 'ed-bkg-2' ? 'hovered' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('ed-bkg-2')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className={`bannerlist-title ${hovered == 'ed-bkg-2' ? 'hovered' : ''}`}>
                                        <b>HKALE</b>
                                    </div>
                                    <div className={`bannerlist-text ${hovered == 'ed-bkg-2' ? 'hovered' : ''}`}>
                                        Pure Maths <b>(A)<br></br>[Top 4.8%]</b>
                                    </div>
                                </div>
                                <div
                                    className={`bannerlist-banner ${hovered == 'ed-bkg-3' ? 'hovered' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('ed-bkg-3')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className={`bannerlist-title ${hovered == 'ed-bkg-3' ? 'hovered' : ''}`}>
                                        <b>HKCEE</b>
                                    </div>
                                    <div className={`bannerlist-text ${hovered == 'ed-bkg-3' ? 'hovered' : ''}`}>
                                        Add Maths <b>(A)<br></br>[Top 6.0%]</b><br></br><br></br>
                                        Maths <b>(A)<br></br>[Top 3.1%]</b>
                                    </div>
                                </div>
                                <div
                                    className={`bannerlist-banner ${hovered == 'ed-bkg-4' ? 'hovered' : ''}`}
                                    onMouseEnter={() => handleMouseEnter('ed-bkg-4')}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className={`bannerlist-title ${hovered == 'ed-bkg-4' ? 'hovered' : ''}`}>
                                        <b>HKDSE</b>
                                    </div>
                                    <div className={`bannerlist-text ${hovered == 'ed-bkg-4' ? 'hovered' : ''}`}>
                                        Maths M1 <b>(5**)<br></br>[Top 2.9%]</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-sb">
                <div className="mobile-sb-container">
                    <div className="mobile-sb-textdiv">
                        <div className="mobile-s-wrapper">
                            <div className="mobile-s-block">
                                <div className="mobile-s-decor">
                                    <hr></hr>
                                    <hr></hr>
                                </div>
                                <div className="mobile-s-text">
                                    <b>Teaching Experience</b>
                                </div>
                            </div>
                            <div className="mobile-s-block">
                                <div className="mobile-s-text">
                                    <b>16 years of part-time and full-time tutoring experience</b> in Mathematics since 2007.
                                </div>
                            </div>
                            <div className="mobile-s-block">
                                <div className="mobile-s-text">
                                    <b>180+ students, 7200+ lessons, 12000+ hours</b> from 2017 to 2023 in full-time.
                                </div>
                            </div>
                            <div className="mobile-s-block">
                                <div className="mobile-s-text">
                                    Specializing in <b>IBDP, A Level, IGCSE, IBMYP, HKDSE, AP, SAT, etc.</b>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-sb-image">
                            <img src={Shelf_Image}/>
                        </div>
                        <div className="mobile-b-wrapper">
                            <div className="mobile-b-top">
                                <div className="mobile-b-banner">
                                    <div className="mobile-b-title">
                                        <b>HK Degree</b>
                                    </div>
                                    <div className="mobile-b-text">
                                        Graduate of City University of Hong Kong with <b>First Class Honours</b>.<br></br><br></br>
                                        Bachelor of <b>Quantitative Finance and Risk Management</b>, minor in <b>Mathematics</b>.
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-b-bottom">
                                <div className="mobile-b-banner">
                                    <div className="mobile-b-title">
                                        <b>HKALE</b>
                                    </div>
                                    <div className="mobile-b-text">
                                        Pure Mathematics <b>(A) [Top 4.8%]</b>
                                    </div>
                                </div>
                                <div className="mobile-b-banner">
                                    <div className="mobile-b-title">
                                        <b>HKCEE</b>
                                    </div>
                                    <div className="mobile-b-text">
                                        Additional Mathematics <b>(A) [Top 6.0%]</b><br></br>
                                        Mathematics <b>(A) [Top 3.1%]</b>
                                    </div>
                                </div>
                                <div className="mobile-b-banner">
                                    <div className="mobile-b-title">
                                        <b>HKDSE</b>
                                    </div>
                                    <div className="mobile-b-text">
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
                                <div className={`carousel-dot ${carouselDot[0] ? 'active' : ''}`}></div>
                                <div className={`carousel-dot ${carouselDot[1] ? 'active' : ''}`}></div>
                                <div className={`carousel-dot ${carouselDot[2] ? 'active' : ''}`}></div>
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
                    <div className="up-down-space"></div>
                    <div className="reviews">
                        <div className="reviews-wrapper">
                            <div
                                className="reviews-box-wrapper"
                                onMouseDown={handleDragStart}
                                onMouseUp={handleDragEnd}
                                onMouseMove={handleDrag}
                                ref={reviewsRef}
                            >
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson has helped me improve my math in just one year. 
                                        He gives me many past papers to do on different topics, and it has improved my math scores drastically. 
                                        During our lessons, we go through many exercises and questions and I am able to learn a lot. I now have more confidence in math thanks to Winson.
                                    </div>
                                    <div className="reviews-name">
                                        Nicole Li (2024)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson老师的教学方式以以习题练习为主，不断加强记忆深入了解知识点，在课后也会有相应的笔记供学生复习。
                                        老师一直很用心，包括备课/考前准备等，性格也很热情，教课不死板而且认真，帮助我在IGCSE阶段从F到A得到了提升和飞跃，其中老师量身定做了往年习题易错题以及薄弱知识点单元等，让我得到了很大的帮助。
                                    </div>
                                    <div className="reviews-name">
                                        Cissie Ching (2023)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson helped me a lot in my journey of IBDP mathematics.
                                        My grade improved from 4 to 7 in exams, and finally got into HKU Dentistry.
                                        His teaching style and the “by topic” past paper question bank is highly recommended for those who want to have great improvement in grades.
                                    </div>
                                    <div className="reviews-name">
                                        David Zhang (2020)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson's tutoring helped me immensely during the period of the Covid online class, which enabled me to obtain a 7 in IB Maths AA HL (predicted grade) and dreamed uni offers.
                                        Especially for student who wasn't exactly an active learner, I was able to follow his path and finish all the assignment/pastpaper.
                                        The lesson notes he provided with sufficiently detailed formula and key words have been a major source for revision material in every quiz, test and IB Exam &gt;&lt;
                                    </div>
                                    <div className="reviews-name">
                                        Judy Wei (2021)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Explanations are concise and easy to understand, with loads of practice questions in which he will guide you through every bit you don't understand. 
                                        Very uplifting and kind, will answer your questions outside of lesson time 🥺. 
                                        100% will recommend, especially with how rigid some school math teachers are with their teaching methods 👌✨ Couldn't have achieved a 7 without him.
                                    </div>
                                    <div className="reviews-name">
                                        Kitty Lam (2020)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        他对待每个学生的教育方式都独一档，一个半小时的课程丝毫不含糊。
                                    </div>
                                    <div className="reviews-name">
                                        Alan Chen (2024)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        我认为Winson教学方法简洁明了，令人轻松理解复杂的数学概念。他耐心地解答我的问题，并且给予了很多实用的技巧和策略。
                                        通过他的指导，我在数学方面的自信心得到了提升，并且在考试中取得了很大的进步。我非常感激他的帮助，他是一位出色的数学老师！
                                    </div>
                                    <div className="reviews-name">
                                        Coco Cheng (2024)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Mr. Siu is hands down the best math teacher I've come across. His teaching style is crystal clear, with easy-to-follow structures and a stash of super relevant questions. 
                                        What makes him truly exceptional is his strong sense of responsibility and genuine passion for tutoring. He gets a real kick out of seeing his students improve, and that enthusiasm shines through in his teaching. 
                                        Thanks to his guidance, my journey through IB AA HL mathematics has seen significant improvement. I thoroughly enjoy his tutoring sessions every week.
                                    </div>
                                    <div className="reviews-name">
                                        Jasmine Yang (2023)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson has a unique teaching approach that I greatly admire. During his classes, he presents topics in his own distinctive way, which differs significantly from the school's standard teaching methods. 
                                        Additionally, Winson diligently compiles valuable past paper questions for practice before and after each class, a task that often takes him several days to complete. 
                                        Working closely with Winson has been instrumental in helping me maintain an A* level throughout my A Level studies.
                                    </div>
                                    <div className="reviews-name">
                                        Ken Chen (2024)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Mr. Siu's teaching method is very efficient, he is patient as well. 
                                        Following Mr. Siu in class, I also successfully improved my IGCSE grade from C to A.
                                    </div>
                                    <div className="reviews-name">
                                        Anonymous
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        I'd say that Winson could be the best math tutor I've ever had. I had him as my tutor for the last year of IB. Winson's teaching style is learning by practicing past papers. 
                                        He will provide specific past paper questions for each topic separately, and the notes he provided are very useful for final exam revisions. Winson is very patient and experienced. 
                                        All assignments he provided are based on each student's ability and needs. In the end, Winson successfully supported me to reach a 7 for Math AA HL. Definitely a good choice to find him for math tutorials!!
                                    </div>
                                    <div className="reviews-name">
                                        Joy Angela Sun (2022)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        I have been taught by Mr. Winson for 5 months. My result have been improved for 2 grades. His learning style is always touched with the syllabus and he always feel free to discuss questions to you after lesson. 
                                        His lesson note is one the best criteria to achieve your aim grade. The notes is full of previous past paper and question that are commonly asked. Moreover Mr. Winson is a very patient and responsible teacher. 
                                        I truly recommend him to every student who were struggling in Mathematics right now.
                                    </div>
                                    <div className="reviews-name">
                                        Casey Chan (2023)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Finding Winson as my IB Math tutor was an incredible stroke of luck! He truly saved me from my struggles with IB Higher Level Math, where I couldn't even pass the exam. 
                                        Thanks to Winson's invaluable support, I achieved a grade 4, just a hair's breadth away from a grade 5. I am immensely grateful to him for his exceptional teaching style, which is both enjoyable and easily understandable. 
                                        His fluency in Mandarin, English, and Cantonese was a tremendous asset, as it allowed me to learn in the language I felt most comfortable with. I would recommend him to everyone who is currently suffering from IB Math!
                                    </div>
                                    <div className="reviews-name">
                                        Vivian Chen (2018)
                                    </div>
                                </div>
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