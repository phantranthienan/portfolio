'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import BentoCard from '@/components/common/BentoCard';
import SectionHeading from './common/SectionHeading';
import { Icon } from '@iconify/react';
import { useSectionInView } from '@/lib/hooks';


const About = () => {
    const { ref } = useSectionInView('About', 0.75);

    return (
        <section ref={ref} className="max-w-[56rem] scroll-mt-24" id="about">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ 
                    opacity: 1, scale: 1 
                }}
                viewport={{ once: true }}
            >
                <SectionHeading>about me</SectionHeading>
            </motion.div>

            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
                <BentoCard
                    className="order-1 col-span-2 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { type: 'tween' } }}
                    viewport={{ once: true }}
                >
                    <p className="font-geist-mono text-sm">
                        A young {''}
                        <span className="font-bold">Vietnamese</span> programmer
                        with a{' '}
                        <span className="font-bold">
                            deep love for software development,{' '}
                        </span>{' '}
                        I&apos;ve embarked on a journey to France to pursue my
                        dreams in technology.{' '}
                        <span className="font-bold">
                            Hardworking, meticulous, and full of enthusiasm,{' '}
                        </span>
                        I’m committed to honing my skills and contribute to the
                        field.
                    </p>
                </BentoCard>

                <BentoCard
                    className="order-3 flex flex-col justify-evenly gap-y-2 sm:order-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { type: 'tween' } }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center gap-x-2">
                        <Icon icon="flag:vn-4x3" width={40} />
                        <p className="text-[0.6rem] min-[400px]:text-xs">
                            <span className="text-xs font-bold min-[400px]:text-sm">
                                Vietnamese
                            </span>
                            <br />
                            Mother tongue, nailed it! 💅
                        </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Icon icon="flag:sh-4x3" width={40} />
                        <p className="text-[0.6rem] min-[400px]:text-xs">
                            <span className="text-xs font-bold min-[400px]:text-sm">
                                English
                            </span>
                            <br />
                            Second language, fluent! 🌍
                        </p>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Icon icon="flag:fr-4x3" width={40} />
                        <p className="text-[0.6rem] min-[400px]:text-xs">
                            <span className="text-xs font-bold min-[400px]:text-sm">
                                French
                            </span>
                            <br />
                            Use every day, still learning! 📚
                        </p>
                    </div>
                </BentoCard>

                <BentoCard
                    className="order-2 col-span-2 flex items-center justify-center sm:order-3"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { type: 'tween' } }}
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

                <BentoCard
                    className="order-4 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { type: 'tween' } }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-2 gap-2">
                        <div>
                            <Image
                                src="/images/hobbies/Football.png"
                                alt="Football"
                                height={100}
                                width={100}
                                className="aspect-square w-full rounded-2xl bg-emerald-100"
                            />
                        </div>
                        <div>
                            <Image
                                src="/images/hobbies/Badminton.png"
                                alt="Badminton"
                                height={100}
                                width={100}
                                className="aspect-square w-full rounded-2xl bg-fuchsia-100"
                            />
                        </div>
                        <div>
                            <Image
                                src="/images/hobbies/Gym.png"
                                alt="Gym"
                                height={100}
                                width={100}
                                className="aspect-square w-full rounded-2xl bg-fuchsia-100"
                            />
                        </div>
                        <div>
                            <Image
                                src="/images/hobbies/PingPong.png"
                                alt="PingPong"
                                height={100}
                                width={100}
                                className="aspect-square w-full rounded-2xl bg-emerald-100"
                            />
                        </div>
                    </div>
                </BentoCard>

                <BentoCard
                    className="order-6 col-span-2 sm:order-5 sm:col-span-1"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { type: 'tween' } }}
                    viewport={{ once: true }}
                >
                    Song I Like
                </BentoCard>

                <BentoCard
                    className="order-5 col-span-2 gap-y-2 sm:order-6"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { type: 'tween' } }}
                    viewport={{ once: true }}
                >
                    <p className="text-center font-geist-mono text-xs font-medium italic text-gray-700 sm:text-sm">
                        &quot;People think that computer science is the art of
                        geniuses but the actual reality is the opposite, just
                        many people doing things that build on each other, like
                        a wall of mini stones.&quot;
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm tracking-wider sm:text-base">
                        <p className="text-gray-800">Donald Knuth</p>
                        <span className="text-gray-500">|</span>
                        <p className="text-gray-800">Computer Scientist</p>
                    </div>
                </BentoCard>
            </div>
        </section>
    );
};

export default About;
