import React, { useEffect, useState, useRef } from 'react';
import { formatString } from './Utils';

interface StyleState {
    maxHeight?: string;
    [key: string]: string | undefined;
}

export type ReviewType = {
    description: string;
    name: string;
    university: string;
};

type ReviewsProp = {
    reviews: ReviewType[];
}

const Reviews: React.FC<ReviewsProp> = ({ reviews }) => {
    const [style, setStyle] = useState<StyleState>({});
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            let newStyle:StyleState = {};
            let columns;
            if (window.innerWidth > 1600) {
                newStyle.maxHeight = `${reviews.length / 3 * 370}px`;
                columns = 3;
            }
            else if (window.innerWidth > 1080) {
                newStyle.maxHeight = `${reviews.length / 2 * (250 + (160 - window.innerWidth / 10) * 1.2)}px`;
                columns = 2;
            }
            else {
                newStyle.maxHeight = `${100}%`;
                columns = 1;
            }

            setStyle(newStyle);
            if(containerRef.current) {
                containerRef.current.style.setProperty('--columns', columns.toString());
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [reviews.length]);

    const handleReviews = () => {
        const htmlReviewBox = [];

        for (let i = 0; i < reviews.length; i++) {
            const university = (reviews[i].university != "") ? "[" + reviews[i].university + "]" : "";
            htmlReviewBox.push(
                <div className="reviews-box">
                    <div className="reviews-description">
                        {formatString(reviews[i].description)}
                    </div>
                    <div className="reviews-name">
                        {reviews[i].name}
                    </div>
                    <div className="reviews-uni">
                        {university}
                    </div>
                </div>
            );
        }

        return htmlReviewBox;
    };

    const renderReviews = () => {
        return (
            <div
                className="reviews-box-wrapper"
                ref={containerRef}
                style={style}>
                {handleReviews()}
            </div>
        );
    };

    return (
        <div className="reviews">
            <div className="reviews-wrapper">
                {renderReviews()}
            </div>
        </div>
    );
};

export default Reviews;