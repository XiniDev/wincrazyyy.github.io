import React, { useEffect, useState } from 'react';

type CounterProp = {
    fadeDiv: boolean;
    hideDiv: boolean;
}

const Counter: React.FC<CounterProp> = ({ fadeDiv, hideDiv }) => {
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const startDate = new Date('2019-01-01');
    const hourMultiplier = 1000 * 60 * 60;
    let accumulatedTime = 0;

    useEffect(() => {
        const hourDiff = Math.round(((Date.now() - startDate.getTime()) / (24 / 7)) / (100 * hourMultiplier)) * 100 * hourMultiplier;
        let startTime = Date.now();
    
        const initialInterval = setInterval(() => {
            const currentTime = Date.now();
            const timeDifference = currentTime - startTime;
            const incrementFactor = hourMultiplier * 10;
    
            if (accumulatedTime >= hourDiff) {
                setElapsedTime(hourDiff);
                clearInterval(initialInterval);
            } else {
                accumulatedTime += timeDifference * incrementFactor;
                setElapsedTime(accumulatedTime);
            }

            startTime = currentTime;
        }, 1);
    
        const mainInterval = setInterval(() => {
            setElapsedTime((prevElapsedTime) => prevElapsedTime + 1000);
        }, 1000);
    
        return () => {
            clearInterval(initialInterval);
            clearInterval(mainInterval);
        };
    }, []);
  
    const formatTime = (time: number): string => {
        const hours = Math.floor(time / hourMultiplier);
    
        return `${hours.toString().padStart(2, '0')}`;
    };

    return (
        <div className={`counter-wrapper ${fadeDiv ? (hideDiv ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
            <div>
                {formatTime(elapsedTime)}+ Tutoring Hours
            </div>
        </div>
    );
};

export default Counter;
