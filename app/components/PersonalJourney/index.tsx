import { headers } from "next/headers"

import PersonalJourneyClient from "./client"

type Journey = {
  id: number,
  year: number,
  title: string,
  description: string,
};

export default async function PersonalJourney() {
  const host = (await headers()).get("host");

  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/journeys`, {
    cache: "no-store",
  });

  if(!res.ok) {
    throw new Error("Failed to fetch projects");
  };

  const journeys: Journey[] = await res.json();

  return <PersonalJourneyClient journeys={journeys} />
}