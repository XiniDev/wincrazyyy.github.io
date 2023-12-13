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
                        IGCSE (Year 10-11)
                    </div>
                </div>
            </div>
            <div className="up-down-column">
                <div className="up-down-background-banner background-purple"></div>
                <div className="up-down-container">
                    <div className="up-down-textdiv">
                        <div className="rotlist-wrapper">
                            <div
                                className={`rotlist-point ${hovered == 'co-dsc-1' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-1')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`rotlist-point-shade shade-pink-1 ${hovered == 'co-dsc-1' ? 'hovered' : ''}`}></div>
                                <div className={`rotlist-point-text ${hovered == 'co-dsc-1' ? 'hovered' : ''}`}>
                                    <b>Past papers questions</b> sorted by topic
                                </div>
                            </div>
                            <div
                                className={`rotlist-point ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-2')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`rotlist-point-shade shade-pink-1 ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}></div>
                                <div className={`rotlist-point-text ${hovered == 'co-dsc-2' ? 'hovered' : ''}`}>
                                    Two students improved from <b>Grade F to A in a year</b>
                                </div>
                            </div>
                            <div
                                className={`rotlist-point ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}
                                onMouseEnter={() => handleMouseEnter('co-dsc-3')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`rotlist-point-shade shade-pink-1 ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}></div>
                                <div className={`rotlist-point-text ${hovered == 'co-dsc-3' ? 'hovered' : ''}`}>
                                    All students achieved <b>Grade B or above</b>
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
                                    Cambridge <b>Additional Math</b> (0606), Edexcel <b>Further Math</b> (4PM0)
                                </div>
                                <div className="exam-grid-numbers">
                                    <div>F / 3</div>
                                    <div>E / 4</div>
                                    <div>D / 5</div>
                                    <div>C / 6</div>
                                    <div>B / 7</div>
                                    <div>A / 8</div>
                                    <div>A* / 9</div>
                                </div>
                                <div className="exam-grid">
                                    <div
                                        className={`exam-row ${setExamRow(5, 7)} exam-row-highlight ${hovered == 'exr-1-1' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-1')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1 student
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-1' ? 'hovered' : ''}`}>
                                        Emily (2018)&nbsp;<b>[in 2 months]</b>
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(5, 6)} ${hovered == 'exr-1-2' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-2')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1 student
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-2' ? 'hovered' : ''}`}>
                                        Jacky (2022)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(4, 6)} ${hovered == 'exr-1-3' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-3')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1 student
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-3' ? 'hovered' : ''}`}>
                                        James (2022)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(3, 5)} ${hovered == 'exr-1-4' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-4')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1 student
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-4' ? 'hovered' : ''}`}>
                                        Catherine (2021)
                                    </div>
                                </div>
                            </div>
                            <div className="exam-table">
                                <div className="exam-catagory">
                                    Cambridge <b>International Math</b> (0607), Cambridge <b>Math</b> (0580), Edexcel <b>Math</b> (4PM1):
                                </div>
                                <div className="exam-grid-numbers">
                                    <div>F / 3</div>
                                    <div>E / 4</div>
                                    <div>D / 5</div>
                                    <div>C / 6</div>
                                    <div>B / 7</div>
                                    <div>A / 8</div>
                                    <div>A* / 9</div>
                                </div>
                                <div className="exam-grid">
                                    <div
                                        className={`exam-row ${setExamRow(5, 7)} ${hovered == 'exr-2-1' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-1')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        4 students
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-1' ? 'hovered' : ''}`}>
                                        Jacky (2021), Catherine (2021), DongHao (2022), James (2022)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(4, 6)} ${hovered == 'exr-2-2' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-2')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        3 students
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-2' ? 'hovered' : ''}`}>
                                        Jessica (2019), Ken (2022), Evelyn (2023)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(2, 6)} ${hovered == 'exr-2-3' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-3')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1 student
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-3' ? 'hovered' : ''}`}>
                                        Gordon (2023)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(1, 6)} exam-row-highlight ${hovered == 'exr-2-4' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-4')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        2 students
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-4' ? 'hovered' : ''}`}>
                                        Cissie (2023), Kelly (2023)&nbsp;<b>[in 1 year]</b>
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(3, 5)} ${hovered == 'exr-2-5' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-5')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        4 students
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-5' ? 'hovered' : ''}`}>
                                        Kitty (2018), Geaena (2019), Alice (2019), Casey (2023)
                                    </div>
                                </div>
                            </div>
                            <div className="signature-reviews-wrapper">
                                <div className="signature-reviews-box">
                                    <div className="reviews-description">
                                        我已经和Winson老师上了接近三年的课了，从IGCSE到现在的A Level。
                                        很明显，这对我受用很大，我的成绩从原先的倒数得到了很大的提升。我会坚持上下去的最大的原因是我能感受到老师的用心和冲劲，这是我在其他老师上找不到的。
                                        Winson老师会很用心的备课，准备笔记题集，寻找最适合学生，更易懂的学习方式，在这上面花费的时间我相信远远比课时要多。这麽久以来我最大的感触就是安心，不需要担忧拿不到好成绩，只需要上补习时认真听，刷老师的题集，完成作业就能有很不错的成果，这点是我和朋友们的共同感受。
                                        老师是很有耐心的，即使讲了十次都听不懂也能做到语气不改的重複解答哈哈哈，所以Winson老师对我们来说更像是战友和数学学习中的定心针，让我觉得数学也没那麽难学懂了 ^o^
                                    </div>
                                    <div className="reviews-name">
                                        Kelly Li (2023)
                                    </div>
                                </div>
                                <div className="signature-reviews-box">
                                    <div className="reviews-description">
                                        My impression of Mr Siu over the years had never truly changed, he is a kind and reliable mentor who is the reason why I enjoy doing mathematics so much. 
                                        Before I met him, mathematics was my worst subject and I remember hating every second of it in class. 
                                        But ever since year 9 when I went to him for tuition, things have significantly changed for the better as I made tremendous progress by learning his ways of tackling specific problems and putting in a lot effort. 
                                        Not only did I found a new sense of purpose in doing maths but I even began to enjoy it, all because of Mr Siu's unique way of teaching, which is learning the key concepts of each topic and utilising it by doing a lot of past-paper questions. 
                                        I believe this is a very efficient way of learning and I really do appreciate having lessons with Mr Siu.
                                    </div>
                                    <div className="reviews-name">
                                        Gordon Lo (2023)
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