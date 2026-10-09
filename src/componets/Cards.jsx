export default function User({ name, title, github, image }) {
  return (
    <article className="user-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{title}</p>
      <a href={github} target="_blank" rel="noreferrer">View on GitHub</a>
    </article>
  );
}