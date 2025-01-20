'use client';
import React from 'react';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { Cloud, ICloud } from 'react-icon-cloud';

import BentoCard from '@/components/common/BentoCard';
import SectionHeading from './common/SectionHeading';
import FlagIcon from './common/FlagIcon';
import { techIconsData } from '@/lib/data';

import { useTranslations } from 'next-intl';
import { useSectionInView, useLabels } from '@/lib/hooks';
import {
    filterContributions,
    getCurrentWeekday,
    renderCustomIcon,
} from '@/lib/utils';

const About = () => {
    const t = useTranslations('About');
    const { ref } = useSectionInView('About', 0.75);
    const labels = useLabels();

    // const githubTheme = {
    //     light: ['#c9e4ca', '#87bba2', '#55828b', '#3b6064', '#364958'],
    // };

    const cloudProps: Omit<ICloud, 'children'> = {
        containerProps: {
            style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            },
        },
        options: {
            reverse: false,
            depth: 1,
            wheelZoom: true,
            imageScale: 2,
            activeCursor: 'default',
            tooltip: 'native',
            initial: [0.2, 0.2],
            clickToFront: 500,
            tooltipDelay: 0,
            outlineColour: '#0000',
            maxSpeed: 0.04,
            minSpeed: 0.02,
        },
    };

    return (
        <section
            ref={ref}
            className="mb-16 max-w-[54rem] scroll-mt-24 sm:mb-0"
            id="about"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                viewport={{ once: true }}
            >
                <SectionHeading>{t('heading')}</SectionHeading>
            </motion.div>

            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
                {/* Bio Section */}
                <BentoCard
                    className="order-1 col-span-2 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { type: 'tween' },
                    }}
                    viewport={{ once: true }}
                >
                    <p className="text-justify font-geist-mono text-xs sm:text-sm">
                        {t('bio')}
                    </p>
                </BentoCard>

                {/* Languages Section */}
                <BentoCard
                    className="order-2 flex flex-col justify-evenly gap-y-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { type: 'tween' },
                    }}
                    viewport={{ once: true }}
                >
                    {(['vietnamese', 'english', 'french'] as const).map(
                        (lang) => (
                            <div
                                key={lang}
                                className="flex items-center gap-x-2"
                            >
                                <FlagIcon lang={lang} />
                                <p className="text-[0.6rem] min-[400px]:text-xs">
                                    <span className="text-xs font-bold min-[400px]:text-sm">
                                        {t(`languages.${lang}.name`)}
                                    </span>
                                    <br />
                                    {t(`languages.${lang}.description`)}
                                </p>
                            </div>
                        )
                    )}
                </BentoCard>

                {/* GitHub Section */}
                <BentoCard
                    className="order-4 col-span-2 flex flex-col items-center justify-center gap-1 font-geist-mono sm:order-3 sm:col-span-3 sm:gap-4"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { type: 'tween' },
                    }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-base uppercase tracking-wider sm:text-xl">
                        {t('github.title')}
                    </h3>
                    <GitHubCalendar
                        username="phantranthienan"
                        transformData={filterContributions}
                        labels={labels}
                        colorScheme="light"
                        weekStart={
                            getCurrentWeekday() as 0 | 1 | 2 | 3 | 4 | 5 | 6
                        }
                        blockSize={14}
                        blockRadius={8}
                        blockMargin={4}
                        fontSize={10}
                    />
                </BentoCard>

                {/* Tech Stack Section */}
                <BentoCard
                    className="order-3 col-span-1 flex items-center justify-center sm:order-4"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { type: 'tween' },
                    }}
                    viewport={{ once: true }}
                >
                    <Cloud {...cloudProps}>
                        {techIconsData.map((icon) => (
                            <div key={icon.slug}>
                                {renderCustomIcon(icon, 50)}
                            </div>
                        ))}
                    </Cloud>
                </BentoCard>

                {/* Quote Section */}
                <BentoCard
                    className="order-5 col-span-2 flex flex-col justify-center gap-y-2 sm:px-10"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { type: 'tween' },
                    }}
                    viewport={{ once: true }}
                >
                    <p className="text-center font-geist-mono text-xs font-medium italic text-gray-700 sm:text-sm">
                        &quot;{t('quote.text')}&quot;
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm tracking-wider sm:text-base">
                        <p className="text-gray-800">{t('quote.author')}</p>
                        <span className="text-gray-500">|</span>
                        <p className="text-gray-800">{t('quote.role')}</p>
                    </div>
                </BentoCard>
            </div>
        </section>
    );
};

export default About;
