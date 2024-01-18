import React, { useEffect, useState } from 'react';
import { formatString } from './Utils';

export type IAProfileType = {
    title: string;
    infoTabTitles: string[];
    list: string[][];
};

type IAProfileProp = {
    content: IAProfileType;
};

const IAProfile: React.FC<IAProfileProp> = ({ content }) => {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    const [tabActive, setTabActive] = useState([true, false]);

    const tabClick = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        e.stopPropagation();

        switch (index) {
            case 0:
                setTabActive(() => [true, false]);
                break;
            case 1:
                setTabActive(() => [false, true]);
                break;
            default:
                setTabActive(() => [true, false]);
                break;
        }

        (document.getElementsByClassName("info-tab")[0] as HTMLElement).style.height = ((document.getElementsByClassName("info-tab-grid")[index] as HTMLElement).offsetHeight + 75) + "px";
    };

    const handleInfoTabTitles = () => {
        const hoveredID: string[] = [
            'info-title-1',
            'info-title-2'
        ];

        const htmlInfoTabTitles = [];

        for (let i = 0; i < 2; i++)
        {
            htmlInfoTabTitles.push(
                <div
                    className={`info-tab-title ${hovered == hoveredID[i] ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter(hoveredID[i])}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => tabClick(e, i)}
                >
                    <b>{content.infoTabTitles[i]}</b>
                </div>
            );
        }

        return htmlInfoTabTitles;
    };

    const renderInfoTabTitles = () => {
        const htmlInfoTabTitles = handleInfoTabTitles();

        return (
            <div className="info-tab-titles-wrapper">
                <div className={`info-tab-title ${tabActive[0] ? 'tab1-active' : ''} ${tabActive[1] ? 'tab2-active' : ''}`}></div>
                {htmlInfoTabTitles}
            </div>
        );
    };

    const handleInfoTab = () => {
        const htmlInfoTabAll = [];

        const lengths = [6, 9];

        for (let i = 0; i < 2; i++)
        {
            const htmlInfoTab = [];

            for (let j = 0; j < lengths[i]; j++)
            {
                const hoveredID = 'itg-' + (i + 1) + (j + 1);
                htmlInfoTab.push(
                    <div
                        className={`info-tab-grid-item ${hovered == hoveredID ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter(hoveredID)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {formatString(content.list[i][j])}
                    </div>
                );
            }

            htmlInfoTabAll.push(
                <div className={`info-tab-text ${tabActive[i] ? 'active' : ''}`}>
                    <div className={`info-tab-grid info-tab-grid-${i}`}>
                        {htmlInfoTab}
                    </div>
                </div>
            );
        }

        return htmlInfoTabAll;
    };

    const renderInfoTab = () => {
        const htmlInfoTabAll = handleInfoTab();

        return (
            <div className="info-tab">
                {htmlInfoTabAll}
            </div>
        );
    };

    return (
        <div className="ibdp-profile">
            <div className="ibdp-profile-container">
                <div className="ibdp-profile-title">
                    {formatString(content.title)}
                </div>
                <div className="ibdp-profile-textdiv">
                    <div className="ibdp-profile-description">
                        <div className="info-tabs-wrapper">
                            {renderInfoTabTitles()}
                            {renderInfoTab()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IAProfile;