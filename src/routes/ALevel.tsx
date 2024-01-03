import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

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

    const [formActive, setFormActive] = useState(false);

    const openForm = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setFormActive(true);
    };

    return (
        <div className="page">
            <Header formActive={formActive} setFormActive={setFormActive}/>
            <div className="syllabus-intro">
                <div className="syllabus-intro-container">
                    <div className="syllabus-intro-title">
                        AS & A-Level (Year 12-13)
                    </div>
                </div>
            </div>
            <div className="up-down-column background-orange">
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
                                    2008 - 2023 <b>Past papers questions</b> sorted by topic
                                </div>
                            </div>
                            <div
                                className={`rotlist-point ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-2')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`rotlist-point-shade shade-orange-2 ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}></div>
                                <div className={`rotlist-point-text ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}>
                                    One student entered <b>University of Cambridge</b> with <b>two A*s in Math</b>
                                </div>
                            </div>
                            <div
                                className={`rotlist-point ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-3')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`rotlist-point-shade shade-orange-2 ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}></div>
                                <div className={`rotlist-point-text ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}>
                                    All students achieved <b>Grade A* or A</b>
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
                                    Edexcel (IAL) / Cambridge (9231) / AQA (7367) <b>Further Math</b>:
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
                                        <b>Bill Ting (2021)</b>, Michelle Chan (2021)
                                    </div>
                                </div>
                            </div>
                            <div className="signature-reviews-wrapper">
                                <div className="signature-reviews-box">
                                    <div className="reviews-description">
                                        本人從2018年開始跟Winson老師補習IGCSE和A-Level數學，最終於2022年A-Level考試Math與Further Math斬獲 A*的佳績。
                                        毫不吝嗇地說，如此成就皆歸功於他的教導與指引。Winson老師的教學風格較為契合本人的學習模式，他擅長讓艱深乏味的內容變得有趣且易於理解。對於我的任何疑問，老師都會耐心解答，直至我明白。
                                        因此，我非常期待並享受與Winson老師的每一堂課。老師對每一堂課都有著十足的規劃及準備，且帶著熱忱的態度進行教學。為了完成課堂內容，老師會自願犧牲個人時間繼續教導，因此上課超時是常有的事。
                                        即使在課後，老師會精心挑選相關的題目供我練習及鞏固，如課本上的題目，又或是歷屆Past Paper等。老師也會整理專屬於我的錯題本，並從旁協助我再次攻克難題，借此我也能迅速鞏固自己的不足。
                                        對於歷屆試卷的題目，老師通常會先親自解題，並讓我觀察他的解題思路及了解該如何達到評分標準中的要求。如此，我便能在考試前積累大量的實戰經驗，更能在一定程度上基於出題模式預測考題。
                                        Winson是一位友善隨和的老師，同時亦像一位朋友，我非常感恩遇到這一位良師益友，陪伴我面對學習路上的困難與挑戰。
                                    </div>
                                    <div className="reviews-name">
                                        Bill Ting (2021)
                                    </div>
                                    <div className="reviews-uni">
                                        [University of Cambridge]
                                    </div>
                                </div>
                            </div>
                            <div className="exam-table">
                                <div className="exam-catagory">
                                    Edexcel (IAL, AL) / Cambridge (9709) / AQA (7357) / OCR (H240) <b>Math</b>:
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
                                        Michelle Chan (2021)
                                    </div>
                                    <div className={`exam-row ${setExamRow(1, 7)} exam-row-highlight`}>
                                        <b>Bill Ting (2021)</b>, DongHao Zhang (2023)
                                    </div>
                                    <div className={`exam-row ${setExamRow(1, 6)}`}>
                                        Quintin Leung (2023)
                                    </div>
                                </div>
                            </div>
                            <div className="signature-reviews-wrapper">
                                <div className="signature-reviews-box">
                                    <div className="reviews-description">
                                        Winson was an incredibly helpful tutor who helped me achieve A*s for both IAL Math and Further Math.
                                        He was always well prepared and gave heaps of past paper questions for practice after every lesson.
                                        He’s also an easy-going guy with a true passion in tutoring. Highly recommend him for exam prep!!
                                    </div>
                                    <div className="reviews-name">
                                        Michelle Chan (2021)
                                    </div>
                                    <div className="reviews-uni">
                                        [University of Melbourne]
                                    </div>
                                </div>
                                <div className="signature-reviews-box">
                                    <div className="reviews-description">
                                        Winson老师的上课风格轻松无压力，且教书模式灵活变通，将複杂的题目简单化是老师的强项之一，独树一帜的拆题及解题步骤使我获益匪浅。为学生个人化定製的By Topic Past Paper可以大幅度且针对性地加强某一单元的熟练度，也提高了学生闲暇之馀的刷题效率。
                                        Winson老师是我在学习IGCSE时认识的，经过半年的上课，我的IGCSE Math从B提升到了A*，并在之后的一年时间助我获得了A-Level Pure Math A*。
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
            <Footer openForm={openForm}/>
        </div>
    );
}

export default ALevel;