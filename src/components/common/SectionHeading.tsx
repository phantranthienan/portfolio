import React from 'react'

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <h2
            className="text-2xl sm:text-4xl font-medium capitalize 
            tracking-widest text-center mb-8" 
        >
        {children}
        </h2>
    )
}

export default SectionHeading