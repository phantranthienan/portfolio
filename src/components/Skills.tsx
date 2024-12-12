"use client";
import React from 'react'
import { motion } from 'framer-motion';
import SectionHeading from './common/SectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';

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
        }
    }),
};

const Skills = () => {
    const { ref } = useSectionInView('Skills', 1);
  return (
    <section 
        ref={ref}
        id="skills" 
        className="max-w-[52rem] scroll-mt-24"
    >
        <SectionHeading>My Skills</SectionHeading>
        <ul 
            className="flex flex-wrap justify-center gap-2 text-lg font-geist-mono text-gray-800"
        >
            {skillsData.map((skill, index) => (
                <motion.li 
                    className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
                    key={index}
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom={index}
                >
                    {skill}
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default Skills