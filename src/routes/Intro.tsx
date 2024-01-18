import React, { useEffect, useState } from 'react';
import { formatString } from './Utils';

import Counter from './Counter';

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
            <div className={`homepage-intro-background ${fadeDivs[2] ? 'homepage-fade-bkg visible' : 'homepage-fade-bkg'}`}></div>
            <div className="homepage-intro-container">
                <div className="homepage-intro-textdiv">
                    {/* <div className={`homepage-intro-img ${fadeDivs[0] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                        <img src={logo}></img>
                    </div> */}
                    <Counter fadeDiv={fadeDivs[0]} hideDiv={hideDivs} hours={hours}/>
                    <div className={`homepage-intro-title ${fadeDivs[0] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                        <span>W</span>INSON <span>S</span>IU
                    </div>
                    {/* <div className={`homepage-intro-subtitle ${fadeDivs[1] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                        <hr/>
                        Professional Online Math Tutor
                        <hr/>
                    </div> */}
                    {/* <div
                        className={`homepage-intro-booknow ${hovered == 'hm-int-bn' ? 'hovered' : ''} ${fadeDivs[2] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}
                        onMouseEnter={() => handleMouseEnter('hm-int-bn')}
                        onMouseLeave={handleMouseLeave}
                        onClick={(e) => openForm(e)}
                    >
                        Book a Lesson!
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Intro;