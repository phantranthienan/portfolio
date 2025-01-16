'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import GitHubCalendar from 'react-github-calendar';
import BentoCard from '@/components/common/BentoCard';
import SectionHeading from './common/SectionHeading';
import FlagIcon from './common/FlagIcon';
import { Activity } from '@/lib/types';

import { useTranslations } from 'next-intl';
import { useSectionInView, useLabels } from '@/lib/hooks';

const About = () => {
    const t = useTranslations('About');
    const { ref } = useSectionInView('About', 0.75);
    const labels = useLabels();

    const filterContributions = (contributions: Activity[]) => {
        const currentDate = new Date();
        const nineMonthsAgo = new Date();
        nineMonthsAgo.setMonth(currentDate.getMonth() - 9);

        return contributions.filter((activity) => {
            const date = new Date(activity.date);
            return date >= nineMonthsAgo && date <= currentDate;
        });
    };

    const getCurrentWeekday = () => {
        const currentDate = new Date();
        return currentDate.getDay(); // Returns the current day of the week (0 for Sunday, 1 for Monday, etc.)
    };

    const githubTheme = {
        light: ['#c9e4ca', '#87bba2', '#55828b', '#3b6064', '#364958'],
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
                    className="order-3 flex flex-col justify-evenly gap-y-2 sm:order-2"
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

                {/* University Section */}
                <BentoCard
                    className="order-2 col-span-2 flex items-center justify-center sm:order-3"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { type: 'tween' },
                    }}
                    viewport={{ once: true }}
                >
                    <Image
                        src="/images/Logo_INSACVL.png"
                        alt="INSA Centre Val de Loire"
                        width={400}
                        height={100}
                        quality="100"
                        priority={true}
                        className="w-full object-contain"
                    />
                </BentoCard>

                {/* Hobbies Section */}
                <BentoCard
                    className="order-4 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { type: 'tween' },
                    }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-2xl bg-emerald-100">
                            <Image
                                src="/images/hobbies/Football.png"
                                alt={t('hobbies.football')}
                                height={100}
                                width={100}
                                className="aspect-square w-full rounded-2xl"
                            />
                        </div>
                        <div className="rounded-2xl bg-fuchsia-100">
                            <Image
                                src="/images/hobbies/Badminton.png"
                                alt={t('hobbies.badminton')}
                                height={100}
                                width={100}
                                className="aspect-square w-full rounded-2xl"
                            />
                        </div>
                        <div className="rounded-2xl bg-fuchsia-100">
                            <Image
                                src="/images/hobbies/Gym.png"
                                alt={t('hobbies.gym')}
                                height={100}
                                width={100}
                                className="aspect-square w-full rounded-2xl"
                            />
                        </div>
                        <div className="rounded-2xl bg-emerald-100">
                            <Image
                                src="/images/hobbies/Pingpong.png"
                                alt={t('hobbies.pingpong')}
                                height={100}
                                width={100}
                                className="aspect-square w-full rounded-2xl"
                            />
                        </div>
                    </div>
                </BentoCard>

                {/* Cats Section */}
                <BentoCard
                    className="order-6 col-span-2 flex flex-col items-center justify-center text-center text-sm sm:order-5 sm:col-span-1"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { type: 'tween' },
                    }}
                    viewport={{ once: true }}
                >
                    {t('cats.title')}
                    <Image
                        src="/images/Cats.jpg"
                        alt={t('cats.imageAlt')}
                        height={200}
                        width={200}
                        className="mt-2 w-full max-w-[300px] rounded-xl object-cover"
                    />
                </BentoCard>

                {/* Quote Section */}
                <BentoCard
                    className="order-5 col-span-2 flex flex-col justify-center gap-y-2 sm:order-6 sm:px-10"
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

                <BentoCard className="order-7 col-span-2 flex flex-col items-center justify-center gap-1 font-geist-mono sm:col-span-3 sm:gap-4">
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
                        theme={githubTheme}
                        blockSize={14}
                        blockRadius={8}
                        blockMargin={4}
                        fontSize={10}
                    />
                </BentoCard>
            </div>
        </section>
    );
};

export default About;
