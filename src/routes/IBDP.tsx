import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

import Winson_Icon_Square from '../images/winson-icon-square.png';
import Winson_Icon_Round from '../images/winson-icon-round.png';

const IBDP: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    }

    const handleMouseLeave = () => {
        setHovered(null);
    }

    // const [tabActive, setTabActive] = useState([true, false, false]);

    // const tabClick = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    //     e.stopPropagation();
    //     switch (index) {
    //         case 0:
    //             setTabActive(() => [true, false, false]);
    //             break;
    //         case 1:
    //             setTabActive(() => [false, true, false]);
    //             break;
    //         case 2:
    //             setTabActive(() => [false, false, true]);
    //             break;
    //         default:
    //             setTabActive(() => [true, false, false]);
    //             break;
    //     }
    // };

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
                        International Baccalaureate<br></br>Diploma Programme (IBDP):
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
                                    Over 50% of IBDP students scored Grade 7
                                </div>
                                <div className={`list-point-shade list-shade-rev ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}></div>
                            </div>
                            <div
                                className={`list-point ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-3')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`list-point-text list-text-rev ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}>
                                    Excellent quality of Internal Assessment (IA) guidance
                                </div>
                                <div className={`list-point-shade list-shade-rev ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}></div>
                            </div>
                            {/* <div
                                className={`list-point ${hovered == 'co-dsc-5' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-5')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`list-point-text list-text-rev ${hovered == 'co-dsc-5' ? 'hovered' : ''}`}>
                                    Two HL students improved from Grade 3 to Grade 6 in three months only.
                                </div>
                                <div className={`list-point-shade list-shade-rev ${hovered == 'co-dsc-5' ? 'hovered' : ''}`}></div>
                            </div> */}
                        </div>
                    </div>
                    <div className="two-column-image">
                        <img src={Winson_Icon_Square}/>
                    </div>
                </div>
            </div>
            {/* <div className="ibdp-profile">
                <div className="ibdp-profile-background"></div>
                <div className="ibdp-profile-container">
                    <div className="ibdp-profile-title">
                        Internal Assessment (IA) Specialist
                    </div>
                    <div className="ibdp-profile-textdiv">
                        <div className={`ibdp-profile-panel ${hovered == 'profile-panel' ? 'hovered' : ''}`}
                            onMouseEnter={() => handleMouseEnter('profile-panel')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="ibdp-profile-panel-image">
                                <img src={Winson_Icon_Round}/>
                            </div>
                            <div className="ibdp-profile-panel-title">
                                IA Specialist
                            </div>
                            <div className="ibdp-profile-panel-name">
                                Wilson Lee
                            </div>
                        </div>
                        <div className="ibdp-profile-description">
                            <div className="info-tabs-wrapper">
                                <div className="info-tab-titles-wrapper">
                                    <div className={`info-tab-title ${tabActive[0] ? 'tab1-active' : ''} ${tabActive[1] ? 'tab2-active' : ''} ${tabActive[2] ? 'tab3-active' : ''}`}></div>
                                    <div
                                        className={`info-tab-title ${hovered == 'info-title-1' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('info-title-1')}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={(e) => tabClick(e, 0)}
                                    >
                                        <b>Education</b>
                                    </div>
                                    <div
                                        className={`info-tab-title ${hovered == 'info-title-2' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('info-title-2')}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={(e) => tabClick(e, 1)}
                                    >
                                        <b>Lesson Structure</b>
                                    </div>
                                    <div
                                        className={`info-tab-title ${hovered == 'info-title-3' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('info-title-3')}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={(e) => tabClick(e, 2)}
                                    >
                                        <b>Exemplary IAs</b>
                                    </div>
                                </div>
                                <div className="info-tab">
                                    <div className={`info-tab-text  ${tabActive[0] ? 'active' : ''}`}>
                                        <ul>
                                            <li>I need to translate chinese *insert angry face*</li>
                                            <li>Lorem is not Ipusm did you know?</li>
                                            <li>Lorem is not Ipusm did you know?</li>
                                            <li>Lorem is not Ipusm did you know?</li>
                                            <li>Lorem is not Ipusm did you know?</li>
                                            <li>Lorem is not Ipusm did you know?</li>
                                        </ul>
                                    </div>
                                    <div className={`info-tab-text  ${tabActive[1] ? 'active' : ''}`}>
                                        <ul>
                                            <li>Lorem is very mvch like Ipusm so people mix them up</li>
                                            <li>Lorem is very muoh like Ipusm so people mix them up</li>
                                            <li>Lorem is very much like Ipusm sa people mix them up</li>
                                            <li>Lorem is uery much like Ipusm so poople mix tham up</li>
                                            <li>Lorem is very much like Ipusw so people mix them up</li>
                                            <li>Lorem is very much like Ipnsm so people mix them vp</li>
                                        </ul>
                                    </div>
                                    <div className={`info-tab-text  ${tabActive[2] ? 'active' : ''}`}>
                                        <ul>
                                            <li>Dividing a Pizza into Three Equal Amount of Piece in Two Cuts</li>
                                            <li>The Non-Existence of Acceleration on the Rise in Sea Level</li>
                                            <li>Investigating the Surface Area and the Volume of an Egg</li>
                                            <li>For Richer, For Poorer: Methods to Measure Income Inequality</li>
                                            <li>How to Create Patterns Using Mathematics? Mathematics Behind Spirographs</li>
                                            <li>Annual Light Intensity Change between Planets and Stars using the Model of the Earth and the Sun</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="up-down">
                {/* <div className="up-down-background-large"></div> */}
                <div className="up-down-container">
                    <div className="up-down-title">
                        Exam Grade Improvements:
                    </div>
                    <div className="up-down-textdiv">
                        <div className="exam-wrapper">
                            <div className="exam-table">
                                <div className="exam-catagory">
                                    Math <b>HL / AAHL / AIHL</b>:
                                </div>
                                <div className="exam-grid-numbers">
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                </div>
                                <div className="exam-grid">
                                    <div className={`exam-row ${setExamRow(6, 7)}`}>
                                        Micky (2018), Taylor (2019), Vera (2021), Mary (2022), Cici (2022), Alice (2022)
                                    </div>
                                    <div className={`exam-row ${setExamRow(5, 7)}`}>
                                        Janice (2021), Ivy (2021), Hebe (2021), Joy (2022), Ethan (2022)
                                    </div>
                                    <div className={`exam-row ${setExamRow(5, 6)}`}>
                                        Evelyn (2018), Anthony (2019), Jasmine (2023)
                                    </div>
                                    <div className={`exam-row ${setExamRow(3, 6)} exam-row-highlight`}>
                                        Lucia (2018), Fiona (2022) <b>[both in 3 months only]</b>
                                    </div>
                                    <div className={`exam-row ${setExamRow(2, 5)}`}>
                                        Kelly (2018), Justin (2020), Judy (2021), Owen (2021), Chan (2022)
                                    </div>
                                    <div className={`exam-row ${setExamRow(1, 4)}`}>
                                        Vivian (2018)
                                    </div>
                                </div>
                            </div>
                            <div className="exam-table">
                                <div className="exam-catagory">
                                    Math <b>SL / AASL / AISL</b>:
                                </div>
                                <div className="exam-grid-numbers">
                                    <div>1</div>
                                    <div>2</div>
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                </div>
                                <div className="exam-grid">
                                    <div className={`exam-row ${setExamRow(6, 7)}`}>
                                        Jenny (2020), Kitty (2020), Rachael (2020)
                                    </div>
                                    <div className={`exam-row ${setExamRow(5, 7)}`}>
                                        Chloe (2020), Alexandra (2022), Cassie (2023)
                                    </div>
                                    <div className={`exam-row ${setExamRow(3, 7)} exam-row-highlight`}>
                                        Sharon (2023) <b>[in 1.5 month only]</b>
                                    </div>
                                    <div className={`exam-row ${setExamRow(4, 6)}`}>
                                        Aidan (2019), David (2020), Jasmine (2023)
                                    </div>
                                    <div className={`exam-row ${setExamRow(2, 5)}`}>
                                        Connie (2021)
                                    </div>
                                    <div className={`exam-row ${setExamRow(1, 4)}`}>
                                        Dora (2021)
                                    </div>
                                </div>
                            </div>
                            {/* <ul>
                                <ul>
                                    <li>From 6 to 7: Micky (2018), Taylor (2019), Vera (2021), Mary (2022), Cici (2022), Alice (2022)</li>
                                    <li>From 5 to 7: Janice (2021), Ivy (2021), Hebe (2021), Joy (2022), Ethan (2022)</li>
                                    <li>From 5 to 6: Evelyn (2018), Anthony (2019), Jasmine (2023)</li>
                                    <li>From 3 to 6: Lucia (2018), Fiona (2022) <b>[both in 3 months only]</b></li>
                                    <li>From 2 to 5: Kelly (2018), Justin (2020), Judy (2021), Owen (2021), Chan (2022)</li>
                                    <li>From 1 to 4: Vivian (2018)</li>
                                </ul>
                                <ul>
                                    <li>From 6 to 7: Jenny (2020), Kitty (2020), Rachael (2020)</li>
                                    <li>From 5 to 7: Chloe (2020), Alexandra (2022), Cassie (2023)</li>
                                    <li>From 3 to 7: Sharon (2023) <b>[in 1.5 month only]</b></li>
                                    <li>From 4 to 6: Aidan (2019), David (2020), Jasmine (2023)</li>
                                    <li>From 2 to 5: Connie (2021)</li>
                                    <li>From 1 to 4: Dora (2021)</li>
                                </ul>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default IBDP;