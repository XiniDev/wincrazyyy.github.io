import React from 'react';

export const formatString = (input: string): JSX.Element => {
    const formattedText = input
        .replace(/%%/g, '<br />')
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/~~(.*?)~~/g, '<span>$1</span>')
        .replace(/--(.*?)--/g, '<div>$1</div>');

    return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
};

export const formatStringWithClass = (input: string, className: string): JSX.Element => {
    const formattedText = input
        .replace(/%%/g, '<br />')
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/~~(.*?)~~/g, '<span>$1</span>')
        .replace(/--(.*?)--/g, '<div>$1</div>');

    return <div className={className} dangerouslySetInnerHTML={{ __html: formattedText }} />;
};