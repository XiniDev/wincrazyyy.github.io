import React, { useEffect, useRef, useState } from 'react';
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

    const [tabActive, setTabActive] = useState([true, false]);

    const tabClick = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        e.stopPropagation();

        switch (index) {
            case 0:
                setTabActive(() => [true, false]);
                break;
            case 1:
                setTabActive(() => [false, true]);
                break;
            default:
                setTabActive(() => [true, false]);
                break;
        }

        (document.getElementsByClassName("info-tab")[0] as HTMLElement).style.height = ((document.getElementsByClassName("info-tab-grid")[index] as HTMLElement).offsetHeight + 75) + "px";
    };

    const setExamRow = (scoreStart: number, scoreEnd: number) => {
        const startClass = 'exam-row-start-' + scoreStart;
        const endClass = 'exam-row-end-' + (scoreEnd + 1);

        const finalClass = startClass + ' ' + endClass;

        return finalClass;
    };

    useEffect(() => {
        const handleResize = () => {
            const index = (document.getElementsByClassName("info-tab-titles-wrapper")[0].firstChild as HTMLElement).className.includes("1") ? 0 : 1;
            (document.getElementsByClassName("info-tab")[0] as HTMLElement).style.height = ((document.getElementsByClassName("info-tab-grid")[index] as HTMLElement).offsetHeight + 75) + "px";
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="page">
            <Header/>
            <div className="syllabus-intro">
                <div className="syllabus-intro-container">
                    <div className="syllabus-intro-title">
                        IBDP (Year 12-13)
                    </div>
                </div>
            </div>
            <div className="up-down-column">
                <div className="up-down-background-banner background-blue"></div>
                <div className="up-down-container">
                    <div className="up-down-textdiv">
                        <div className="rotlist-wrapper">
                            <div
                                className={`rotlist-point ${hovered == 'co-dsc-1' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-1')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`rotlist-point-shade shade-blue-1 ${hovered == 'co-dsc-1' ? 'hovered' : ''}`}></div>
                                <div className={`rotlist-point-text ${hovered == 'co-dsc-1' ? 'hovered' : ''}`}>
                                    <b>Past papers questions</b> sorted by topic
                                </div>
                            </div>
                            <div
                                className={`rotlist-point ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-2')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`rotlist-point-shade shade-blue-1 ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}></div>
                                <div className={`rotlist-point-text ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}>
                                    One AASL student improved from <b>Grade 3 to 7 in 1.5 months</b>
                                </div>
                            </div>
                            <div
                                className={`rotlist-point ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-3')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`rotlist-point-shade shade-blue-1 ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}></div>
                                <div className={`rotlist-point-text ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}>
                                    Over 50% students achieved <b>Grade 7</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ibdp-profile">
                <div className="ibdp-profile-container">
                    <div className="ibdp-profile-title">
                        <span>Internal Assessment (</span>IA<span>)</span> Guidance
                    </div>
                    <div className="ibdp-profile-textdiv">
                        <div className="ibdp-profile-description">
                            <div className="info-tabs-wrapper">
                                <div className="info-tab-titles-wrapper">
                                    <div className={`info-tab-title ${tabActive[0] ? 'tab1-active' : ''} ${tabActive[1] ? 'tab2-active' : ''}`}></div>
                                    <div
                                        className={`info-tab-title ${hovered == 'info-title-1' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('info-title-1')}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={(e) => tabClick(e, 0)}
                                    >
                                        <b>Lesson Structure</b>
                                    </div>
                                    <div
                                        className={`info-tab-title ${hovered == 'info-title-2' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('info-title-2')}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={(e) => tabClick(e, 1)}
                                    >
                                        <b>IA Topics</b>
                                    </div>
                                </div>
                                <div className="info-tab">
                                    <div className={`info-tab-text ${tabActive[0] ? 'active' : ''}`}>
                                        <div className="info-tab-grid info-tab-grid-0">
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-1-1' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-1-1')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <b>Customizes IA topics</b> to align with individual student interests
                                            </div>
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-1-2' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-1-2')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                Integrates knowledge <b>beyond standard curriculum</b> for enhanced grades
                                            </div>
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-1-3' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-1-3')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                Guides students to produce <b>high-quality, unique essays</b> efficiently within lesson time
                                            </div>
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-1-4' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-1-4')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                Achieved <b>successful outcomes for over 50 students</b> from 2020 to 2023
                                            </div>
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-1-5' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-1-5')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <b>Effectively boosts Predicted Grades</b> and makes a positive impression on teachers
                                            </div>
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-1-6' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-1-6')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <b>Minimized the need for extra work outside of lessons</b>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`info-tab-text ${tabActive[1] ? 'active' : ''}`}>
                                        <div className="info-tab-grid info-tab-grid-1">
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-2-1' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-2-1')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <b>Ancient Math in Modern Times</b>:<br></br>Uncover how modern techniques breathe new life into solving ancient mathematical puzzles
                                            </div>
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-2-2' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-2-2')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <b>Sports and Mathematics</b>:<br></br>Explore the intriguing relationship between athletic performance and mathematical principles, like optimizing sports equipment
                                            </div>
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-2-3' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-2-3')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <b>Environmental Math</b>:<br></br>Tackle environmental challenges and natural phenomena with insightful mathematical analysis
                                            </div>
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-2-4' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-2-4')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <b>Mathematics in Society</b>:<br></br>Explore socio-economic issues through mathematical methodologies, understanding the world in numbers
                                            </div>
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-2-5' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-2-5')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <b>Geometry in Everyday Life</b>:<br></br>Investigate common objects through a mathematical lens, revealing hidden geometrical wonders
                                            </div>
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-2-6' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-2-6')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <b>Artistic Math</b>:<br></br>Unleash creativity through mathematical patterns and designs, blending art with equations
                                            </div>
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-2-7' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-2-7')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <b>Astronomy and Mathematics</b>:<br></br>Delve into the celestial realm, using math to model the complex interactions of planets and stars
                                            </div>
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-2-8' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-2-8')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <b>Practical Problem-Solving</b>:<br></br>Apply math to everyday scenarios, from game strategies to efficient division of resources
                                            </div>
                                            <div
                                                className={`info-tab-grid-item ${hovered == 'itg-2-9' ? 'hovered' : ''}`}
                                                onMouseEnter={() => handleMouseEnter('itg-2-9')}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <b>Math in Engineering</b>:<br></br>From designing roller coasters to solving structural problems, discover the application of math in engineering
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="up-down">
                <div className="up-down-container">
                    <div className="up-down-title">
                        Grade<span>&nbsp;Improvements</span>&nbsp;Graph
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
                                    <div
                                        className={`exam-row ${setExamRow(7, 7)} ${hovered == 'exr-1-1' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-1')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        2 students
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-1' ? 'hovered' : ''}`}>
                                        Micky (2018), Mary (2022)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(6, 7)} ${hovered == 'exr-1-2' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-2')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        5 students
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-2' ? 'hovered' : ''}`}>
                                        Taylor (2019), Vera (2021), Ivy (2021), Cici (2022), Alice (2022)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(5, 7)} ${hovered == 'exr-1-3' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-3')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        4 students
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-3' ? 'hovered' : ''}`}>
                                        Janice (2021), Hebe (2021), Joy (2022), Ethan (2022)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(5, 6)} ${hovered == 'exr-1-4' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-4')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        2 students
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-4' ? 'hovered' : ''}`}>
                                        Evelyn (2018), Anthony (2019)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(3, 6)} exam-row-highlight ${hovered == 'exr-1-5' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-5')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        2 students
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-5' ? 'hovered' : ''}`}>
                                        Lucia (2018), Fiona (2022)&nbsp;<b>[both in 3 months]</b>
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(2, 6)} ${hovered == 'exr-1-6' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-6')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1 student
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-6' ? 'hovered' : ''}`}>
                                        Jasmine (2023)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(3, 5)} ${hovered == 'exr-1-7' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-7')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        2 students
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-7' ? 'hovered' : ''}`}>
                                        Kelly (2018), Owen (2021)&nbsp;<b>[both in 1 month]</b>
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(2, 5)} ${hovered == 'exr-1-8' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-8')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1 student
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-8' ? 'hovered' : ''}`}>
                                        Justin (2020), Judy (2021), ChungTin (2022)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(1, 4)} ${hovered == 'exr-1-9' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-9')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1 student
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-9' ? 'hovered' : ''}`}>
                                        Vivian (2018)&nbsp;<b>[in 5 months]</b>
                                    </div>
                                </div>
                            </div>
                            <div className="signature-reviews-wrapper">
                                <div className="signature-reviews-box">
                                    <div className="reviews-description">
                                        Winson is very familiar with the IB exam details, including all the past papers, questioning style, exam techniques, and key points. 
                                        Within only 3 months, with Winson's help, I successfully increased my Math HL grade from 3 to 6. He is an excellent tutor who perfectly knows how to design an appropriate learning plan. 
                                        Since I was desperate, I had no clue what to do with my disappointing grade, but Winson quickly spotted my weakness and trained me with past papers and assignments. 
                                        I started to understand the terms and key points through the practice. All I had to do was following his plan and finished the homework he gave me. When I followed his step, I saw my grade increased dramatically. 
                                        Me, myself, also had a deeper understanding during the practice. When I was taking my final IB exam, I felt familiar with many questions and thus felt confident. 
                                        Winson also provided his own notes, which was created based on his teaching experience. Those notes were extremely helpful. 
                                        Those notes helped with sorting and organizing all the necessary points, and I got the chance to learn quickly and systematically all of them by heart.
                                    </div>
                                    <div className="reviews-name">
                                        Lucia Zhu (2018)
                                    </div>
                                    <div className="reviews-uni">
                                        [The University of Hong Kong]
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
                                    <div
                                        className={`exam-row ${setExamRow(6, 7)} ${hovered == 'exr-2-1' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-1')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        3 students
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-1' ? 'hovered' : ''}`}>
                                        Jenny (2020), Kitty (2020), Rachael (2020)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(5, 7)} ${hovered == 'exr-2-2' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-2')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        3 students
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-2' ? 'hovered' : ''}`}>
                                        Chloe (2020), Alexandra (2022), Cassie (2023)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(3, 7)} exam-row-highlight ${hovered == 'exr-2-3' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-3')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1 student
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-3' ? 'hovered' : ''}`}>
                                        Sharon (2023)&nbsp;<b>[in 1.5 month]</b>
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(4, 6)} ${hovered == 'exr-2-4' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-4')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        3 students
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-4' ? 'hovered' : ''}`}>
                                        Aidan (2019), David (2020), Jasmine (2023)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(2, 5)} ${hovered == 'exr-2-5' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-5')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1 student
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-5' ? 'hovered' : ''}`}>
                                        Connie (2021)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(1, 4)} ${hovered == 'exr-2-6' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-6')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1 student
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-6' ? 'hovered' : ''}`}>
                                        Dora (2021)
                                    </div>
                                </div>
                            </div>
                            <div className="signature-reviews-wrapper">
                                <div className="signature-reviews-box">
                                    <div className="reviews-description">
                                        首先，Winson在IBDP课程的熟练度等等我就不多赘述了，可能是因为我曾就读的学校老师非常水的原因，所以非常需要一个老师帮我查漏补缺，不然我大考的时侯可能就得望着没做几道题的卷子无语凝噎、默默流泪了。
                                        我个人认为数学本身是实践大于理论、需要保持手感的一门科目，所以自己很适用于Winson让学生直接在课上实操Past Papers，并以Past Papers为例总结做题方法的教学方式；又鉴于我本人需要监督者推动学习的性格，课上安排的比对作业以及改错环节也让我更愿意在课后抽出时间学习个人并不喜欢的科目。
                                        虽然过程有些痛苦，但苦尽甘来，我在IBDP的最后阶段成功取得了满意的成绩。总体来说，很推荐正在suffer in math的IBer们尝试尝试Winson的课程~
                                    </div>
                                    <div className="reviews-name">
                                        Sharon Deng (2023)
                                    </div>
                                    <div className="reviews-uni">
                                        [The University of Hong Kong]
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

export default IBDP;