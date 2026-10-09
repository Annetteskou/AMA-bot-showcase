import { Routes, Route } from 'react-router'
import './App.css'
import Cardlist from './componets/Cardlist'
import SingleCard from './componets/SingleCard'
import cards from './data/cards.json'

function App() {
  return (
    <main className="app">
      <header>
        <h1>AMA-bot showcase</h1>
        <p>Meet the people behind the project</p>
      </header>
      <Routes>
        <Route path="/" element={<Cardlist cards={cards} />} />
        <Route path="/cards/:id" element={<SingleCard cards={cards} />} />
      </Routes>
    </main>
  )
}

export default App
