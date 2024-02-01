import React, { useRef, useState, useEffect } from 'react';

type LazyBackgroundProps = {
    src: string;
    placeholder: string;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}
const LazyBackground: React.FC<LazyBackgroundProps> = ({
    src,
    placeholder = '', // Empty by default unprovided
    className,
    style,
    children
}) => {
    const [loaded, setLoaded] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, observer) => {
                for (let entry of entries) {
                    if (entry.isIntersecting) {
                        // Image is in the viewport, load the image
                        setLoaded(true);
                        observer.unobserve(entry.target);
                    }
                }
            },
            {
                rootMargin: '100px',
                threshold: 0.01
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...style,
                backgroundImage: `url(${loaded ? src : placeholder})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed'
            }}
        >
            {children}
        </div>
    );
};

export default LazyBackground;