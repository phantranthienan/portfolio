'use client';
import React, { createContext, useContext, useState } from 'react';
import type { SectionName } from '@/lib/types';

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
};

export default ActiveSectionContextProvider;

export const useActiveSectionContext = () => {
    const context = useContext(ActiveSectionContext);

    if (!context) {
        throw new Error(
            'useActiveSectionContext must be used within an ActiveSectionContextProvider'
        );
    }

    return context;
};
