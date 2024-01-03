import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Counter from './Counter';
import ShelfBlock from './ShelfBanner';
import Carousel from './Carousel';
import Pricing from './Pricing';

import Winson_Icon_Large_Nobkg from '../images/winson-icon-large-nobkg.png';

import Shelf_Image from '../images/shelf-image.png';

const Homepage: React.FC = () => {
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

    const [formActive, setFormActive] = useState(false);

    const openForm = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setFormActive(true);
    };

    const [fadeDivs, setFadeDivs] = useState([false, false, false]);

    const [hideDivs, setHideDivs] = useState(false);

    useEffect(() => {
        const timeout1 = setTimeout(() => {
            setFadeDivs((prev) => [true, prev[1], prev[2]]);
        }, 300);
        const timeout2 = setTimeout(() => {
            setFadeDivs((prev) => [prev[0], true, prev[2]]);
        }, 1200);
        const timeout3 = setTimeout(() => {
            setFadeDivs((prev) => [prev[0], prev[1], true]);
        }, 2000);
      
        return () => {
            clearTimeout(timeout1);
            clearTimeout(timeout2);
            clearTimeout(timeout3);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const vh = window.innerHeight;
            const threshold = vh / 2;

            if (window.scrollY < threshold) {
                setHideDivs(false);
            } else {
                setHideDivs(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="homepage">
            <Header formActive={formActive} setFormActive={setFormActive}/>
            <div className="homepage-intro">
                <div className="homepage-bkg"></div>
                <div className={`homepage-intro-background ${fadeDivs[2] ? 'homepage-fade-bkg visible' : 'homepage-fade-bkg'}`}></div>
                <div className="homepage-intro-container">
                    <div className="homepage-intro-textdiv">
                        <div className={`homepage-intro-img ${fadeDivs[0] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                            <img src={Winson_Icon_Large_Nobkg}></img>
                        </div>
                        <Counter fadeDiv={fadeDivs[0]} hideDiv={hideDivs} />
                        <div className={`homepage-intro-title ${fadeDivs[0] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                            <span>W</span>INSON <span>S</span>IU
                        </div>
                        <div className={`homepage-intro-subtitle ${fadeDivs[1] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
                            <hr/>
                            Professional Online Math Tutor
                            <hr/>
                        </div>
                        <div
                            className={`homepage-intro-booknow ${hovered == 'hm-int-bn' ? 'hovered' : ''} ${fadeDivs[2] ? (hideDivs ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}
                            onMouseEnter={() => handleMouseEnter('hm-int-bn')}
                            onMouseLeave={handleMouseLeave}
                            onClick={(e) => openForm(e)}
                        >
                            Book a Lesson!
                        </div>
                    </div>
                </div>
            </div>
            <div className="body-container">
                <ShelfBlock/>
            </div>
            <div className="up-down">
                <div className="up-down-background"></div>
                <div className="up-down-container">
                    <Carousel openForm={openForm}/>
                    <div className="up-down-space"></div>
                    <Pricing openForm={openForm}/>
                    <div className="up-down-space"></div>
                    <div className="reviews">
                        <div className="reviews-wrapper">
                            <div className="reviews-box-wrapper">
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Mr. Siu is hands down the best math teacher I've come across. His teaching style is crystal clear, with easy-to-follow structures and a stash of super relevant questions.
                                        What makes him truly exceptional is his strong sense of responsibility and genuine passion for tutoring. He gets a real kick out of seeing his students improve, and that enthusiasm shines through in his teaching.
                                        Thanks to his guidance, my journey through IBDP Math AAHL has seen significant improvement. I thoroughly enjoy his tutoring sessions every week.
                                    </div>
                                    <div className="reviews-name">
                                        Jasmine Yang (2023)
                                    </div>
                                    <div className="reviews-uni">
                                        [The University of Edinburgh]
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        I had the great fortune of being tutored by Winson during my IBDP years, and I can confidently say that he played a pivotal role in my success in Math AAHL. Winson's passion for tutoring is evident in every session.
                                        What sets him apart is his unique approach to teaching, offering a flexibility that goes beyond the confines of traditional classroom learning.
                                        He possesses an innate ability to pinpoint specific areas where I needed assistance, tailoring his instruction to address my individual challenges.
                                        Winson's teaching materials are exceptional; his notes are clear, concise, and remarkably easy to grasp. One standout aspect of his support was the wealth of past paper questions he provided, meticulously sorted by topics and years.
                                        This not only allowed for comprehensive practice but also facilitated a targeted focus on weaker areas. Thanks to Winson's dedication and effective teaching methods, I not only gained a deeper understanding of the subject but also achieved a stellar 7 in Math AAHL.
                                        I am truly grateful for his guidance and highly recommend him to anyone seeking a math tutor who goes above and beyond to ensure success.
                                    </div>
                                    <div className="reviews-name">
                                        Alice Gao (2022)
                                    </div>
                                    <div className="reviews-uni">
                                        [University College London]
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        I’d say that Winson is the best math tutor I’ve ever had. I had him as my tutor for the last year of IBDP. Winson’s teaching style is based on experience: his insistence on learning by practicing past papers is sensible and practical.
                                        He provides specific past paper questions for each topic separately, and his notes are very useful for final exam revisions. Winson is very patient and experienced.
                                        His assignments are based on each student’s ability and needs. In the end, Winson successfully helped me reach a grade 7 for Math AAHL. Definitely a good choice to find him for math tutorials!!
                                    </div>
                                    <div className="reviews-name">
                                        Joy Angela Sun (2022)
                                    </div>
                                    <div className="reviews-uni">
                                        [The Chinese University of Hong Kong]
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson was the first and only Math tutor who supervised me throughout my IBDP. We started regular tuition in 2019.
                                        He is patient, organised and supportive, and his notes and revision material are of great help in exam conditions! With his help, I achieved a grade 7 in Math AAHL.
                                    </div>
                                    <div className="reviews-name">
                                        Vera Jing (2021)
                                    </div>
                                    <div className="reviews-uni">
                                        [University College London]
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Explanations are concise and easy to understand, with loads of practice questions in which he will guide you through every bit you don't understand.
                                        Very uplifting and kind, will answer your questions outside of lesson time. 🥺
                                        100% will recommend, especially with how rigid some school math teachers are with their teaching methods. 👌✨ Couldn't have achieved a grade 7 without him.
                                    </div>
                                    <div className="reviews-name">
                                        Kitty Lam (2020)
                                    </div>
                                    <div className="reviews-uni">
                                        [Loughborough University]
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson老师的教学方式以习题练习为主，不断加强记忆深入了解知识点，在课后也会有相应的笔记供学生复习。
                                        老师一直很用心，包括备课/考前准备等，性格也很热情，教课不死板而且认真，帮助我在IGCSE阶段从F到A得到了提升和飞跃，其中老师量身定做了往年习题易错题以及薄弱知识点单元等，让我得到了很大的帮助。
                                    </div>
                                    <div className="reviews-name">
                                        Cissie Ching (2023)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Finding Winson as my IBDP Math tutor was an incredible stroke of luck! He truly saved me from my struggles with IBDP Math HL, where I couldn't even pass the exam. Thanks to Winson's invaluable support, I achieved a grade 4, just a hair's breadth away from a grade 5.
                                        I am immensely grateful to him for his exceptional teaching style, which is both enjoyable and easily understandable.
                                        His fluency in Mandarin, English, and Cantonese was a tremendous asset, as it allowed me to learn in the language I felt most comfortable with. I would recommend him to everyone who is currently suffering from IBDP Math!
                                    </div>
                                    <div className="reviews-name">
                                        Vivian Chen (2018)
                                    </div>
                                    <div className="reviews-uni">
                                        [Istituto Marangoni London]
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson helped me a lot in my IBDP mathematics journey. My grades improved from 4 to 7 for exams, which was enough to get me into HKU Dentistry.
                                        His teaching style and the “by topic” past paper question bank is highly recommended for those who are seeking to improve their grades and succeed in IBDP mathematics.
                                    </div>
                                    <div className="reviews-name">
                                        David Zhang (2020)
                                    </div>
                                    <div className="reviews-uni">
                                        [The University of Hong Kong]
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson's tutoring helped me immensely during the period of the Covid online class, which enabled me to obtain a Predicted Grade 7 in IBDP Math AAHL and dreamed university offers.
                                        Especially for someone who wasn't exactly an active learner, I was able to follow his path and finish all the assignment/past papers.
                                        The lesson notes he provided with comprehensively detailed formula and key words have been a major source for revision material in every quiz, test and IBDP Exam  &gt;&lt;
                                    </div>
                                    <div className="reviews-name">
                                        Judy Wei (2021)
                                    </div>
                                    <div className="reviews-uni">
                                        [The Chinese University of Hong Kong]
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        我认为Winson教学方法简洁明了，令人头疼且复杂的数学概念，通过老师的讲解变得十分易于理解。我的疑问都得到了耐心的解答，并且给予了我很多实用的解题技巧及策略。
                                        通过他的辅导，我在数学领域的进步与日俱增，并最终在考试中取得了优异的成绩。我非常感激他的帮助，他是一位十分出色的数学老师！
                                    </div>
                                    <div className="reviews-name">
                                        Coco Cheng (2024)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson has a unique teaching approach that I greatly admire. During his classes, he presents topics in his own distinctive way, which differs significantly from the school's standard teaching methods.
                                        Additionally, Winson diligently compiles valuable past paper questions for practice before and after each class, a task that often takes him several days to complete.
                                        Working closely with Winson has been instrumental in helping me maintain an A* throughout my A-Level studies.
                                    </div>
                                    <div className="reviews-name">
                                        Ken Chen (2024)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        I have been taught by Winson for 5 months. My result has been improved by 2 grades. His teaching always stays close to the syllabus, and he is always free to discuss questions with you after the lesson.
                                        His notes are one of the best tools to achieve your target grade. They are full of previous past paper questions that are commonly asked. Moreover, Winson is a very patient and responsible teacher.
                                        I truly recommend him to every student who are struggling with mathematics right now.
                                    </div>
                                    <div className="reviews-name">
                                        Casey Chan (2023)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson has helped me improve my math in just one year. He gives me many past papers to do on different topics, and it has improved my math scores drastically.
                                        During our lessons, we go through many exercises and questions and I am able to learn a lot. I now have more confidence in math thanks to Winson.
                                    </div>
                                    <div className="reviews-name">
                                        Nicole Li (2024)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson老师非常厉害！老师在我整个IBDP期间为我提供了很多帮助。通过他的数学补课，我得以从最初难堪的分数，提升至我个人十分满意的成绩！
                                        在往后的大学课程中，老师也都不遗余力地辅导我拿到了很好的成绩！IBDP Math不管是SL或者HL都可以放心的交给Winson老师辅导！🤩🤩
                                    </div>
                                    <div className="reviews-name">
                                        Connie Feng (2021)
                                    </div>
                                    <div className="reviews-uni">
                                        [The Hong Kong University of Science and Technology]
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson is a great Math Tutor who is able to break down concepts easily and apply his learning into practical exam questions.
                                        He carefully procures exam questions in a neatly formatted workbook full of practice questions for every lesson.
                                        I personally find his way of teaching to be passionate and careful, and as a result, was able to do my best in IBDP Math SL.
                                    </div>
                                    <div className="reviews-name">
                                        Aidan Cheung (2019)
                                    </div>
                                    <div className="reviews-uni">
                                        [The University of Warwick]
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson is a patient tutor and is well prepared for every lesson which maximises the time spent in class.
                                        He provides a lot of past paper questions and different tips that has well equipped me for my IBDP exams.
                                        I got a 6 in Math AISL and couldn’t have done it without him.
                                    </div>
                                    <div className="reviews-name">
                                        Jasmine Hung (2023)
                                    </div>
                                    <div className="reviews-uni">
                                        [University of Westminster]
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        I took Winson’s class for over a year and his teaching is definitely one of the best!
                                        His classes were super worth it and certainly enhanced my math performance in high school.
                                        Highly recommended!
                                    </div>
                                    <div className="reviews-name">
                                        Kahlina Lam (2020)
                                    </div>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-description">
                                        Winson老师是一位满怀责任心的数学老师。他会在课堂中先带领我学习及总结单元知识，接下来将挑选合适的题目以供我练习。
                                        如果期间有任何不解，老师都会针对性地进行详细的讲解。一节课中70%时间学生做题；30%时间老师讲课，这是Winson老师独特的教学方式。
                                        Winson老师亦会在课后为我整理好Past Paper Booklet，以便我课后进行复习及巩固。在老师的帮助下，我每次的数学考试皆取得了6-7的分数。
                                    </div>
                                    <div className="reviews-name">
                                        Anonymous (2023)
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
            <Footer openForm={openForm}/>
        </div>
    );
}

export default Homepage;