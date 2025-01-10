'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            <p className="text-xs">
                <span className="font-semibold">{t('about')}</span>{' '}
                {t('builtWith')}
            </p>
        </footer>
    );
}
