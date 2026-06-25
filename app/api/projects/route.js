import { NextResponse } from "next/server";

const baseProject = [
  {
    id: 1,
    label: "Frontend Development",
    title: "O2H Official Site",
    description: "Personal portfolio website for Orang-orangan Halimawan (O2H) developed using Next.js and Tailwind CSS with a modern, responsive, and interactive user experience.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "https://o2h-website.vercel.app/",
    githubLink: "https://github.com/HaimiyaWasn/o2h-website",
  }
];

export async function GET() {
  return NextResponse.json(baseProject);
};