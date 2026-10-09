import { useLoaderData, Link } from "react-router";
import cards from "../data/cards.json";

export async function clientLoader({ params }) {
  const card = cards.find(c => c.id === params.id);
  if (!card) throw new Response('Person blev ikke fundet', { status: 404 });
  return card;
}

export default function SingleCard() {
  const card = useLoaderData();

  return (
    <article className="user-card single-card">
      <img src={card.image} alt={card.name} />
      <h2>{card.name}</h2>
      <p>{card.title}</p>
      <a href={card.github} target="_blank" rel="noreferrer">Se på GitHub</a>
      <Link to="/">Tilbage til alle</Link>
    </article>
  );
}

export function ErrorBoundary() {
  return (
    <section>
      <p>Person blev ikke fundet.</p>
      <Link to="/">Tilbage</Link>
    </section>
  );
}
