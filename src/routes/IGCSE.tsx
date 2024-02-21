import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import FixedFooter from './FixedFooter';
import RotList from './RotList';
import Exam from './Exam';

import igcseData from '../json/igcseData.json';

const IGCSE: React.FC = () => {
    const rotListContent = igcseData['3points'];

    const examContent = igcseData['exam'];

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
                        IGCSE <span>(Year 10-11)</span>
                    </div>
                </div>
            </div>
            <div className="up-down-column background-purple">
                <div className="up-down-container">
                    <div className="up-down-textdiv">
                        <RotList color={'shade-pink-1'} content={rotListContent} />
                    </div>
                </div>
            </div>
            <Exam exam={examContent}/>
            <Footer openForm={openForm}/>
            <FixedFooter openForm={openForm}/>
        </div>
    );
}

export default IGCSE;