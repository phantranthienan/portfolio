import {
    siCss,
    siHtml5,
    siJavascript,
    siTypescript,
    siReact,
    siNextdotjs,
    siNodedotjs,
    siExpress,
    siMongodb,
    siMongoose,
    siPostgresql,
    siPrisma,
    siTailwindcss,
    siStyledcomponents,
    siRedux,
    siReactquery,
    siDocker,
    siPython,
    siJest,
    siFramer,
    siGit,
    siTestinglibrary,
    siGithub,
    siMui,
} from 'simple-icons';

import kanbanImg from '@/../public/images/projects/kanban.png';
import sudokuImg from '@/../public/images/projects/sudoku.png';
import vaukazimutImg from '@/../public/images/projects/vaukazimut.png';

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
] as const;

export const skillsData = [
    { name: 'HTML', icon: siHtml5 },
    { name: 'CSS', icon: siCss },
    { name: 'JavaScript', icon: siJavascript },
    { name: 'TypeScript', icon: siTypescript },
    { name: 'React', icon: siReact },
    { name: 'Next.js', icon: siNextdotjs },
    { name: 'Tailwind', icon: siTailwindcss },
    { name: 'Redux', icon: siRedux },
    { name: 'React Query', icon: siReactquery },
    { name: 'Framer Motion', icon: siFramer },
    { name: 'Express', icon: siExpress },
    { name: 'Node.js', icon: siNodedotjs },
    { name: 'MongoDB', icon: siMongodb },
    { name: 'PostgreSQL', icon: siPostgresql },
    { name: 'Mongoose', icon: siMongoose },
    { name: 'Prisma', icon: siPrisma },
    { name: 'Jest', icon: siJest },
    { name: 'Git', icon: siGit },
    { name: 'Docker', icon: siDocker },
    { name: 'Python', icon: siPython },
] as const;

// export const projectsData = [
//     {
//         title: 'Kanban Board',
//         description:
//             'A simple Kanban board application that allows users to create, update, and delete tasks. Users can also drag and drop tasks between columns.',
//         tags: [
//             'React',
//             'TypeScript',
//             'Node.js',
//             'Express.js',
//             'MongoDB',
//             'Redux',
//         ],
//         imageUrl: kanbanImg,
//     },
//     {
//         title: 'Sudoku',
//         description:
//             'A classic Sudoku game with multiple features such as hint, undo, and reset. Users can also choose the difficulty level of the game.',
//         tags: ['React', 'JavaScript', 'styled-components', 'Jotai'],
//         imageUrl: sudokuImg,
//     },
//     {
//         title: 'Vaukazimut',
//         description:
//             'A mobile app for "course d\'orientation", a sport where participants navigate checkpoints with a map and compass.',
//         tags: [
//             'React Native',
//             'JavaScript',
//             'Tailwind',
//             'Django',
//             'PostgreSQL',
//         ],
//         imageUrl: vaukazimutImg,
//     },
// ] as const;

export const projectsStaticData = {
    kanban: {
        tags: [
            'React',
            'TypeScript',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Redux',
        ],
        imageUrl: kanbanImg,
    },
    sudoku: {
        tags: ['React', 'JavaScript', 'styled-components', 'Jotai'],
        imageUrl: sudokuImg,
    },
    vaukazimut: {
        tags: [
            'React Native',
            'JavaScript',
            'Tailwind',
            'Django',
            'PostgreSQL',
        ],
        imageUrl: vaukazimutImg,
    },
} as const;

export const techIconsData = [
    siHtml5,
    siCss,
    siJavascript,
    siTypescript,
    siPython,
    siReact,
    siNextdotjs,
    siNodedotjs,
    siExpress,
    siMongodb,
    siPostgresql,
    siMongoose,
    siPrisma,
    siTestinglibrary,
    siTailwindcss,
    siStyledcomponents,
    siFramer,
    siMui,
    siRedux,
    siReactquery,
    siJest,
    siDocker,
    siGit,
    siGithub,
] as const;
