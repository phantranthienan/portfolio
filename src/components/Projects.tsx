import React from 'react';
import SectionHeading from './common/SectionHeading';
import Project from './Project';

import { projectsData } from '@/lib/data';

const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-24">
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
