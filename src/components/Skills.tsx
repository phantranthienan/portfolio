'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SectionHeading from './common/SectionHeading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { renderCustomIcon } from '@/lib/utils';

const fadeInAnimation = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
            type: 'tween',
        },
    }),
};

const Skills = () => {
    const t = useTranslations('Skills');
    const { ref } = useSectionInView('Skills', 1);
    return (
        <section
            ref={ref}
            id="skills"
            className="mb-16 max-w-[52rem] scroll-mt-24 sm:mb-0"
        >
            <SectionHeading>{t('heading')}</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 font-geist-mono text-lg text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        className="flex items-center justify-center gap-2 rounded-xl border border-black/[0.1] bg-white px-5 py-3"
                        key={index}
                        variants={fadeInAnimation}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        {renderCustomIcon(skill.icon, 18)} {skill.name}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
