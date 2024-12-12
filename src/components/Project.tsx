'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useTransform, useScroll } from 'framer-motion';

import { projectsData } from '@/lib/data';

type ProjectProps = (typeof projectsData)[number];

const Project: React.FC<ProjectProps> = ({
    title,
    description,
    tags,
    imageUrl,
}) => {
    const ref = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.25 1'],
    });

    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    return (
        <motion.article
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgress,
            }}
            className="group relative mb-3 max-w-[44rem] overflow-hidden rounded-xl border border-black/5 bg-gray-100 transition last:mb-0 hover:bg-gray-200 sm:mb-8 sm:h-[22rem]"
        >
            <div className="flex h-full flex-col py-4 pl-4 sm:max-w-[50%] sm:py-8 sm:pl-8 sm:group-even:ml-[50%] sm:group-even:pl-0 sm:group-even:pr-8">
                <h3 className="text-2xl font-semibold"> {title} </h3>
                <p className="mt-2 text-lg leading-relaxed text-gray-700">
                    {description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
                    {tags.map((tag, index) => (
                        <li
                            key={index}
                            className="rounded-full bg-black/[0.7] px-[0.7rem] py-2 text-xs uppercase tracking-widest text-white sm:text-[0.8rem]"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
            <Image
                src={imageUrl}
                alt={title}
                quality={95}
                className="absolute -right-8 top-8 hidden w-[21rem] rounded-t-lg shadow-2xl transition group-even:-left-8 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-3 group-hover:scale-[1.05] group-even:group-hover:translate-x-3 group-even:group-hover:rotate-3 sm:block"
            />
        </motion.article>
    );
};

export default Project;
