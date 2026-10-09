import { useState, useEffect } from 'react'
import './App.css'
import Cardlist from './componets/Cardlist'

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      const url = "/data/cards.json";
      const response = await fetch(url);
      const data = await response.json();
      setCards(data);
    }
    fetchCards();
  }, []);

  return (
    <main className="app">
      <header>
        <h1>AMA-bot showcase</h1>
        <p>Meet the people behind the project</p>
      </header>
      <Cardlist cards={cards} />
    </main>
  )
}

export default App
