import Cards from "~/flashcards/Cards";
import type { Route } from "./+types/deck";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Flashcards" },
    { name: "description", content: "Flashcards" },
  ];
}

export default function Home({
  params,
}: Route.ComponentProps) {
  return <Cards deckNum={parseInt(params.deck) ?? 0} />
}
