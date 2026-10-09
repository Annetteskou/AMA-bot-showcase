import './App.css'
import Cardlist from './componets/Cardlist'
import cards from './data/cards.json'

function App() {
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
