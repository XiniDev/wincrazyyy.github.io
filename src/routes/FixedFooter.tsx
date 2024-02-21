import React, { useState } from 'react';

import TwitterShareButton from './TwitterShareButton'

import Book_Now from '../images/drawings/stickers/Book_Now_Compressed.png';

type FixedFooterProp = {
    openForm: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const FixedFooter: React.FC<FixedFooterProp> = ({ openForm }) => {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    }

    const handleMouseLeave = () => {
        setHovered(null);
    }

    const [fixedFooterVisible, setFixedFooterVisible] = useState<boolean>(false);

    return (
        <div className={`fixed-footer ${fixedFooterVisible ? 'visible' : ''}`}>
            <div
                className={`fixed-footer-share ${hovered == 'share' ? 'hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('share')}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => openForm(e)}
            >
                <TwitterShareButton />
            </div>
            <div
                className={`fixed-footer-signup ${hovered == 'signup' ? 'hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('signup')}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => openForm(e)}
            >
                <img src={Book_Now}></img>
            </div>
        </div>
    );
}

export default FixedFooter;