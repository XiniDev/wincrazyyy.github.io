import React, { useEffect, useState } from 'react';

import Shelf_Image from '../images/shelf-image.png';

const ShelfBlock: React.FC = () => {
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

    return (
        <div className="shelf-banner-wrapper">
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
            <div className="shelf-block-image">
                <img src={Shelf_Image}/>
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
                            &#127891; Graduate of City University of Hong Kong with <b>First Class Honours</b>.<div><br></br></div>
                            &#128221; Bachelor of <b>Quantitative Finance and Risk Management</b>, minor in <b>Mathematics</b>.
                        </div>
                    </div>
                </div>
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
                            Pure Maths <b>(A)<div>[Top 4.8%]</div></b>
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
                            Add Maths <b>(A) <div>[Top 6.0%]</div><br></br></b><br></br>
                            Maths <b>(A)<div>[Top 3.1%]</div></b>
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
                            Maths M1 <b>(5**)<div>[Top 2.9%]</div></b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShelfBlock;