import { NextResponse } from "next/server";

const baseJourney = [
  {
    id: 1,
    year: 2024,
    title: "Frontend Developer",
    description:
      "Started focusing on React, TypeScript, Next.js, and modern frontend technologies.",
  },
  {
    id: 2,
    year: 2025,
    title: "Professional Experience at Zi.Care",
    description:
      "Worked as a Full-Stack Developer building scalable web applications and internal systems.",
  },
  {
    id: 3,
    year: "Present",
    title: "Personal Projects & Content Creator",
    description:
      "Building personal products, sharing knowledge, and writing web novels.",
  },
]

export async function GET() {
  return NextResponse.json(baseJourney);
}