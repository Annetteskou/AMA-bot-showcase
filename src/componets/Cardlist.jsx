import { useLoaderData } from "react-router";
import Card from "./Cards";
import cards from "../data/cards.json";

export async function clientLoader() {
  return cards;
}

export default function Cardlist() {
  const cards = useLoaderData();

  return (
    <section className="grid">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          title={card.title}
          github={card.github}
          image={card.image}
        />
      ))}
    </section>
  );
}
