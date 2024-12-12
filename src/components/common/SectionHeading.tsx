import React from 'react';

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <h2 className="mb-4 text-center text-2xl font-bold uppercase tracking-widest sm:mb-8 sm:text-4xl">
            {children}
        </h2>
    );
};

export default SectionHeading;
