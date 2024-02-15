import React, { useEffect, useState } from 'react';
import { formatStringWithClass } from './Utils';

import Shelf_Image from '../images/drawings/student/student_illustration_compressed.png';

export type BannerItemType = {
    title: string;
    description: string[];
}

export type ShelfBannerType = {
    shelfItems: string[];
    bannerItems: BannerItemType[];
};

type ShelfBannerProp = {
    content: ShelfBannerType;
}

const ShelfBanner: React.FC<ShelfBannerProp> = ({ content }) => {
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

    const handleShelf = () => {
        const hoverID = ['tc-exp-tl', 'tc-exp-tr', 'tc-exp-bl', 'tc-exp-br'];
        const htmlShelf = [];
        const htmlShelfDecor = (
            <div className={`shelf-decor ${handleShelfHover(true, hoverID[0], hoverID[1])}`}>
                <hr></hr>
                <hr></hr>
            </div>
        );
        for (let i = 0; i < 4; i++) {
            const left: boolean = i % 2 == 0 ? true : false;
            const id1: number = i - 2 < 0 ? 0 : 2;
            const id2: number = i - 2 < 0 ? 1 : 3;
            htmlShelf.push(
                <div
                    className={`shelf-block ${handleShelfHover(left, hoverID[id1], hoverID[id2])}`}
                    onMouseEnter={() => handleMouseEnter(hoverID[i])}
                    onMouseLeave={handleMouseLeave}
                >
                    {i == 0 ? htmlShelfDecor : (<></>)}
                    {formatStringWithClass(content.shelfItems[i], `shelf-text ${handleShelfHover(left, hoverID[id1], hoverID[id2])}`)}
                </div>
            );
        }
        return htmlShelf;
    };

    const renderShelf = () => {
        const htmlShelf = handleShelf();

        return (
            <div className="shelf-wrapper">
                {htmlShelf}
            </div>
        );
    };

    const handleBannerLeft = () => {
        const htmlBannerLeft = [];
        let bannerDescription = content.bannerItems[0].description[0];
        for (let i = 1; i < content.bannerItems[0].description.length; i++) {
            bannerDescription += "--%%--";
            bannerDescription += content.bannerItems[0].description[i];
        }
        htmlBannerLeft.push(
            <div
                className={`bannerlist-banner ${hovered == 'ed-bkg-1' ? 'hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter('ed-bkg-1')}
                onMouseLeave={handleMouseLeave}
            >
                {formatStringWithClass(content.bannerItems[0].title, `bannerlist-title ${hovered == 'ed-bkg-1' ? 'hovered' : ''}`)}
                {formatStringWithClass(bannerDescription, `bannerlist-text ${hovered == 'ed-bkg-1' ? 'hovered' : ''}`)}
            </div>
        );
        return htmlBannerLeft;
    };

    const handleBannerRight = () => {
        const htmlBannerRight = [];
        for (let i = 1; i < 4; i++) {
            let hoverID = 'ed-bkg-' + (i + 1);
            let bannerDescription = content.bannerItems[i].description[0];
            for (let j = 1; j < content.bannerItems[i].description.length; j++) {
                bannerDescription += "--%%--";
                bannerDescription += content.bannerItems[i].description[j];
            }
            htmlBannerRight.push(
                <div
                    className={`bannerlist-banner ${hovered == hoverID ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter(hoverID)}
                    onMouseLeave={handleMouseLeave}
                >
                    {formatStringWithClass(content.bannerItems[i].title, `bannerlist-title ${hovered == hoverID ? 'hovered' : ''}`)}
                    {formatStringWithClass(bannerDescription, `bannerlist-text ${hovered == hoverID ? 'hovered' : ''}`)}
                </div>
            );
        }
        return htmlBannerRight;
    };

    const renderBanner = () => {
        const htmlBannerLeft = handleBannerLeft();
        const htmlBannerRight = handleBannerRight();

        return (
            <div className="bannerlist-wrapper">
                <div className="bannerlist-left">
                    {htmlBannerLeft}
                </div>
                <div className="bannerlist-right">
                    {htmlBannerRight}
                </div>
            </div>
        );
    };

    return (
        <div className="shelf-banner-wrapper">
            {renderShelf()}
            <div className="shelf-block-image">
                <img src={Shelf_Image} loading="lazy"/>
            </div>
            {renderBanner()}
        </div>
    );
};

export default ShelfBanner;