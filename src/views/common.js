import React from 'react';

export const Subtitle = ({ text }) => {
    return (
        <h2>{text}</h2>
    );
};

export const Title = ({ text }) => {
    return (
        <h2 className="text-center">{text}</h2>
    );
};
