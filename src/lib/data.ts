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
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind',
    'Redux',
    'React Query',
    'Framer Motion',
    'Express',
    'Node.js',
    'MongoDB',
    'Git',
    'Docker',
    'Python',
    'Java',
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
