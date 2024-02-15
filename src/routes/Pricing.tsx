import React, { useEffect, useState } from 'react';
import { formatString } from './Utils';

import Chevron from '../images/chevron.png';
import Tick_Mark from '../images/tick-mark.png';
import Cross_Mark from '../images/cross-mark.png';
import Star_Mark from '../images/star-mark.png';
import Goodnotes_Mark from '../images/goodnotes-mark.png';
import Prediction_Mark from '../images/prediction-mark.png';
import Money_Mark from '../images/money-mark.png';
import Money_Gold_Mark from '../images/money-gold-mark.png';

export type PricingType = {
    name: string;
    price: number;
    perX: number;
    highlight: boolean;
    pricingOffers: PricingOfferType[];
};

export type PricingOfferType = {
    offer: string;
    check: number;
};

type PricingProp = {
    openForm: (e: React.MouseEvent<HTMLDivElement>) => void;
    pricing: PricingType[];
}

const Pricing: React.FC<PricingProp> = ({ openForm, pricing }) => {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    };

    const handleMouseLeave = () => {
        setHovered(null);
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
                        {formatString(pricingOffers[i].offer)}
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

    const renderPriceBox = (title: string, price: number, per: number, highlight: boolean, pricingOffers: PricingOfferType[], active: boolean) => {
        const htmlPricingOffers = handlePricingOffers(pricingOffers);
        
        let perStr = "/WK";
        if (per != 1) perStr = `/${per}L`;

        return (
            <>
                <div className={`pricing-box ${active ? 'active' : ''}`}>
                    <div className={`pricing-title ${highlight ? 'pricing-highlight' : ''}`}>
                        {title}
                    </div>
                    <div className={`pricing-price ${highlight ? 'pricing-highlight' : ''}`}>
                        <span>HKD</span>{price}<span>{perStr}</span>
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
    };

    return (
        <div className="pricing">
            <div className="pricing-wrapper">
                {renderPriceBox(pricing[0].name, pricing[0].price, pricing[0].perX, pricing[0].highlight, pricing[0].pricingOffers, pricingActives[0])}
                {renderPriceBox(pricing[1].name, pricing[1].price, pricing[1].perX, pricing[1].highlight, pricing[1].pricingOffers, pricingActives[1])}
                {renderPriceBox(pricing[2].name, pricing[2].price, pricing[2].perX, pricing[2].highlight, pricing[2].pricingOffers, pricingActives[2])}
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