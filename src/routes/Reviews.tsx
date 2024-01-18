import React, { useEffect, useState } from 'react';
import { formatString } from './Utils';

export type ReviewType = {
    description: string;
    name: string;
    university: string;
};

type ReviewsProp = {
    reviews: ReviewType[];
}

const Reviews: React.FC<ReviewsProp> = ({ reviews }) => {
    const handleReviews = () => {
        const htmlReviewBox = [];

        for (let i = 0; i < reviews.length; i++) {
            const university = (reviews[i].university != "") ? "[" + reviews[i].university + "]" : "";
            htmlReviewBox.push(
                <div className="reviews-box">
                    <div className="reviews-description">
                        {reviews[i].description}
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
            <div className="reviews-box-wrapper">
                {handleReviews()}
            </div>
        );
    }

    return (
        <div className="reviews">
            <div className="reviews-wrapper">
                {renderReviews()}
            </div>
        </div>
    );
};

export default Reviews;