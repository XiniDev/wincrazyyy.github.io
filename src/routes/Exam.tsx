import React, { useEffect, useState } from 'react';
import { formatString } from './Utils';

export type ExamRowType = {
    gradeFrom: string;
    gradeTo: string;
    names: string[];
    highlight: boolean;
    remarks: string;
};

export type SignatureReviewType = {
    description: string;
    name: string;
    university: string;
};

export type ExamType = {
    title: string;
    examCategories: string[];
    examGridNumbers: string[][];
    examRow: ExamRowType[][];
    signatureReview: SignatureReviewType[][];
};

type ExamProp = {
    exam: ExamType;
}

const Exam: React.FC<ExamProp> = ({ exam }) => {
    const title = exam.title;
    const examCategories = exam.examCategories;
    const examGridNumbers = exam.examGridNumbers;
    const examRow = exam.examRow;
    const signatureReview = exam.signatureReview;

    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    const setExamRow = (scoreStart: number, scoreEnd: number) => {
        const startClass = 'exam-row-start-' + scoreStart;
        const endClass = 'exam-row-end-' + (scoreEnd + 1);

        const finalClass = startClass + ' ' + endClass;

        return finalClass;
    };

    const handleExamTable = (index: number) => {
        const htmlExamCategories = [];
        const htmlExamGridNumbers = [];
        const htmlExamGrid = [];

        // exam categories
        htmlExamCategories.push(
            <div className="exam-catagory">
                {formatString(examCategories[index])}
            </div>
        );

        // exam grid numbers
        for (let i = 0; i < examGridNumbers.length; i++)
        {
            const htmlNumbers = [];
            for (let j = 0; j < examGridNumbers[i].length; j++)
            {
                htmlNumbers.push(
                    <div>
                        {examGridNumbers[i][j]}
                    </div>
                );
            }
            htmlExamGridNumbers.push(
                <div className="exam-grid-numbers">
                    {htmlNumbers}
                </div>
            );
        }

        // exam grid
        const htmlExamRow = [];
        for (let j = 0; j < examRow[index].length; j++) {
            const hoveredID = 'exr-' + (index + 1) + (j + 1);

            const gradeFrom = examGridNumbers[0].indexOf(examRow[index][j].gradeFrom) + 1;
            const gradeTo = examGridNumbers[0].indexOf(examRow[index][j].gradeTo) + 1;

            const names = examRow[index][j].names.join(", ")
            const remark = (examRow[index][j].remarks != "") ? " **[" + examRow[index][j].remarks + "]**" : "";

            const examRowDescription = formatString(names + remark);

            htmlExamRow.push(
                <div
                    className={`exam-row ${setExamRow(gradeFrom, gradeTo)} ${examRow[index][j].highlight ? 'exam-row-highlight' : ''} ${hovered == hoveredID ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter(hoveredID)}
                    onMouseLeave={handleMouseLeave}
                >
                    {examRow[index][j].names.length}&nbsp;<span>student{(examRow[index][j].names.length > 1) && "s"}</span><div>&#128100;</div>
                </div>
            );
            htmlExamRow.push(
                <div className={`exam-row-description ${hovered == hoveredID ? 'hovered' : ''}`}>
                    {examRowDescription}
                </div>
            );
        }
        htmlExamGrid.push(
            <div className="exam-grid">
                {htmlExamRow}
            </div>
        );

        return (
            <div className="exam-table">
                {htmlExamCategories}
                {htmlExamGridNumbers}
                {htmlExamGrid}
            </div>
        );
    };

    const handleSignatureReviews = (index: number) => {
        const htmlSignatureReviews = [];

        if (signatureReview[index].length != 0) {
            const htmlReview = [];
            for (let j = 0; j < signatureReview[index].length; j++) {
                const university = (signatureReview[index][j].university != "") ? "[" + signatureReview[index][j].university + "]" : "";
                htmlReview.push(
                    <div className="signature-reviews-box">
                        <div className="reviews-description">
                            {signatureReview[index][j].description}
                        </div>
                        <div className="reviews-name">
                            {signatureReview[index][j].name}
                        </div>
                        <div className="reviews-uni">
                            {university}
                        </div>
                    </div>
                );
            }

            htmlSignatureReviews.push(
                <div className="signature-reviews-wrapper">
                    {htmlReview}
                </div>
            );
        }

        return htmlSignatureReviews;
    };

    const renderExam = () => {
        return (
            <div className="exam-wrapper">
                {handleExamTable(0)}
                {handleSignatureReviews(0)}
                {handleExamTable(1)}
                {handleSignatureReviews(1)}
            </div>
        );
    };

    return (
        <div className="up-down">
            <div className="up-down-container">
                <div className="up-down-title">
                    {formatString(title)}
                </div>
                <div className="up-down-textdiv">
                    {renderExam()}
                </div>
            </div>
        </div>
    );
};

export default Exam;