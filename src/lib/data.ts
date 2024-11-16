import { getFilePublicUrl } from "./supabase";

export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;

export const projectsData = [
  {
    title: "Kanban Board",
    tags: ["React", "TypeScript", "Express", "MongoDB", "Redux"]
  },
  {
    title: "Sudoku",
    tags: ["React", "JavaScript", "styled-components", "Jotai"]
  },
  {
    title: "Vaukazimut",
    tags: ["React Native", "JavaScript", "Tailwind", "Expo", "Django"],
    imageUrl: getFilePublicUrl("Projects", "Vaukazimut.png"),
  }
]
