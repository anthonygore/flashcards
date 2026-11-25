import Decks from "~/flashcards/Decks";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Flashcards" },
    { name: "description", content: "Flashcards" },
  ];
}

export default function Home() {
  return <Decks />
}
