import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Winson_Icon_Round from '../images/winson-icon-round.png';

const Header: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    }

    const handleMouseLeave = () => {
        setHovered(null);
    }

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [hidden, setHidden] = useState(false);
    const [transparent, setTransparent] = useState(false);

    const currentURL = useLocation().pathname;

    useEffect(() => {
        if (currentURL == '/') {
            setTransparent(true)
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (prevScrollPos > currentScrollPos || currentScrollPos < 50) {
                setHidden(false);
            } else {
                setHidden(true);
            }

            if (currentURL == '/') {
                if (currentScrollPos < window.innerHeight - 80) {
                    setTransparent(true)
                } else {
                    setTransparent(false)
                }
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className={`header ${hidden ? 'hidden' : ''} ${transparent ? 'transparent' : ''}`}>
            <div className="header-container">
                <div className="winson-icon">
                    <img src={Winson_Icon_Round}/>
                    Winson Siu<br></br>Maths
                </div>
                <div className="header-links">
                    <Link
                        to ="/"
                        className={`header-link ${hovered == 'home' ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter('home')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Home
                    </Link>
                    <Link
                        to ="/ibdp"
                        className={`header-link ${hovered == 'ibdp' ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter('ibdp')}
                        onMouseLeave={handleMouseLeave}
                    >
                        IBDP
                    </Link>
                    <Link
                        to ="/a-level"
                        className={`header-link ${hovered == 'a-level' ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter('a-level')}
                        onMouseLeave={handleMouseLeave}
                    >
                        A Level
                    </Link>
                    <Link
                        to ="/igcse"
                        className={`header-link ${hovered == 'igcse' ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter('igcse')}
                        onMouseLeave={handleMouseLeave}
                    >
                        IGCSE
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;