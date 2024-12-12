import React from 'react';

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <h2 className="mb-4 sm:mb-8 text-center text-2xl font-bold uppercase tracking-widest sm:text-4xl">
            {children}
        </h2>
    );
};

export default SectionHeading;
