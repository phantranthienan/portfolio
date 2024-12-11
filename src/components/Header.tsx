'use client';
import React, { use, useContext } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { links } from '@/lib/data';
import { useActiveSectionContext } from '@/context/activeSectionContext';

const Header = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();
    return (
        <header className="relative z-[999]">
            <motion.div
                className="fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white bg-white bg-opacity-80 shadow-lg shadow-black/[0.08] backdrop-blur-[0.5rem] sm:top-6 sm:h-12 sm:w-[36rem] sm:rounded-full"
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
            ></motion.div>

            <nav className="fixed left-1/2 top-[0.15rem] h-[4.35rem] w-full -translate-x-1/2 sm:top-6 sm:h-12 sm:w-[36rem] sm:py-0">
                <ul className="mx-auto flex h-full w-[20rem] flex-wrap items-center justify-center text-sm font-medium text-gray-500 sm:flex-nowrap sm:gap-6">
                    {links.map((link) => (
                        <motion.li
                            key={link.hash}
                            className="relative flex h-[65%] items-center justify-center"
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
                                {link.name}
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
