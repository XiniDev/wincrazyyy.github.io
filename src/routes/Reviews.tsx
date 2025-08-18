import React from 'react';
import { formatString } from './Utils';

export type ReviewType = {
    description: string;
    name: string;
    university: string;
};

type ReviewsProp = {
    reviews: ReviewType[];
};

const Reviews: React.FC<ReviewsProp> = ({ reviews }) => {
    return (
        <div className="reviews">
        <div className="reviews-wrapper">
            <div className="reviews-box-wrapper">
            {reviews.map((r, i) => {
                const uni = r.university ? `[${r.university}]` : '';
                return (
                <div className="reviews-box" key={`${r.name}-${r.university}-${i}`}>
                    <div className="reviews-description">{formatString(r.description)}</div>
                    <div className="reviews-name">{r.name}</div>
                    <div className="reviews-uni">{uni}</div>
                </div>
                );
            })}
            </div>
        </div>
        </div>
    );
};

export default Reviews;
