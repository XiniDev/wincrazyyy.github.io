import React, { useEffect } from 'react';

const TwitterShareButton: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://platform.twitter.com/widgets.js';
        script.charset = 'utf-8';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false" data-size="large" data-url="https://wsmath.com">
            Tweet
        </a>
    );
};

export default TwitterShareButton;
