'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

import FlagIcon from '@/components/common/FlagIcon';

const LangueSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const handleSwitchLangue = (lang: 'en' | 'fr') => {
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        router.replace({ pathname, params }, { locale: lang });
    };

    return (
        <button
            className="fixed bottom-5 right-5 z-50 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 sm:bottom-10 sm:right-10"
            onClick={() => handleSwitchLangue(locale === 'en' ? 'fr' : 'en')}
            aria-label="Switch language"
        >
            {locale === 'en' ? (
                <FlagIcon lang="french" size={24} />
            ) : (
                <FlagIcon lang="english" size={24} />
            )}
        </button>
    );
};

export default LangueSwitcher;
