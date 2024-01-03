import React, { useEffect, useState } from 'react';

import Chevron from '../images/chevron.png';
import Tick_Mark from '../images/tick-mark.png';
import Cross_Mark from '../images/cross-mark.png';
import Star_Mark from '../images/star-mark.png';
import Goodnotes_Mark from '../images/goodnotes-mark.png';
import Prediction_Mark from '../images/prediction-mark.png';
import Money_Mark from '../images/money-mark.png';
import Money_Gold_Mark from '../images/money-gold-mark.png';

type PricingOfferType = {
    offer: string;
    check: number;
};

type PricingProp = {
    openForm: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Pricing: React.FC<PricingProp> = ({ openForm }) => {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    }

    const handleMouseLeave = () => {
        setHovered(null);
    }

    const starterPricingOffers: PricingOfferType[] = [
        { offer: "Limited online correspondence", check: 1 },
        { offer: "8 short questions with **step by step solutions** provided weekly", check: 1 },
        { offer: "No online lessons", check: 0 },
    ];

    const premiumPricingOffers: PricingOfferType[] = [
        { offer: "Online correspondence", check: 1 },
        { offer: "16 short questions and 4 long questions with **step by step solutions** provided weekly", check: 1 },
        { offer: "4 online lessons of 90 minutes", check: 1 },
        { offer: "Monthly by topic summary", check: 1 },
        { offer: "Math IA topic setup & guidance until completion", check: 1 },
        { offer: "Expected grade improvement of 1 grade or better (e.g. from 5 to 6 in IBDP or from B to A in A-Level)", check: 1 },
        { offer: "Rebate of up to **HKD 1500** per student referred", check: 5 },
    ];

    const elitePricingOffers: PricingOfferType[] = [
        { offer: "**Priority** online correspondence", check: 2 },
        { offer: "**Unlimited access** to tailor made past paper practice **step by step solutions**", check: 2 },
        { offer: "8 online lessons of 90 minutes with **custom lesson time allocation**", check: 2 },
        { offer: "**Professional complete** topic summaries", check: 2 },
        { offer: "Math IA topic setup & guidance until completion", check: 1 },
        { offer: "Expected grade improvement of **2 grades or better** (e.g. from 5 to 7 in IBDP or from B to A* in A-Level)", check: 2 },
        { offer: "School mock exam prediction", check: 4 },
        { offer: "Goodnotes 6 one-time payment", check: 3 },
        { offer: "Rebate of up to **HKD 4000** per student referred", check: 6 },
    ];

    const renderBoldText = (text: string) => {
        return text.split('**').map((part, index) => {
            return index % 2 === 0 ? (
                <span key={index}>{part}</span>
            ) : (
                <b key={index}>{part}</b>
            );
        });
    };

    const handlePricingOffers = (pricingOffers: PricingOfferType[]) => {
        const htmlPricingOffers = [];
        for (let i = 0; i < pricingOffers.length; i++) {
            var markSrc = Cross_Mark;
            switch (pricingOffers[i].check) {
                case 0:
                    markSrc = Cross_Mark;
                    break;
                case 1:
                    markSrc = Tick_Mark;
                    break;
                case 2:
                    markSrc = Star_Mark;
                    break;
                case 3:
                    markSrc = Goodnotes_Mark;
                    break;
                case 4:
                    markSrc = Prediction_Mark;
                    break;
                case 5:
                    markSrc = Money_Mark;
                    break;
                case 6:
                    markSrc = Money_Gold_Mark;
                    break;
                default:
                    break;
            }
            htmlPricingOffers.push(
                <div className="pricing-offers">
                    <div className="pricing-offers-text">
                        {renderBoldText(pricingOffers[i].offer)}
                    </div>
                    <div className="pricing-offers-check">
                        <img src={markSrc}></img>
                    </div>
                </div>
            );
        }
        return htmlPricingOffers;
    };

    const [pricingActives, setPricingActives] = useState([false, true, false]);
    const [pricingIndex, setPricingIndex] = useState(1);

    const pricingSwitch = (e: React.MouseEvent<HTMLDivElement>, left: boolean) => {
        e.stopPropagation();

        let index = pricingIndex;
        const totalNodes = 3;
        const newIndex = left ? Math.max(0, pricingIndex - 1) : Math.min(totalNodes - 1, pricingIndex + 1);

        if (index !== newIndex) {
            setPricingIndex(newIndex);
            index = newIndex;
        }

        const newActivesArray = Array(totalNodes).fill(false);
        newActivesArray[index] = true;
        setPricingActives(newActivesArray);
    };

    const renderPriceBox = (title: string, price: number, per: string, highlight: boolean, pricingOffers: PricingOfferType[], active: boolean) => {
        const htmlPricingOffers = handlePricingOffers(pricingOffers);

        return (
            <>
                <div className={`pricing-box ${active ? 'active' : ''}`}>
                    <div className={`pricing-title ${highlight ? 'pricing-highlight' : ''}`}>
                        {title}
                    </div>
                    <div className={`pricing-price ${highlight ? 'pricing-highlight' : ''}`}>
                        <span>HKD</span>{price}<span>{per}</span>
                    </div>
                    {htmlPricingOffers}
                    <div
                        className={`pricing-button ${highlight ? 'pricing-button-highlight' : ''}`}
                        onClick={(e) => openForm(e)}
                    >
                        Book Now
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="pricing">
            <div className="pricing-wrapper">
                {renderPriceBox("Starter", 200, "/WK", false, starterPricingOffers, pricingActives[0])}
                {renderPriceBox("Premium", 6480, "/4L", true, premiumPricingOffers, pricingActives[1])}
                {renderPriceBox("Elite", 14880, "/8L", false, elitePricingOffers, pricingActives[2])}
                <div
                    className={`pricing-left ${hovered == 'carousel-left' ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter('carousel-left')}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => pricingSwitch(e, true)}
                >
                    <img src={Chevron}/>
                </div>
                <div
                    className={`pricing-right ${hovered == 'carousel-right' ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter('carousel-right')}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => pricingSwitch(e, false)}
                >
                    <img src={Chevron}/>
                </div>
            </div>
        </div>
    );
};

export default Pricing;