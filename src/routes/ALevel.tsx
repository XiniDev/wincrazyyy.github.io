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
                        AS & A Level (Year 12-13)
                    </div>
                </div>
            </div>
            <div className="up-down-column">
                <div className="up-down-background-banner background-orange"></div>
                <div className="up-down-container">
                    <div className="up-down-textdiv">
                        <div className="rotlist-wrapper">
                            {/* <div className="rotlist-point rotlist-empty"></div> */}
                            <div
                                className={`rotlist-point ${hovered == 'co-dsc-1' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-1')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`rotlist-point-shade shade-orange-2 ${hovered == 'co-dsc-1' ? 'hovered' : ''}`}></div>
                                <div className={`rotlist-point-text ${hovered == 'co-dsc-1' ? 'hovered' : ''}`}>
                                    <b>Past papers questions</b> sorted by topic
                                </div>
                            </div>
                            <div
                                className={`rotlist-point ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-2')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`rotlist-point-shade shade-orange-2 ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}></div>
                                <div className={`rotlist-point-text ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}>
                                    One student entered <b>University of Cambridge</b> with <b>double Math A*</b>
                                </div>
                            </div>
                            <div
                                className={`rotlist-point ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-3')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`rotlist-point-shade shade-orange-2 ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}></div>
                                <div className={`rotlist-point-text ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}>
                                    All students achieved <b>Grade A or A*</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="up-down">
                {/* <div className="up-down-background-large"></div> */}
                <div className="up-down-container">
                    <div className="up-down-title">
                        Grade<span>&nbsp;Improvements</span>&nbsp;Graph
                    </div>
                    <div className="up-down-textdiv">
                        <div className="exam-wrapper">
                            <div className="exam-table">
                                <div className="exam-catagory">
                                    <b>AL</b> Edexcel / Cambridge / AQA <b>Further Math</b>:
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
                                    <div className={`exam-row ${setExamRow(1, 7)} exam-row-highlight`}>
                                        <b>Bill (2021)</b>, Michelle (2021)
                                    </div>
                                </div>
                            </div>
                            <div className="signature-reviews-wrapper">
                                <div className="signature-reviews-box">
                                    <div className="reviews-description">
                                        本人由2018年開始跟Winson sir補數（IGCSE到GCE A-Level）, 我最後於2022年的考試在Maths與Further Maths都取得A*的佳績。而這亦歸功於Winson sir 的教導與指引。
                                        Winson sir的教學風格比較貼合本人的學習模式，他擅於令艱深乏味的內容變得有趣和易於理解。
                                        當我有任何疑問時他都會認真耐心解答直到我明白為止，所以我非常期待與享受每一堂課。他備課充足與對教學充滿熱誠，就算上課超時他都希望完成每堂課的目標與內容，最主要是令我學到新的知識。
                                        除此之外，Winson sir會在每堂課後安排書內練習與歷屆past papers中的相關題目幫助我鞏固知識。
                                        跟Winson sir 補習的幾年內做了大量的past paper, 所以我在考試前已有相當的實戰經驗，以及能預計大概的出題形式與方向。而在考試前溫書期間，阿sir會幫我整理好我之前做錯的所有題目並讓我重新做一次，令我更快知道需要加強補底的內容。
                                        他亦會親自示範做mock paper讓我知道答題技巧，與如何在marker手上取得所有分數。
                                        Winson sir是一位友善隨和的老師，同時亦像一位朋友。我非常感恩遇到這一位良師益友，伴我面對學習路上的困難與挑戰。
                                    </div>
                                    <div className="reviews-name">
                                        Bill Ting (2021)
                                    </div>
                                </div>
                            </div>
                            <div className="exam-table">
                                <div className="exam-catagory">
                                    <b>AL</b> Edexcel / Cambridge / OCR / AQA <b>Pure Math</b>
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
                                    <div className={`exam-row ${setExamRow(1, 7)} exam-row-highlight`}>
                                        <b>Bill (2021)</b>, DongHao (2023)
                                    </div>
                                    <div className={`exam-row ${setExamRow(1, 6)}`}>
                                        Quintin (2023)
                                    </div>
                                </div>
                            </div>
                            <div className="signature-reviews-wrapper">
                                <div className="signature-reviews-box">
                                    <div className="reviews-description">
                                        Winson was an incredibly helpful tutor who helped me achieve A*s for both IAL Maths and Further Maths. 
                                        He was always well prepared and gave heaps of past paper questions for practice after every lesson. 
                                        He's also an easy-going guy with a true passion in tutoring. Highly recommend him for exam prep!!
                                    </div>
                                    <div className="reviews-name">
                                        Michelle Chan (2021)
                                    </div>
                                </div>
                                <div className="signature-reviews-box">
                                    <div className="reviews-description">
                                        Winson老师的上课风格轻松无压力，且教书模式灵活变通，将複杂的题目简单化是老师的强项之一，独树一帜的拆题及解题步骤使我获益匪浅。
                                        为学生个人化定製的By Topic Past Paper可以大幅度且针对性地加强某一单元的熟练度，也提高了学生闲暇之馀的刷题效率。
                                        Winson老师是我在学习IGCSE时认识的，经过半年的上课，我的IGCSE Math从B提升到了A*，并在之后的一年时间助我获得了A Level Pure Math A*。
                                        直到现在，Winson老师正在全力帮助我在一年内学完A Level Further Math。
                                    </div>
                                    <div className="reviews-name">
                                        DongHao Zhang (2023)
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