import { useActiveSectionContext } from '@/context/activeSectionContext';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLocale } from 'next-intl';

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

export const useLabels = () => {
    const locale = useLocale();

    const labels: Record<
        string,
        {
            months: string[];
            weekdays: string[];
            totalCount: string;
            legend: { less: string; more: string };
        }
    > = {
        en: {
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ],
            weekdays: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ],
            totalCount: '{{count}} contributions in {{year}}',
            legend: {
                less: 'Less',
                more: 'More',
            },
        },
        fr: {
            months: [
                'Janvier',
                'Février',
                'Mars',
                'Avril',
                'Mai',
                'Juin',
                'Juillet',
                'Août',
                'Septembre',
                'Octobre',
                'Novembre',
                'Décembre',
            ],
            weekdays: [
                'Dimanche',
                'Lundi',
                'Mardi',
                'Mercredi',
                'Jeudi',
                'Vendredi',
                'Samedi',
            ],
            totalCount: '{{count}} contributions en {{year}}',
            legend: {
                less: 'Moins',
                more: 'Plus',
            },
        },
    };

    // Use the locale from the route or fallback to English
    return labels[locale] || labels['en'];
};
