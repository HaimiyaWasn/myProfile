import { headers } from "next/headers";

import ProjectPortfolioCLient from "./client";

type ProjectPortfolio = {
  id: number,
  image: string,
  label: string,
  title: string,
  description: string,
  techStack: string[],
  demoLink: string,
  githubLink: string,
}

export default async function ProjectPortfolio() {
  const host = (await headers()).get("host");

  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  };

  const projects: ProjectPortfolio[] = await res.json();

  return <ProjectPortfolioCLient projects={projects} />
}