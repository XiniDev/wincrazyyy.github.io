import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Form from './Form';

import Logo from '../images/drawings/logo/logo_transparent.png';
import Menu_Icon from '../images/menu-icon.png';

type HeaderProp = {
    formActive: boolean;
    setFormActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProp> = ({ formActive, setFormActive }) => {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    }

    const handleMouseLeave = () => {
        setHovered(null);
    }

    const openForm = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setFormActive(true);
    };

    const [menuOpen, setMenuOpen] = useState(false);
    const [transparent, setTransparent] = useState(false);

    const handleMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        if (menuOpen) {
            setMenuOpen(false);
        } else {
            setMenuOpen(true);
        }
    };

    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const [fadeDivs, setFadeDivs] = useState(false);

    const currentURL = useLocation().pathname;

    useEffect(() => {
        if (currentURL == '/') {
            setTransparent(true)

            const timeout = setTimeout(() => {
                setFadeDivs(true);
            }, 2000);
        
            return () => {
                clearTimeout(timeout);
            };
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

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
        <div className={`header ${transparent ? 'transparent' : ''} ${currentURL == '/' ? (fadeDivs ? 'header-fade visible' : 'header-fade') : ''}`}>
            <Form formActive={formActive} setFormActive={setFormActive}/>
            <div className={`header-container ${menuOpen ? 'open' : ''}`}>
                <Link
                    to ="/"
                    className="header-winson-icon"
                >
                    <img src={Logo}/>
                    Winson Siu
                </Link>
                <div
                    className="mobile-header-links"
                    onClick={(e) => handleMenu(e)}
                >
                    <div>Menu</div>
                    <img className={menuOpen ? 'open' : ''} src={Menu_Icon}/>
                </div>
                <div className={`header-links mobile-hidden-header ${menuOpen ? 'open' : ''}`}>
                    <Link
                        to ="/"
                        className={`header-link ${hovered == 'home' ? 'hovered' : ''} ${menuOpen ? 'open' : ''}`}
                        onMouseEnter={() => handleMouseEnter('home')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Home
                    </Link>
                    <Link
                        to ="/ibdp"
                        className={`header-link ${hovered == 'ibdp' ? 'hovered' : ''} ${menuOpen ? 'open' : ''}`}
                        onMouseEnter={() => handleMouseEnter('ibdp')}
                        onMouseLeave={handleMouseLeave}
                    >
                        IBDP
                    </Link>
                    <Link
                        to ="/a-level"
                        className={`header-link ${hovered == 'a-level' ? 'hovered' : ''} ${menuOpen ? 'open' : ''}`}
                        onMouseEnter={() => handleMouseEnter('a-level')}
                        onMouseLeave={handleMouseLeave}
                    >
                        A-Level
                    </Link>
                    <Link
                        to ="/igcse"
                        className={`header-link ${hovered == 'igcse' ? 'hovered' : ''} ${menuOpen ? 'open' : ''}`}
                        onMouseEnter={() => handleMouseEnter('igcse')}
                        onMouseLeave={handleMouseLeave}
                    >
                        IGCSE
                    </Link>
                    <div
                        className={`header-link ${hovered == 'signup' ? 'hovered' : ''} ${menuOpen ? 'open' : ''}`}
                        onMouseEnter={() => handleMouseEnter('signup')}
                        onMouseLeave={handleMouseLeave}
                        onClick ={(e) => openForm(e)}
                    >
                        Book a Lesson!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;