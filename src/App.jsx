import { Routes, Route } from 'react-router'
import './App.css'
import Footer from './componets/footer.jsx'

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
