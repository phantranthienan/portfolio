import { StaticImageData } from 'next/image';
import { links } from './data';

export type SectionName = (typeof links)[number]['name'];

export type ProjectData = {
    title: string;
    description: string;
    tags: readonly string[];
    imageUrl: StaticImageData;
    liveUrl: string | null;
    githubUrl: string;
};

export type Activity = {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
};
