import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import ShelfBanner from './ShelfBanner';
import Carousel from './Carousel';
import Pricing from './Pricing';
import Reviews from './Reviews';

import Logo from '../images/drawings/logo/logo_transparent.png';

import pricingData from '../json/pricingData.json';
import reviewsData from '../json/reviewsData.json';

const Homepage: React.FC = () => {
    const pricing = pricingData.pricing;
    const reviews = reviewsData.reviews;
    const hours = 12900;

    const [formActive, setFormActive] = useState(false);

    const openForm = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setFormActive(true);
    };

    return (
        <div className="homepage">
            <Header formActive={formActive} setFormActive={setFormActive}/>
            <Intro openForm={openForm} logo={Logo} hours={hours}/>
            <div className="body-container">
                <ShelfBanner/>
            </div>
            <div className="up-down">
                <div className="up-down-background"></div>
                <div className="up-down-container">
                    <Carousel openForm={openForm}/>
                    <div className="up-down-space"></div>
                    <Pricing openForm={openForm} pricing={pricing}/>
                    <div className="up-down-space"></div>
                    <Reviews reviews={reviews}/>
                </div>
            </div>
            <Footer openForm={openForm}/>
        </div>
    );
}

export default Homepage;