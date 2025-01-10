'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { links } from '@/lib/data';
import { useActiveSectionContext } from '@/context/activeSectionContext';

const Header = () => {
    const t = useTranslations('Header');
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();
    return (
        <header className="relative z-[999]">
            <motion.div
                className="fixed left-1/2 top-0 h-20 w-full rounded-none border border-white bg-white bg-opacity-80 shadow-lg shadow-black/[0.08] backdrop-blur-[0.5rem] sm:top-6 sm:h-12 sm:w-[34rem] sm:rounded-full"
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
            ></motion.div>

            <nav className="fixed left-1/2 top-0 flex h-20 w-full -translate-x-1/2 py-2 sm:top-6 sm:h-12 sm:w-[32rem] sm:py-0">
                <ul className="flex w-full flex-wrap items-center justify-evenly gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:justify-between">
                    {links.map((link) => (
                        <motion.li
                            key={link.hash}
                            className="relative flex h-8 items-center justify-center"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                href={link.hash}
                                className={clsx(
                                    'flex w-full items-center justify-center px-[0.8rem] transition hover:text-gray-950',
                                    {
                                        'text-gray-950':
                                            activeSection === link.name,
                                    }
                                )}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {t(`links.${link.name.toLowerCase()}`)}
                                {link.name === activeSection && (
                                    <motion.span
                                        className="absolute inset-0 -z-10 rounded-full bg-gray-100"
                                        layoutId="activeSection"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 350,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
