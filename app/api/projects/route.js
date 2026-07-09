import { NextResponse } from "next/server";

const baseProject = [
  {
    id: 1,
    image: "/img/projectPortfolio/Project1.jpg",
    label: "Frontend Development",
    title: "O2H Official Site",
    description: "Personal portfolio website for Orang-orangan Halimawan (O2H) developed using Next.js and Tailwind CSS with a modern, responsive, and interactive user experience.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://o2h-website.vercel.app/",
    githubLink: "https://github.com/HaimiyaWasn/o2h-website",
  },
  {
    id: 2,
    image: "/img/projectPortfolio/Project2.jpg",
    label: "Frontend Development",
    title: "QuoteVerse",
    description: "A web application that fetches random quotes from an API and allows users to instantly copy their favorite quotes to the clipboard.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://quote-verse-randomize.vercel.app/",
    githubLink: "https://github.com/HaimiyaWasn/QuoteVerse",
  },
  {
    id: 3,
    image: "/img/projectPortfolio/Project3.jpg",
    label: "Frontend Development",
    title: "Wasnify (Just Working)",
    description: "A clean and intuitive task management application that helps users organize daily tasks, track progress, and stay productive with a modern and responsive interface.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://wasnify-todo-app.vercel.app/",
    githubLink: "https://github.com/HaimiyaWasn/WasnifyTodoApp",
  },
];

export async function GET() {
  return NextResponse.json(baseProject);
};