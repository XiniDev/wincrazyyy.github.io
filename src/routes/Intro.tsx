import React, { useEffect, useState } from 'react';
import { formatString } from './Utils';

import Counter from './Counter';
import LazyBackground from './LazyBackground';

import Banner from '../images/drawings/banners/Winson_Website_Banner.png'
import Banner_Compressed from '../images/drawings/banners/Winson_Website_Banner_Compressed.png'

type IntroProp = {
    openForm: (e: React.MouseEvent<HTMLDivElement>) => void;
    logo: string;
    hours: number;
}

const Intro: React.FC<IntroProp> = ({ openForm, logo, hours }) => {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    };

    const handleMouseLeave = () => {
        setHovered(null);
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
            const threshold = vh / 2;

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
        <div className="homepage-intro">
            <div className="homepage-bkg"></div>
            {/* <div className={`homepage-intro-background ${fadeDivs[2] ? 'homepage-fade-bkg visible' : 'homepage-fade-bkg'}`}></div> */}
            <LazyBackground
                src={Banner}
                placeholder={Banner_Compressed}
                className={`homepage-intro-background ${fadeDivs[2] ? 'homepage-fade-bkg visible' : 'homepage-fade-bkg'}`}
            >
            </LazyBackground>
            <div className="homepage-intro-container">
                <div className={`homepage-triangle ${fadeDivs[2] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade triangle') : 'homepage-intro-fade'}`}></div>
                <div className={`homepage-rect-mobile ${fadeDivs[2] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}></div>
                <div className="homepage-intro-textdiv">
                    <div className={`homepage-intro-img ${fadeDivs[0] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                        <img src={logo}></img>
                    </div>
                    <Counter fadeDiv={fadeDivs[0]} hideDiv={hideDivs} hours={hours}/>
                    <div className={`homepage-intro-title homepage-text-shadow ${fadeDivs[0] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                        <span>W</span>INSON <span>S</span>IU
                    </div>
                    <div className={`homepage-intro-subtitle homepage-text-shadow-2 ${fadeDivs[1] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                        Professional Online Math Tutor
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;