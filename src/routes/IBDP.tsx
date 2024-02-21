import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import FixedFooter from './FixedFooter';

import RotList from './RotList';
import IAProfile from './IAProfile';
import Exam from './Exam';
import StudentsFrom from './StudentsFrom';

import ibdpData from '../json/ibdpData.json';

const IBDP: React.FC = () => {
    // must be 3 items
    const rotListContent = ibdpData['3points'];

    // must be 6 items then 9 items
    const iaProfileContent = ibdpData['iaProfile'];

    // must be 2 categories, 7 numbers each row, review for 2 categories
    const examContent = ibdpData['exam'];

    const schools = ibdpData['schools'];

    const [formActive, setFormActive] = useState(false);

    const openForm = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setFormActive(true);
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
            <Header formActive={formActive} setFormActive={setFormActive}/>
            <div className="syllabus-intro">
                <div className="syllabus-intro-container">
                    <div className="syllabus-intro-title">
                        IBDP <span>(Year 12-13)</span>
                    </div>
                </div>
            </div>
            <div className="up-down-column background-blue">
                <div className="up-down-container">
                    <div className="up-down-textdiv">
                        <RotList color={'shade-blue-1'} content={rotListContent} />
                    </div>
                </div>
            </div>
            <IAProfile content={iaProfileContent} />
            <Exam exam={examContent}/>
            <StudentsFrom schools={schools}/>
            <Footer openForm={openForm}/>
            <FixedFooter openForm={openForm}/>
        </div>
    );
}

export default IBDP;