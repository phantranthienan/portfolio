'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './common/SectionHeading';
import Project from './Project';
import { projectsStaticData } from '@/lib/data';

const Projects = () => {
    const t = useTranslations('Projects');
    const { ref } = useSectionInView('Projects', 0.5);
    const keys = ['kanban', 'sudoku', 'vaukazimut', 'urlshortener'] as const;

    return (
        <section ref={ref} id="projects" className="mb-16 scroll-mt-24 sm:mb-0">
            <SectionHeading>{t('heading')}</SectionHeading>
            <div>
                {keys.map((key) => (
                    <React.Fragment key={key}>
                        <Project
                            title={t(`${key}.title`)}
                            description={t(`${key}.description`)}
                            tags={projectsStaticData[key].tags}
                            imageUrl={projectsStaticData[key].imageUrl}
                            liveUrl={projectsStaticData[key].liveUrl}
                            githubUrl={projectsStaticData[key].githubUrl}
                        />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Projects;
