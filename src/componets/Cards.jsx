import { useNavigate } from "react-router";

export default function User({ id, name, title, github, image }) {
  const navigate = useNavigate();

  return (
    <article className="user-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{title}</p>
      <a href={github} target="_blank" rel="noreferrer">Se på GitHub</a>
      <button
        type="button"
        aria-label={`Se ${name}`}
        onClick={() => navigate(`/cards/${id}`)}
      >
        Klik på mig
      </button>
    </article>
  );
}
