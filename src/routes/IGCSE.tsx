import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

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
                        IGCSE (Year 10-11)
                    </div>
                </div>
            </div>
            <div className="up-down-column background-purple">
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
                                    2014 - 2023 <b>Past papers questions</b> sorted by topic
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
                                    <div>F</div>
                                    <div>E</div>
                                    <div>D</div>
                                    <div>C</div>
                                    <div>B</div>
                                    <div>A</div>
                                    <div>A*</div>
                                </div>
                                <div className="exam-grid-numbers">
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                    <div>8</div>
                                    <div>9</div>
                                </div>
                                <div className="exam-grid">
                                    <div
                                        className={`exam-row ${setExamRow(5, 7)} exam-row-highlight ${hovered == 'exr-1-1' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-1')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1&nbsp;<span>student</span><div>&#128100;</div>
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-1' ? 'hovered' : ''}`}>
                                        Emily Lau (2018)&nbsp;<b>[in 2 months]</b>
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(5, 6)} ${hovered == 'exr-1-2' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-2')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1&nbsp;<span>student</span><div>&#128100;</div>
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-2' ? 'hovered' : ''}`}>
                                        Jacky Nie (2022)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(4, 6)} ${hovered == 'exr-1-3' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-3')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1&nbsp;<span>student</span><div>&#128100;</div>
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-3' ? 'hovered' : ''}`}>
                                        James Chow (2022)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(3, 5)} ${hovered == 'exr-1-4' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-1-4')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1&nbsp;<span>student</span><div>&#128100;</div>
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-1-4' ? 'hovered' : ''}`}>
                                        Catherine Li (2021)
                                    </div>
                                </div>
                            </div>
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
                                <div className="exam-grid-numbers">
                                    <div>3</div>
                                    <div>4</div>
                                    <div>5</div>
                                    <div>6</div>
                                    <div>7</div>
                                    <div>8</div>
                                    <div>9</div>
                                </div>
                                <div className="exam-grid">
                                    <div
                                        className={`exam-row ${setExamRow(5, 7)} ${hovered == 'exr-2-1' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-1')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        4&nbsp;<span>students</span><div>&#128100;</div>
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-1' ? 'hovered' : ''}`}>
                                        Jacky Nie (2021), Catherine Li (2021), DongHao Zhang (2022), James Chow (2022)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(4, 6)} ${hovered == 'exr-2-2' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-2')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        3&nbsp;<span>students</span><div>&#128100;</div>
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-2' ? 'hovered' : ''}`}>
                                        Jessica Zhuo (2019), Ken Chen (2022), Evelyn Zhang (2023)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(2, 6)} ${hovered == 'exr-2-3' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-3')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        1&nbsp;<span>student</span><div>&#128100;</div>
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-3' ? 'hovered' : ''}`}>
                                        Gordon Lo (2023)
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(1, 6)} exam-row-highlight ${hovered == 'exr-2-4' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-4')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        2&nbsp;<span>students</span><div>&#128100;</div>
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-4' ? 'hovered' : ''}`}>
                                        Cissie Ching (2023), Kelly Li (2023)&nbsp;<b>[in 1 year]</b>
                                    </div>
                                    <div
                                        className={`exam-row ${setExamRow(3, 5)} ${hovered == 'exr-2-5' ? 'hovered' : ''}`}
                                        onMouseEnter={() => handleMouseEnter('exr-2-5')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        4&nbsp;<span>students</span><div>&#128100;</div>
                                    </div>
                                    <div className={`exam-row-description ${hovered == 'exr-2-5' ? 'hovered' : ''}`}>
                                        Kitty Lam (2018), Geaena Zhu (2019), Alice Yan (2019), Casey Chan (2023)
                                    </div>
                                </div>
                            </div>
                            <div className="signature-reviews-wrapper">
                                <div className="signature-reviews-box">
                                    <div className="reviews-description">
                                        我与Winson老师已然上了超过两年的课，从IGCSE到目前的A-Level。扪心自问，他的教导对我受益颇丰，我的数学成绩从原先的倒数，到名列前茅，皆归功于老师。
                                        使我始终选择Winson老师上课的最大的原因便是我能感受到老师对我的用心及冲劲，这是其他辅导老师难以给予的。Winson老师对于备课一向严谨，他用心制作笔记及题集，以此寻找最适合学生的学习方式。
                                        我相信老师在为学生备课花费的时间远比课时要多。因此，上课以来我最大的感触便是安心。我并不需要担忧最终拿不到好成绩，只需要上课时认真听，并闲时练习老师准备的题集及作业，便能有令人满意的成果，这点是我和朋友们的共同感受。
                                        Winson老师对学生的提问具有十足的耐心，即使讲了五次十次我都听不懂，他也能做到语气不改的重複解答哈哈哈，所以Winson老师对我们来说更像是战友和定心针，让我觉得数学也没那麽难学懂了 ^o^
                                    </div>
                                    <div className="reviews-name">
                                        Kelly Li (2023)
                                    </div>
                                </div>
                                <div className="signature-reviews-box">
                                    <div className="reviews-description">
                                        My impression of Mr. Siu over the years had never truly changed. He is a kind and reliable mentor who is the reason why I enjoy doing mathematics so much.
                                        Before I met him, mathematics was my worst subject and I remembered hating every second of it in class.
                                        But ever since year 9 when I went to him for tuition, things have significantly changed for the better as I made tremendous progress by learning his ways of tackling specific problems and putting in a lot of effort.
                                        Not only did I find a new sense of purpose in doing math, but I even began to enjoy it, all because of Mr. Siu’s unique way of teaching, which is learning the key concepts of each topic and applying this knowledge to past-paper questions.
                                        This is a very efficient way of learning and I really do appreciate having lessons with Mr. Siu.
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
            <Footer openForm={openForm}/>
        </div>
    );
}

export default IGCSE;