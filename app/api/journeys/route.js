import { NextResponse } from "next/server";

const baseJourney = [
  {
    id: 1,
    year: 2023,
    title: "Frontend Developer",
    description:
      "Studied and understood the fundamentals of HTML, CSS, and JavaScript, while practicing by developing school-related projects using PHP-based Laravel.",
  },
  {
    id: 2,
    year: 2024,
    title: "Professional Experience Internship at Zi.Care",
    description:
      "Developed a hospital web application to facilitate the integration and transmission of data to PeduliLindungi using Phalcon and Vue.js.",
  },
  {
    id: 3,
    year: 2025,
    title: "Learning React",
    description:
      "Learned and understood the fundamentals of building responsive applications using React.",
  },
  {
    id: 4,
    year: 2026,
    title: "Personal Mini Project",
    description:
      "Built small frontend projects using Next.js and Tailwind CSS to create modern, responsive websites across all devices.",
  },
]

export async function GET() {
  return NextResponse.json(baseJourney);
}