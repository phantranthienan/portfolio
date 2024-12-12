import { useActiveSectionContext } from '@/context/activeSectionContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import type { SectionName } from './types';

export const useSectionInView = (sectionName: SectionName, threshold = 1) => {
    const { ref, inView } = useInView({
        threshold,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 800) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    };
};
