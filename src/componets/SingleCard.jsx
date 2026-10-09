import { useLoaderData, Link } from "react-router";

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

export function NotFound() {
  return (
    <section>
      <p>Person blev ikke fundet.</p>
      <Link to="/">Tilbage</Link>
    </section>
  );
}
