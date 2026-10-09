import { Link } from "react-router";

export default function User({ id, name, title, github, image }) {
  return (
    <article className="user-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{title}</p>
      <a href={github} target="_blank" rel="noreferrer">Se på GitHub</a>
      <Link
        className="card-button"
        to={`/cards/${id}`}
        aria-label={`Se ${name}`}
      >
        Klik på mig
      </Link>
    </article>
  );
}
