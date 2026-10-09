import { useRouteLoaderData } from "react-router";
import Card from "./Cards";

export default function Cardlist() {
  const cards = useRouteLoaderData("root");

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
