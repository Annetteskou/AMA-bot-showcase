import Card from "./Cards";

export default function Cardlist({ cards }) {
  return (
    <section className="grid">
      {cards.map(card => (
        <Card
          key={card.id}
          name={card.name}
          title={card.title}
          github={card.github}
          image={card.image}
        />
      ))}
    </section>
  );
}
