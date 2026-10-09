import { Link } from "react-router";

export default function Header({ cards }) {
  return (
    <header>
      <h1>Velkommen til gruppe 4's AMA-Bots</h1>
      <nav className="bot-nav">
        <Link to="/">Alle</Link>
        {cards.map(card => (
          <Link key={card.id} to={`/cards/${card.id}`}>
            {card.name.split(" ")[0]}
          </Link>
        ))}
      </nav>
    </header>
  );
}
