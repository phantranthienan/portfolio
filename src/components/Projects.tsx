'use client';
import React from 'react';
import SectionHeading from './common/SectionHeading';
import Project from './Project';

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

const Projects = () => {
    const { ref } = useSectionInView('Projects', 0.5);
    return (
        <section ref={ref} id="projects" className="scroll-mt-24">
            <SectionHeading>Projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Projects;
