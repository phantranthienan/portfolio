import React from 'react';

import Intro from '@/components/Intro';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

import SectionDivider from '@/components/common/SectionDivider';

const Home = () => {
  return (
      <main className="flex flex-col items-center p-4">
        <Intro />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
      </main>
  );
}

export default Home;
