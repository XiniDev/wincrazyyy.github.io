import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import Winson_Icon_Square from '../images/winson-icon-square.png';

const IGCSE: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    }

    const handleMouseLeave = () => {
        setHovered(null);
    }

    const setExamRow = (scoreStart: number, scoreEnd: number) => {
        const startClass = 'exam-row-start-' + scoreStart;
        const endClass = 'exam-row-end-' + (scoreEnd + 1);

        const finalClass = startClass + ' ' + endClass;

        return finalClass;
    };

    return (
        <div className="page">
            <Header/>
            <div className="syllabus-intro">
                <div className="syllabus-intro-container">
                    <div className="syllabus-intro-title">
                        International General Certificate<br></br> of Secondary Education (IGCSE):
                    </div>
                </div>
            </div>
            <div className="two-column">
                <div className="two-column-background"></div>
                <div className="two-column-container">
                <div className="two-column-textdiv">
                        <div className="list-wrapper">
                            <div
                                className={`list-point ${hovered == 'co-dsc-1' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-1')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`list-point-text list-text-rev ${hovered == 'co-dsc-1' ? 'hovered' : ''}`}>
                                    Training questions sorted by topic from 2014 to 2023.
                                </div>
                                <div className={`list-point-shade list-shade-rev ${hovered == 'co-dsc-1' ? 'hovered' : ''}`}></div>
                            </div>
                            <div
                                className={`list-point ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-2')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`list-point-text list-text-rev ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}>
                                    All IGCSE students achieved B or above
                                </div>
                                <div className={`list-point-shade list-shade-rev ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}></div>
                            </div>
                            <div
                                className={`list-point ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-3')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`list-point-text list-text-rev ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}>
                                    One Additional Math student improved from predicted grade B to final grade A* in two months only.
                                </div>
                                <div className={`list-point-shade list-shade-rev ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="two-column-image">
                        <img src={Winson_Icon_Square}/>
                    </div>
                </div>
            </div>
            <div className="up-down">
                {/* <div className="up-down-background-large"></div> */}
                <div className="up-down-container">
                    {/* <div className="up-down-title">
                        Exam Results:
                    </div> */}
                    <div className="up-down-textdiv">
                        <div className="exam-wrapper">
                            <div className="exam-table">
                                <div className="exam-catagory">
                                    Cambridge <b>International Math</b> (0607), Cambridge <b>Math</b> (0580), Edexcel <b>Math</b> (4PM1):
                                </div>
                                <div className="exam-grid-numbers">
                                    <div>F</div>
                                    <div>E</div>
                                    <div>D</div>
                                    <div>C</div>
                                    <div>B</div>
                                    <div>A</div>
                                    <div>A*</div>
                                </div>
                                <div className="exam-grid">
                                    <div className={`exam-row ${setExamRow(5, 7)}`}>
                                        Jacky (2021), Catherine (2021), Bill (2022), James (2022)
                                    </div>
                                    <div className={`exam-row ${setExamRow(4, 6)}`}>
                                        Jessica (2019), Ken (2022), Evelyn (2023), Gordon (2023)
                                    </div>
                                    <div className={`exam-row ${setExamRow(1, 6)} exam-row-highlight`}>
                                        Kelly (2023) <b>[in 1 year]</b>
                                    </div>
                                    <div className={`exam-row ${setExamRow(3, 5)}`}>
                                        Kitty (2018), Geaena (2019), Alice (2019), Casey (2023)
                                    </div>
                                    <div className={`exam-row ${setExamRow(1, 5)} exam-row-highlight`}>
                                        Cissie (2023) <b>[in 1 year]</b>
                                    </div>
                                </div>
                            </div>
                            <div className="exam-table">
                                <div className="exam-catagory">
                                    Cambridge <b>Additional Math</b> (0606), Edexcel <b>Further Math</b> (4PM0)
                                </div>
                                <div className="exam-grid-numbers">
                                    <div>F</div>
                                    <div>E</div>
                                    <div>D</div>
                                    <div>C</div>
                                    <div>B</div>
                                    <div>A</div>
                                    <div>A*</div>
                                </div>
                                <div className="exam-grid">
                                    <div className={`exam-row ${setExamRow(5, 7)} exam-row-highlight`}>
                                        Emily (2018) <b>[in 2 months only]</b>
                                    </div>
                                    <div className={`exam-row ${setExamRow(5, 6)}`}>
                                        Jacky (2022)
                                    </div>
                                    <div className={`exam-row ${setExamRow(3, 5)}`}>
                                        Catherine (2021)
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

export default IGCSE;