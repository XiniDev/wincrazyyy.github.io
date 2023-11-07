import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import Winson_Icon_Square from '../images/winson-icon-square.png';

const ALevel: React.FC = () => {
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
                        Advanced Level<br></br> Qualifications (A-Level):
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
                                    Training questions sorted by topic from 2008 to 2023
                                </div>
                                <div className={`list-point-shade list-shade-rev ${hovered == 'co-dsc-1' ? 'hovered' : ''}`}></div>
                            </div>
                            <div
                                className={`list-point ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-2')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`list-point-text list-text-rev ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}>
                                    All A-Level students achieved A or above
                                </div>
                                <div className={`list-point-shade list-shade-rev ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}></div>
                            </div>
                            <div
                                className={`list-point ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-3')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`list-point-text list-text-rev ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}>
                                    One student (Bill 2021) who scored A* in both Math subjects was admitted by University of Cambridge.
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
                                    <b>AL</b> Edexcel / Cambridge <b>Further Math</b>:
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
                                    <div className={`exam-row ${setExamRow(2, 7)} exam-row-highlight`}>
                                        Bill (2021)
                                    </div>
                                    <div className={`exam-row ${setExamRow(5, 7)}`}>
                                        Michelle (2021)
                                    </div>
                                </div>
                            </div>
                            <div className="exam-table">
                                <div className="exam-catagory">
                                    <b>AL</b> Edexcel / Cambridge / OCR <b>Pure Math</b>
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
                                        Michelle (2021)
                                    </div>
                                    <div className={`exam-row ${setExamRow(2, 7)} exam-row-highlight`}>
                                        Bill (2021)
                                    </div>
                                    <div className={`exam-row ${setExamRow(3, 7)}`}>
                                        Bill (2023)
                                    </div>
                                    <div className={`exam-row ${setExamRow(2, 6)}`}>
                                        Quintin (2023)
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

export default ALevel;