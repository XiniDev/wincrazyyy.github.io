import React, { useEffect, useState } from 'react';
import { formatString } from './Utils';

type RotListProp = {
    color: string;
    content: string[];
}

const RotList: React.FC<RotListProp> = ({ color, content }) => {
    const [hovered, setHovered] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHovered(item);
    };

    const handleMouseLeave = () => {
        setHovered(null);
    };

    const hoveredID: string[] = [
        'co-dsc-1',
        'co-dsc-2',
        'co-dsc-3'
    ];

    const handleRotList = () => {
        const htmlRotList = [];

        for (let i = 0; i < 3; i++)
        {
            htmlRotList.push(
                <div
                    className={`rotlist-point ${hovered == hoveredID[i] ? 'hovered' : ''}`}
                    onMouseEnter={() => handleMouseEnter(hoveredID[i])}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={`rotlist-point-shade ${color} ${hovered == hoveredID[i] ? 'hovered' : ''}`}></div>
                    <div className={`rotlist-point-text ${hovered == hoveredID[i] ? 'hovered' : ''}`}>
                        {formatString(content[i])}
                    </div>
                </div>
            );
        }

        return htmlRotList;
    };

    return (
        <div className="rotlist-wrapper">
            {handleRotList()}
        </div>
    );
};

export default RotList;