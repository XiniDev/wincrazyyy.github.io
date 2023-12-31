import React, { useState } from 'react';

import Book_Now from '../images/book_now.png';

type FooterProp = {
    openForm: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Footer: React.FC<FooterProp> = ({ openForm }) => {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    }

    const handleMouseLeave = () => {
        setHovered(null);
    }

    const [footerVisible, setFooterVisible] = useState(false);

    const footerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        if (footerVisible) {
            setFooterVisible(false);
        } else {
            setFooterVisible(true);
        }
    };

    return (
        <div className={`footer ${footerVisible ? 'visible' : ''}`}>
            <div
                className={`footer-signup ${hovered == 'signup' ? 'hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('signup')}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => openForm(e)}
            >
                <img src={Book_Now}></img>
            </div>
        </div>
    );
}

export default Footer;