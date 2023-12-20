import React, { useState } from 'react';

import Double_Chevron from '../images/double-chevron.png';

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
            {/* <div
                className={`footer-button ${hovered == 'btn' ? 'hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('btn')}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => footerClick(e)}
            >
                <img className={`footer-button-img ${footerVisible ? 'visible' : ''}`} src={Double_Chevron}></img>
            </div> */}
            <div
                className={`footer-signup ${hovered == 'signup' ? 'hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('signup')}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => openForm(e)}
            >
                Book Now!
            </div>
        </div>
    );
}

export default Footer;