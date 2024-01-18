import React from 'react';

export const formatString = (input: string): JSX.Element => {
    const formattedText = input
        .replace(/%%/g, '<br />')
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/~~(.*?)~~/g, '<span>$1</span>');

    return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
};
