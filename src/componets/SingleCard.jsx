import { useParams, Link } from "react-router";

export default function SingleCard({ cards }) {
  const { id } = useParams();
  const card = cards.find(c => c.id === id);

  if (!card) {
    return (
      <section>
        <p>Person blev ikke fundet.</p>
        <Link to="/">Tilbage</Link>
      </section>
    );
  }

  return (
    <article className="user-card single-card">
      <img src={card.image} alt={card.name} />
      <h2>{card.name}</h2>
      <p>{card.title}</p>
      <a href={card.github} target="_blank" rel="noreferrer">View on GitHub</a>
      <Link to="/">Tilbage til alle</Link>
    </article>
  );
}
