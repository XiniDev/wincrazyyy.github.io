import React, { useEffect, useState } from 'react';

type CounterProp = {
    fadeDiv: boolean;
    hideDiv: boolean;
    hours: number;
}

const Counter: React.FC<CounterProp> = ({ fadeDiv, hideDiv, hours }) => {
    const [count, setCount] = useState(0);
    const duration = hours / 10;

    useEffect(() => {
        const startTime = Date.now();

        const interval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const progress = elapsedTime / duration;
            const currentCount = Math.min(Math.round(hours * progress), hours);

            setCount(currentCount);

            if (currentCount === hours) {
                clearInterval(interval);
            }
        }, 1000 / 60);

        return () => clearInterval(interval);
    }, [hours, duration]);

    return (
        <div className={`counter-wrapper homepage-text-shadow-2 ${fadeDiv ? (hideDiv ? 'homepage-intro-fade' : 'homepage-intro-fade visible') : 'homepage-intro-fade'}`}>
            <div>
                {count}+ Tutoring Hours
            </div>
        </div>
    );
};

export default Counter;
