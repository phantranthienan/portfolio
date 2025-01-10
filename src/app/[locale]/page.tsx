import React from 'react';

import Intro from '@/components/Intro';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

import SectionDivider from '@/components/common/SectionDivider';

const Home = () => {
    return (
        <main className="flex flex-col items-center px-4">
            <Intro />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Contact />
        </main>
    );
};

export default Home;
