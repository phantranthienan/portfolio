'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { BsArrowRight } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/activeSectionContext';

const Intro = () => {
    const t = useTranslations('Intro');
    const { ref } = useSectionInView('Home');
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            className="mb-16 max-w-[40rem] scroll-mt-[100rem] text-center sm:mb-0"
            id="home"
        >
            <div className="flex items-center justify-center text-left">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: 'tween',
                    }}
                >
                    <Image
                        src="/images/Portrait.jpg"
                        alt="Thien An Portrait"
                        width={200}
                        height={200}
                        quality="90"
                        priority={true}
                        className="h-32 w-32 rounded-full border-[0.4rem] border-white object-cover shadow-xl sm:h-36 sm:w-36"
                    />
                </motion.div>
            </div>

            <motion.p
                className="mb-4 mt-4 px-4 font-geist-mono text-xs sm:text-base"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">{t('greeting')}</span>{' '}
                {t('student')}{' '}
                <a
                    href="https://insa-centrevaldeloire.fr/fr/"
                    className="italic underline decoration-dashed underline-offset-2"
                    target="_blank"
                >
                    {t('university')}
                </a>
                <br />
                {t('seeking')}{' '}
                <span className="font-bold">{t('internship')}</span>{' '}
                {t('focus')} <span className="font-bold">{t('frontend')}</span>{' '}
                {t('and')} <span className="font-bold">{t('fullstack')}</span>.
                <br />
                {t('stack')} <span className="font-bold">React</span> {t('and')}{' '}
                <span className="font-bold">Node.js</span>
            </motion.p>

            <motion.div
                className="flex flex-col items-center justify-center gap-x-3 gap-y-1 px-4 text-xs font-medium sm:flex-row sm:text-base"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    deplay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-white outline-none transition hover:scale-110 active:scale-105"
                    onClick={() => {
                        setActiveSection('Contact');
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    {t('contactButton')}{' '}
                    <BsArrowRight className="transition group-hover:translate-x-1" />
                </Link>
                <a
                    href="/CV.pdf"
                    download
                    className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2 outline-none transition hover:scale-110 active:scale-105"
                >
                    {t('cvButton')}{' '}
                    <HiDownload className="transition group-hover:translate-y-1" />
                </a>
                <div className="flex gap-3">
                    <a
                        href="https://www.linkedin.com/in/tran-thien-an-phan-398090221/"
                        target="_blank"
                        className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-3 transition hover:scale-[1.15] active:scale-105"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/phantranthienan"
                        target="_blank"
                        className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-3 transition hover:scale-[1.15] active:scale-105"
                    >
                        <FaGithub />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Intro;
